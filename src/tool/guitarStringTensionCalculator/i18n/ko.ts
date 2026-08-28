import { createGuitarStringTensionContent } from './content-factory';

const title = '기타 줄 장력 계산기';
const slug = 'guitar-string-tension-calculator';
const description = '줄 굵기, 스케일 길이와 튜닝을 바탕으로 기타 각 줄의 장력을 추정합니다. 미터법 또는 야드파운드법으로 전체 줄 세트를 오프라인에서 비교할 수 있습니다.';

export const content = createGuitarStringTensionContent({
  slug,
  title,
  description,
  ui: {
    metric: '미터법', imperial: '야드파운드법', metricLength: '스케일 길이 mm', imperialLength: '스케일 길이 인치', metricGauge: '굵기 mm', imperialGauge: '굵기 mil', metricTension: 'kg 힘', imperialTension: '파운드 힘', chooseSet: '줄 세트 선택', scaleLength: '스케일 길이', tuning: '튜닝', material: '줄 재질', customSet: '굵기 편집', presetHint: '가장 비슷한 세트부터 시작', gauge: '굵기', note: '음', frequency: '주파수', tension: '장력', status: '연주감', totalTension: '넥에 걸리는 총 당김', averageTension: '줄당 평균', tensionSpread: '가장 느슨한 줄과 가장 팽팽한 줄의 차이', low: '느슨함', balanced: '균형', high: '팽팽함', standard: '스탠더드 E', halfStepDown: '반음 낮춤', dropD: 'Drop D', wholeStepDown: '온음 낮춤', openG: 'Open G', steel: '스틸', nickel: '니켈 도금 스틸', phosphorBronze: '포스퍼 브론즈', nylon: '나일론', presetExtraLight: 'Extra light', presetRegular: 'Regular', presetMedium: 'Medium', presetHeavy: 'Heavy', presetCustom: '굵기 편집', shortScale: '짧은 스케일 24.75인치', fenderScale: 'Fender 스케일 25.5인치', martinScale: 'Martin 스케일 25.4인치', customScale: '사용자 지정 스케일', customScaleHint: '너트에서 브리지까지의 진동 길이를 사용', formulaNote: 'T = 4L²f²μ 공식을 사용하며 μ는 지름과 재질 밀도에서 구한 단위 길이당 질량입니다.', modelNote: '이 오프라인 추정은 스틸 밀도 모델을 사용합니다. 코어, 와인딩, 코팅과 제조사의 선밀도가 실제 장력을 바꿀 수 있으므로 악기 설정을 바꾸기 전에 제조사 데이터를 확인하세요.', faqTitle: '기타 줄 장력 질문', bibliographyTitle: '장력 모델 참고 자료', tableLabel: '각 줄의 장력 측정값', tensionMapLabel: '6개 줄의 장력 프로필',
  },
  faq: [
    { question: '기타 줄 장력 계산기에는 무엇이 필요한가요?', answer: '진동 스케일 길이, 각 줄의 음높이, 줄 굵기와 일관된 재질 밀도 추정값이 필요합니다. 프리셋이 여섯 줄의 굵기를 제공하고 튜닝이 목표 주파수를 바꿉니다.' },
    { question: '기타 스케일이 길면 줄 장력이 커지나요?', answer: '네. 같은 굵기와 음높이라면 장력은 진동 길이의 제곱에 비례해 커집니다. 따라서 같은 10-46 세트도 24.75인치보다 25.5인치에서 더 팽팽하게 느껴질 수 있습니다.' },
    { question: '튜닝을 바꾸면 장력에 어떤 영향이 있나요?', answer: '음을 낮추면 주파수 비의 제곱에 따라 장력이 줄어듭니다. 온음 낮춤은 원래 장력의 약 79퍼센트, 반음 낮춤은 약 89퍼센트를 남깁니다.' },
    { question: '감긴 기타 줄의 결과는 정확한가요?', answer: '아니요. 이 모델은 줄을 재질 밀도를 가진 원통으로 봅니다. 감긴 줄에는 코어, 와인딩과 코팅이 있으므로 제조사의 선밀도 표가 더 정확합니다.' },
    { question: '편안한 기타 줄 장력은 어느 정도인가요?', answer: '모든 사람에게 맞는 기준은 없습니다. 이 도구는 극단을 찾기 위해 8파운드 미만을 느슨함, 25파운드 초과를 팽팽함으로 표시합니다. 연주 방식과 셋업, 악기도 감각을 결정합니다.' },
    { question: '새 줄 세트를 선택할 때 결과를 사용해도 되나요?', answer: '안전 보장이 아니라 시나리오 비교에 사용하세요. 굵기나 튜닝을 크게 바꾸기 전에는 악기 제조사 안내와 줄 제조사 사양을 확인하세요.' },
  ],
  howTo: [
    { name: '측정 단위 선택', text: '밀리미터와 kg 힘에는 미터법을, 인치와 mil과 파운드 힘에는 야드파운드법을 선택합니다. 단위를 바꿔도 물리적 설정은 그대로입니다.' },
    { name: '스케일과 튜닝 선택', text: '가장 가까운 스케일 길이를 고른 다음 실제 사용하는 튜닝을 선택합니다. 진동 길이를 알고 있다면 사용자 지정 스케일을 사용하세요.' },
    { name: '굵기 선택 또는 편집', text: '9-42, 10-46, 11-49 또는 12-54 프리셋으로 시작합니다. 혼합 세트나 사용자 지정 저음 줄은 굵기 편집을 여세요.' },
    { name: '장력 프로필 읽기', text: '각 줄, 넥에 걸리는 총 당김과 양 끝의 차이를 비교합니다. 느슨함과 팽팽함 표시가 확인할 값을 보여줍니다.' },
  ],
  seo: [
    { type: 'summary', title: '이 계산기가 비교하는 것', items: ['프리셋 또는 직접 입력한 굵기로 계산한 여섯 줄의 장력', '스케일 길이와 튜닝 변경에 따른 새 장력 프로필', 'kg 힘 또는 파운드 힘으로 보는 미터법과 야드파운드법 값', '극단을 찾기 쉬운 느슨함과 팽팽함 표시'] },
    { type: 'title', text: '줄 장력이 기타 셋업에 알려주는 것', level: 2 },
    { type: 'paragraph', html: '줄 장력은 선택한 음높이를 유지하는 당김의 힘입니다. 굵기만으로 결정되지 않으며 음높이와 진동 길이도 힘을 바꿉니다. 프로필을 보면 주변 줄보다 훨씬 느슨하거나 팽팽한 줄을 찾을 수 있습니다.' },
    { type: 'title', text: '추정에 사용하는 물리 모델', level: 2 },
    { type: 'paragraph', html: '진동하는 줄에서는 주파수, 진동 길이와 선밀도가 연결됩니다. 여기서는 T = 4L²f²μ를 사용하고 원형 단면과 스틸 밀도 모델에서 선밀도를 추정합니다.' },
    { type: 'title', text: '제조사 데이터가 여전히 중요한 이유', level: 2 },
    { type: 'paragraph', html: '감긴 줄은 코어와 와인딩으로 이루어지며 코팅과 구조가 선밀도를 바꿉니다. 결과는 비교용으로 사용하고 설치할 때는 제조사 제품 표를 기준으로 삼으세요.' },
    { type: 'list', items: ['악기 사양에서 스케일 길이를 확인하거나 너트에서 브리지까지 측정합니다.', '실제로 사용할 튜닝을 고릅니다.', '가장 가까운 굵기 프리셋으로 시작해 바꿀 줄만 편집합니다.', '개별 값과 차이를 확인하고 제조사 데이터와 비교합니다.'] },
  ],
});
