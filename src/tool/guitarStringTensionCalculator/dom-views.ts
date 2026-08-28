import type { GuitarStringTensionUI } from './ui';
import type { MeasurementSystem, TensionSet, TensionStatus } from './logic';
import { evaluateSet } from './evaluator';

export function renderResult(root: HTMLElement, result: TensionSet, ui: GuitarStringTensionUI, system: MeasurementSystem): void {
  const output = root.querySelector<HTMLElement>('[data-gst-output]');
  if (!output) return;
  output.innerHTML = `${renderSummary(result, ui, system)}${renderProfile(result, ui, system)}${renderTable(result, ui, system)}<p class="gst-note">${ui.modelNote}</p><p class="gst-note">${ui.formulaNote}</p>`;
}

export function renderForm(root: HTMLElement, ui: GuitarStringTensionUI, system: MeasurementSystem): void {
  const form = root.querySelector<HTMLElement>('[data-gst-form]');
  if (!form) return;
  form.innerHTML = `${renderUnitSwitch(ui, system)}${renderSelects(ui)}${renderPresetRail(ui)}${renderAdvancedInputs(ui, system)}`;
}

function renderUnitSwitch(ui: GuitarStringTensionUI, system: MeasurementSystem): string {
  const metricActive = system === 'metric' ? ' gst-active' : '';
  const imperialActive = system === 'imperial' ? ' gst-active' : '';
  return `<div class="gst-unit-switch" role="group" aria-label="${ui.metric} or ${ui.imperial}">
    <button type="button" data-gst-unit="metric" class="gst-unit-button${metricActive}">${ui.metric}</button>
    <button type="button" data-gst-unit="imperial" class="gst-unit-button${imperialActive}">${ui.imperial}</button>
  </div>`;
}

function renderSelects(ui: GuitarStringTensionUI): string {
  return `<div class="gst-controls-grid">
    ${renderSelect('gst-scale', ui.scaleLength, [['shortScale', ui.shortScale], ['fenderScale', ui.fenderScale], ['martinScale', ui.martinScale], ['customScale', ui.customScale]])}
    ${renderSelect('gst-tuning', ui.tuning, [['standard', ui.standard], ['halfStepDown', ui.halfStepDown], ['dropD', ui.dropD], ['wholeStepDown', ui.wholeStepDown], ['openG', ui.openG]])}
  </div>`;
}

function renderSelect(id: string, label: string, options: string[][]): string {
  const first = options[0] ?? ['', ''];
  const optionMarkup = options.map(([value, text], index) => `<button type="button" role="option" data-gst-option="${id}" data-gst-value="${value}" class="gst-option${index === 0 ? ' gst-option-active' : ''}">${text}</button>`).join('');
  return `<div class="gst-field gst-select" data-gst-select-wrap="${id}"><span>${label}</span><button type="button" class="gst-select-trigger" data-gst-select-trigger aria-expanded="false">${first[1]}<i aria-hidden="true"></i></button><div class="gst-options" data-gst-options hidden role="listbox">${optionMarkup}</div><input type="hidden" data-gst-select="${id}" value="${first[0]}"></div>`;
}

function renderPresetRail(ui: GuitarStringTensionUI): string {
  return `<div class="gst-preset-block"><div class="gst-preset-heading"><span>${ui.chooseSet}</span><small>${ui.presetHint}</small></div><div class="gst-preset-list">
    <button type="button" data-gst-preset="extraLight">${ui.presetExtraLight}<strong>9 - 42</strong></button>
    <button type="button" data-gst-preset="regular" class="gst-preset-active">${ui.presetRegular}<strong>10 - 46</strong></button>
    <button type="button" data-gst-preset="medium">${ui.presetMedium}<strong>11 - 49</strong></button>
    <button type="button" data-gst-preset="heavy">${ui.presetHeavy}<strong>12 - 54</strong></button>
  </div></div>`;
}

function renderAdvancedInputs(ui: GuitarStringTensionUI, system: MeasurementSystem): string {
  const gaugeLabel = system === 'metric' ? ui.metricGauge : ui.imperialGauge;
  const lengthLabel = system === 'metric' ? ui.metricLength : ui.imperialLength;
  const lengthValue = system === 'metric' ? '647.7' : '25.5';
  const strings = [6, 5, 4, 3, 2, 1].map((id) => renderStringField(id, ui, gaugeLabel, system));
  return `<details class="gst-advanced" data-gst-advanced><summary>${ui.customSet}</summary><div class="gst-inputs"><label class="gst-field gst-length"><span>${lengthLabel}</span><input data-gst-scale-input inputmode="decimal" type="number" min="400" max="1000" step="0.1" value="${lengthValue}"><small>${ui.customScaleHint}</small></label><div class="gst-string-fields">${strings.join('')}</div></div></details>`;
}

function renderStringField(id: number, ui: GuitarStringTensionUI, gaugeLabel: string, system: MeasurementSystem): string {
  const gauge = [0.046, 0.036, 0.026, 0.017, 0.013, 0.010][6 - id];
  const value = system === 'metric' ? (gauge * 25.4).toFixed(2) : (gauge * 1000).toFixed(0);
  const step = system === 'metric' ? '0.01' : '1';
  return `<label class="gst-string-field"><span class="gst-string-id">${id}</span><span class="gst-string-note" data-gst-note="${id}">E${id === 6 ? '2' : '4'}</span><span class="gst-string-caption">${ui.gauge}</span><input data-gst-gauge="${id}" aria-label="${ui.gauge} ${id}" inputmode="decimal" type="number" min="${system === 'metric' ? '0.15' : '6'}" max="${system === 'metric' ? '3' : '120'}" step="${step}" value="${value}"><small>${gaugeLabel}</small></label>`;
}

function renderSummary(result: TensionSet, ui: GuitarStringTensionUI, system: MeasurementSystem): string {
  const evaluation = evaluateSet(result);
  const total = system === 'metric' ? `${formatNumber(result.totalKilograms)} kg` : `${formatNumber(result.totalPounds)} lb`;
  const spread = system === 'metric' ? `${formatNumber(result.spreadPounds * 0.45359237)} kg` : `${formatNumber(result.spreadPounds)} lb`;
  return `<div class="gst-summary"><div class="gst-summary-total"><span>${ui.totalTension}</span><strong>${total}</strong><b class="gst-status gst-status-${evaluation.status}">${statusText(evaluation.status, ui)}</b></div><div class="gst-summary-metrics"><span><b>${spread}</b><br>${ui.tensionSpread}</span></div></div>`;
}

function renderProfile(result: TensionSet, ui: GuitarStringTensionUI, system: MeasurementSystem): string {
  const maximum = Math.max(...result.strings.map((string) => string.pounds), 1);
  const rows = result.strings.map((string) => {
    const width = ((string.pounds / maximum) * 100).toFixed(1);
    const value = system === 'metric' ? `${formatNumber(string.kilograms)} kg` : `${formatNumber(string.pounds)} lb`;
    return `<div class="gst-profile-row"><span>${string.id}</span><strong>${string.note}</strong><span class="gst-profile-bar"><i class="gst-string-${string.status}" style="width:${width}%"></i></span><b>${value}</b></div>`;
  }).join('');
  return `<section class="gst-profile" aria-label="${ui.tensionMapLabel}"><h3>${ui.tensionMapLabel}</h3><div class="gst-profile-list">${rows}</div></section>`;
}

function renderTable(result: TensionSet, ui: GuitarStringTensionUI, system: MeasurementSystem): string {
  const rows = result.strings.map((string) => `<tr><th scope="row">${string.id}</th><td>${string.note}</td><td>${formatGauge(string.gaugeInches, system)}</td><td><strong>${system === 'metric' ? `${formatNumber(string.kilograms)} kg` : `${formatNumber(string.pounds)} lb`}</strong></td><td><span class="gst-status gst-status-${string.status}">${statusText(string.status, ui)}</span></td></tr>`).join('');
  return `<div class="gst-table-wrap"><table><caption>${ui.tableLabel}</caption><thead><tr><th scope="col">#</th><th scope="col">${ui.note}</th><th scope="col">${ui.gauge}</th><th scope="col">${ui.tension}</th><th scope="col">${ui.status}</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

function formatGauge(gaugeInches: number, system: MeasurementSystem): string {
  return system === 'metric' ? `${(gaugeInches * 25.4).toFixed(2)} mm` : `${(gaugeInches * 1000).toFixed(0)} mil`;
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en', { maximumFractionDigits: 1 }).format(value);
}

function statusText(status: TensionStatus, ui: GuitarStringTensionUI): string {
  if (status === 'low') return ui.low;
  if (status === 'high') return ui.high;
  return ui.balanced;
}
