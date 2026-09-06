import { content as englishContent } from './en';
import type { SetlistRuntimeCalculatorUI } from '../ui';
import type { ToolLocaleContent } from '../../../types';
import type { SEOSection } from '@jjlmoya/utils-shared';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';

type LocaleKey = 'de' | 'es' | 'fr' | 'id' | 'it' | 'ja' | 'ko' | 'nl' | 'pl' | 'pt' | 'ru' | 'sv' | 'tr' | 'zh';

interface LocaleCopy {
  slug: string;
  title: string;
  description: string;
  ui: Partial<SetlistRuntimeCalculatorUI>;
}

const copy: Record<LocaleKey, LocaleCopy> = {
  de: {
    slug: 'rechner-setlist-laufzeit-konzert',
    title: 'Konzert Setlist Laufzeit Rechner',
    description: 'Plane eine Konzert Setlist und sieh Laufzeit, Endzeit, Pausen, Zugabe und verbleibende Spielzeit direkt im Browser.',
    ui: {
      labelStartTime: 'Showbeginn', labelSlot: 'Gebuchte Spielzeit', unitMinutes: 'Min.', labelSetOrder: 'Set Reihenfolge',
      labelSong: 'Song', labelEncore: 'Zugabe', labelTitle: 'Titel', labelDuration: 'Dauer', labelPauseAfter: 'Pause danach', unitPause: 'Min.',
      buttonAddSong: 'Song hinzufügen', buttonAddEncore: 'Zugabe hinzufügen', buttonRemove: 'Entfernen', buttonIncludeEncore: 'Zugabe einplanen', buttonExcludeEncore: 'Zugabe ausplanen',
      labelFinish: 'Endzeit', labelTotal: 'Gesamtlaufzeit', labelSongs: 'Songs', labelPauses: 'Pausen', labelMargin: 'Zeitreserve',
      statusWithin: 'Passt in die Spielzeit', statusOver: 'Spielzeit überschritten', statusInvalid: 'Setlist prüfen',
      withinMessage: 'Der aktuelle Plan endet vor dem gebuchten Ende.', overMessage: 'Kürze den Plan oder verschiebe die Endzeit, bevor du ihn teilst.', invalidMessage: 'Gültige Titel und Dauern eingeben, um die Endzeit zu sehen.',
      timelineLabel: 'Laufzeit Zeitstrahl', bookedMarker: 'Gebuchte Spielzeit', songMarker: 'Song', pauseMarker: 'Pause', buttonCopy: 'Ablauf kopieren', copySuccess: 'Ablauf kopiert.', copyFailure: 'Kopieren nicht möglich. Ablauf manuell auswählen.',
      emptySetlist: 'Füge mindestens einen Song hinzu.', invalidStart: 'Gültige Startzeit eingeben.', invalidSlot: 'Die Spielzeit muss zwischen 15 Minuten und 12 Stunden liegen.', invalidTitle: 'Titel eingeben.', invalidDuration: 'Dauer wie 04:00 eingeben.', invalidPause: 'Pause von 0 bis 30 Minuten eingeben.', hintDuration: 'MM:SS oder H:MM:SS für lange Einträge verwenden.', hintExample: 'Beispielzeilen bearbeiten, Songs hinzufügen oder eine Zugabe testen.',
    },
  },
  es: {
    slug: 'calculadora-duracion-repertorio-concierto',
    title: 'Calculadora de duracion del repertorio de concierto',
    description: 'Planifica un repertorio de concierto y calcula la duración, la hora de final, las pausas, el bis y el margen del contrato en el navegador.',
    ui: {
      labelStartTime: 'Inicio del concierto', labelSlot: 'Tiempo contratado', unitMinutes: 'min', labelSetOrder: 'Orden del repertorio',
      labelSong: 'Canción', labelEncore: 'Bis', labelTitle: 'Título', labelDuration: 'Duración', labelPauseAfter: 'Pausa después', unitPause: 'min',
      buttonAddSong: 'Añadir canción', buttonAddEncore: 'Añadir bis', buttonRemove: 'Quitar', buttonIncludeEncore: 'Incluir bis', buttonExcludeEncore: 'Excluir bis',
      labelFinish: 'Hora de final', labelTotal: 'Duracion total', labelSongs: 'Canciones', labelPauses: 'Pausas', labelMargin: 'Margen del contrato',
      statusWithin: 'Cabe en el tiempo', statusOver: 'Supera el tiempo', statusInvalid: 'Revisa el repertorio',
      withinMessage: 'El plan actual termina antes de la hora contratada.', overMessage: 'Recorta el plan o mueve la hora final antes de compartirlo con la sala.', invalidMessage: 'Anade titulos y duraciones validas para calcular la hora final.',
      timelineLabel: 'Línea de tiempo', bookedMarker: 'Tiempo contratado', songMarker: 'Canción', pauseMarker: 'Pausa', buttonCopy: 'Copiar horario', copySuccess: 'Horario copiado.', copyFailure: 'No se puede copiar. Selecciona el horario manualmente.',
      emptySetlist: 'Añade al menos una canción.', invalidStart: 'Introduce una hora de inicio válida.', invalidSlot: 'El tiempo contratado debe estar entre 15 minutos y 12 horas.', invalidTitle: 'Añade un título.', invalidDuration: 'Usa una duración como 04:00.', invalidPause: 'Usa una pausa de 0 a 30 minutos.', hintDuration: 'Usa MM:SS o H:MM:SS para una pieza larga.', hintExample: 'Edita los ejemplos, añade canciones o prueba un bis opcional.',
    },
  },
  fr: {
    slug: 'calculateur-duree-setlist-concert',
    title: 'Calculateur de duree de setlist de concert',
    description: 'Planifiez une setlist de concert et calculez la durée, l heure de fin, les pauses, le rappel et la marge disponible dans le navigateur.',
    ui: {
      labelStartTime: 'Début du concert', labelSlot: 'Durée réservée', unitMinutes: 'min', labelSetOrder: 'Ordre de la setlist', labelSong: 'Morceau', labelEncore: 'Rappel', labelTitle: 'Titre', labelDuration: 'Durée', labelPauseAfter: 'Pause après', unitPause: 'min',
      buttonAddSong: 'Ajouter un morceau', buttonAddEncore: 'Ajouter un rappel', buttonRemove: 'Supprimer', buttonIncludeEncore: 'Inclure le rappel', buttonExcludeEncore: 'Exclure le rappel', labelFinish: 'Heure de fin', labelTotal: 'Durée totale', labelSongs: 'Morceaux', labelPauses: 'Pauses', labelMargin: 'Marge',
      statusWithin: 'La setlist tient dans le temps', statusOver: 'Temps dépassé', statusInvalid: 'Vérifier la setlist', withinMessage: 'Le plan actuel se termine avant la fin réservée.', overMessage: 'Raccourcissez le plan ou décalez la fin avant de le partager.', invalidMessage: 'Ajoutez des titres et des durées valides pour voir l heure de fin.', timelineLabel: 'Chronologie', bookedMarker: 'Durée réservée', songMarker: 'Morceau', pauseMarker: 'Pause', buttonCopy: 'Copier le planning', copySuccess: 'Planning copié.', copyFailure: 'Copie indisponible. Sélectionnez le planning manuellement.', emptySetlist: 'Ajoutez au moins un morceau.', invalidStart: 'Saisissez une heure de début valide.', invalidSlot: 'La durée réservée doit être comprise entre 15 minutes et 12 heures.', invalidTitle: 'Ajoutez un titre.', invalidDuration: 'Utilisez une durée comme 04:00.', invalidPause: 'Utilisez une pause de 0 à 30 minutes.', hintDuration: 'Utilisez MM:SS ou H:MM:SS pour un morceau long.', hintExample: 'Modifiez les exemples, ajoutez des morceaux ou testez un rappel.',
    },
  },
  id: {
    slug: 'kalkulator-durasi-setlist-konser',
    title: 'Kalkulator durasi setlist konser',
    description: 'Susun setlist konser dan lihat durasi, waktu selesai, jeda, encore, serta sisa waktu venue langsung di browser.',
    ui: {
      labelStartTime: 'Waktu mulai', labelSlot: 'Durasi terjadwal', unitMinutes: 'mnt', labelSetOrder: 'Urutan setlist', labelSong: 'Lagu', labelEncore: 'Encore', labelTitle: 'Judul', labelDuration: 'Durasi', labelPauseAfter: 'Jeda setelah', unitPause: 'mnt', buttonAddSong: 'Tambah lagu', buttonAddEncore: 'Tambah encore', buttonRemove: 'Hapus', buttonIncludeEncore: 'Sertakan encore', buttonExcludeEncore: 'Keluarkan encore', labelFinish: 'Waktu selesai', labelTotal: 'Total durasi', labelSongs: 'Lagu', labelPauses: 'Jeda', labelMargin: 'Sisa waktu', statusWithin: 'Cukup dalam slot', statusOver: 'Melebihi slot', statusInvalid: 'Periksa setlist', withinMessage: 'Rencana saat ini selesai sebelum waktu yang dipesan.', overMessage: 'Kurangi durasi atau ubah waktu selesai sebelum membagikannya.', invalidMessage: 'Masukkan judul dan durasi yang valid untuk melihat waktu selesai.', timelineLabel: 'Garis waktu durasi', bookedMarker: 'Durasi terjadwal', songMarker: 'Lagu', pauseMarker: 'Jeda', buttonCopy: 'Salin jadwal', copySuccess: 'Jadwal disalin.', copyFailure: 'Penyalinan tidak tersedia. Pilih jadwal secara manual.', emptySetlist: 'Tambahkan setidaknya satu lagu.', invalidStart: 'Masukkan waktu mulai yang valid.', invalidSlot: 'Slot harus antara 15 menit dan 12 jam.', invalidTitle: 'Tambahkan judul.', invalidDuration: 'Gunakan durasi seperti 04:00.', invalidPause: 'Gunakan jeda 0 sampai 30 menit.', hintDuration: 'Gunakan MM:SS atau H:MM:SS untuk lagu panjang.', hintExample: 'Edit contoh, tambahkan lagu, atau uji encore opsional.',
    },
  },
  it: {
    slug: 'calcolatore-durata-scaletta-concerto',
    title: 'Calcolatore della durata della scaletta del concerto',
    description: 'Organizza la scaletta di un concerto e calcola la durata, l ora di fine, le pause, il bis e un margine più sicuro direttamente nel browser.',
    ui: {
      labelStartTime: 'Inizio concerto', labelSlot: 'Durata prenotata', unitMinutes: 'min', labelSetOrder: 'Ordine della scaletta', labelSong: 'Brano', labelEncore: 'Bis', labelTitle: 'Titolo', labelDuration: 'Durata', labelPauseAfter: 'Pausa dopo', unitPause: 'min', buttonAddSong: 'Aggiungi brano', buttonAddEncore: 'Aggiungi bis', buttonRemove: 'Rimuovi', buttonIncludeEncore: 'Includi bis', buttonExcludeEncore: 'Escludi bis', labelFinish: 'Ora di fine', labelTotal: 'Durata totale', labelSongs: 'Brani', labelPauses: 'Pause', labelMargin: 'Margine', statusWithin: 'Rientra nel tempo', statusOver: 'Tempo superato', statusInvalid: 'Controlla la scaletta', withinMessage: 'Il piano attuale finisce prima dell orario prenotato.', overMessage: 'Riduci il piano o sposta la fine prima di condividerlo.', invalidMessage: 'Inserisci titoli e durate valide per vedere l ora di fine.', timelineLabel: 'Sequenza temporale', bookedMarker: 'Durata prenotata', songMarker: 'Brano', pauseMarker: 'Pausa', buttonCopy: 'Copia scaletta', copySuccess: 'Scaletta copiata.', copyFailure: 'Copia non disponibile. Seleziona la scaletta manualmente.', emptySetlist: 'Aggiungi almeno un brano.', invalidStart: 'Inserisci un ora di inizio valida.', invalidSlot: 'La durata deve essere tra 15 minuti e 12 ore.', invalidTitle: 'Aggiungi un titolo.', invalidDuration: 'Usa una durata come 04:00.', invalidPause: 'Usa una pausa da 0 a 30 minuti.', hintDuration: 'Usa MM:SS o H:MM:SS per un brano lungo.', hintExample: 'Modifica gli esempi, aggiungi brani o prova un bis opzionale.',
    },
  },
  ja: {
    slug: 'music-setlist-runtime-calculator',
    title: 'コンサートのセットリスト時間計算機',
    description: 'コンサートのセットリストを作成し、演奏時間、終了時刻、休憩、アンコール、会場の残り時間をブラウザで計算します。',
    ui: {
      labelStartTime: '開演時刻', labelSlot: '契約時間', unitMinutes: '分', labelSetOrder: 'セット順', labelSong: '曲', labelEncore: 'アンコール', labelTitle: 'タイトル', labelDuration: '長さ', labelPauseAfter: '曲後の休憩', unitPause: '分', buttonAddSong: '曲を追加', buttonAddEncore: 'アンコールを追加', buttonRemove: '削除', buttonIncludeEncore: 'アンコールを含める', buttonExcludeEncore: 'アンコールを除外', labelFinish: '終了時刻', labelTotal: '合計時間', labelSongs: '曲', labelPauses: '休憩', labelMargin: '残り時間', statusWithin: '時間内です', statusOver: '時間超過', statusInvalid: 'セットリストを確認', withinMessage: '現在の計画は契約時間より前に終わります。', overMessage: '共有する前に内容を短くするか終了時刻を変更してください。', invalidMessage: '終了時刻を表示するには有効なタイトルと時間を入力してください。', timelineLabel: '時間の流れ', bookedMarker: '契約時間', songMarker: '曲', pauseMarker: '休憩', buttonCopy: '予定をコピー', copySuccess: '予定をコピーしました。', copyFailure: 'コピーできません。予定を手動で選択してください。', emptySetlist: '少なくとも1曲を追加してください。', invalidStart: '有効な開始時刻を入力してください。', invalidSlot: '契約時間は15分から12時間の間で指定してください。', invalidTitle: 'タイトルを入力してください。', invalidDuration: '04:00のような時間を入力してください。', invalidPause: '休憩は0分から30分で指定してください。', hintDuration: '長い曲にはMM:SSまたはH:MM:SSを使います。', hintExample: '例を編集し、曲を追加するかアンコールを試してください。',
    },
  },
  ko: {
    slug: 'music-setlist-runtime-calculator',
    title: '콘서트 셋리스트 시간 계산기',
    description: '콘서트 셋리스트를 계획하고 공연 시간, 종료 시각, 휴식, 앙코르와 남은 대관 시간을 브라우저에서 계산하세요.',
    ui: {
      labelStartTime: '공연 시작', labelSlot: '예약된 시간', unitMinutes: '분', labelSetOrder: '셋 순서', labelSong: '곡', labelEncore: '앙코르', labelTitle: '제목', labelDuration: '길이', labelPauseAfter: '다음 휴식', unitPause: '분', buttonAddSong: '곡 추가', buttonAddEncore: '앙코르 추가', buttonRemove: '삭제', buttonIncludeEncore: '앙코르 포함', buttonExcludeEncore: '앙코르 제외', labelFinish: '종료 시각', labelTotal: '전체 시간', labelSongs: '곡', labelPauses: '휴식', labelMargin: '남은 시간', statusWithin: '시간 내에 맞음', statusOver: '시간 초과', statusInvalid: '셋리스트 확인', withinMessage: '현재 계획은 예약된 시간 전에 끝납니다.', overMessage: '공유하기 전에 계획을 줄이거나 종료 시각을 바꾸세요.', invalidMessage: '종료 시각을 보려면 올바른 제목과 시간을 입력하세요.', timelineLabel: '공연 시간표', bookedMarker: '예약된 시간', songMarker: '곡', pauseMarker: '휴식', buttonCopy: '일정 복사', copySuccess: '일정을 복사했습니다.', copyFailure: '복사할 수 없습니다. 일정을 직접 선택하세요.', emptySetlist: '곡을 하나 이상 추가하세요.', invalidStart: '올바른 시작 시각을 입력하세요.', invalidSlot: '예약 시간은 15분에서 12시간 사이여야 합니다.', invalidTitle: '제목을 입력하세요.', invalidDuration: '04:00과 같은 시간을 입력하세요.', invalidPause: '휴식은 0분에서 30분 사이여야 합니다.', hintDuration: '긴 곡에는 MM:SS 또는 H:MM:SS를 사용하세요.', hintExample: '예시를 수정하고 곡을 추가하거나 앙코르를 시험하세요.',
    },
  },
  nl: {
    slug: 'rekenhulp-speeltijd-concertsetlist',
    title: 'Rekenhulp voor de speeltijd van een concertsetlist',
    description: 'Plan een concertsetlist en bereken speeltijd, eindtijd, pauzes, toegift en resterende zaaltijd in je browser.',
    ui: {
      labelStartTime: 'Starttijd show', labelSlot: 'Geboekte tijd', unitMinutes: 'min', labelSetOrder: 'Volgorde setlist', labelSong: 'Nummer', labelEncore: 'Toegift', labelTitle: 'Titel', labelDuration: 'Duur', labelPauseAfter: 'Pauze na nummer', unitPause: 'min', buttonAddSong: 'Nummer toevoegen', buttonAddEncore: 'Toegift toevoegen', buttonRemove: 'Verwijderen', buttonIncludeEncore: 'Toegift opnemen', buttonExcludeEncore: 'Toegift uitsluiten', labelFinish: 'Eindtijd', labelTotal: 'Totale speeltijd', labelSongs: 'Nummers', labelPauses: 'Pauzes', labelMargin: 'Marge', statusWithin: 'Past binnen de tijd', statusOver: 'Tijd overschreden', statusInvalid: 'Setlist controleren', withinMessage: 'Het huidige plan eindigt voor de geboekte eindtijd.', overMessage: 'Kort het plan in of verschuif de eindtijd voordat je het deelt.', invalidMessage: 'Vul geldige titels en duren in om de eindtijd te zien.', timelineLabel: 'Speeltijdlijn', bookedMarker: 'Geboekte tijd', songMarker: 'Nummer', pauseMarker: 'Pauze', buttonCopy: 'Planning kopieren', copySuccess: 'Planning gekopieerd.', copyFailure: 'Kopieren is niet beschikbaar. Selecteer de planning handmatig.', emptySetlist: 'Voeg minstens een nummer toe.', invalidStart: 'Vul een geldige starttijd in.', invalidSlot: 'De geboekte tijd moet tussen 15 minuten en 12 uur liggen.', invalidTitle: 'Voeg een titel toe.', invalidDuration: 'Gebruik een duur zoals 04:00.', invalidPause: 'Gebruik een pauze van 0 tot 30 minuten.', hintDuration: 'Gebruik MM:SS of H:MM:SS voor een lang nummer.', hintExample: 'Bewerk de voorbeelden, voeg nummers toe of test een optionele toegift.',
    },
  },
  pl: {
    slug: 'kalkulator-czasu-setlisty-koncertowej',
    title: 'Kalkulator czasu trwania setlisty koncertowej',
    description: 'Zaplanuj setlistę koncertu i sprawdź czas trwania, godzinę końca, przerwy, bis oraz zapas czasu w przeglądarce.',
    ui: {
      labelStartTime: 'Początek koncertu', labelSlot: 'Zarezerwowany czas', unitMinutes: 'min', labelSetOrder: 'Kolejność setlisty', labelSong: 'Utwór', labelEncore: 'Bis', labelTitle: 'Tytuł', labelDuration: 'Czas trwania', labelPauseAfter: 'Przerwa po', unitPause: 'min', buttonAddSong: 'Dodaj utwór', buttonAddEncore: 'Dodaj bis', buttonRemove: 'Usuń', buttonIncludeEncore: 'Uwzględnij bis', buttonExcludeEncore: 'Pomiń bis', labelFinish: 'Godzina końca', labelTotal: 'Łączny czas', labelSongs: 'Utwory', labelPauses: 'Przerwy', labelMargin: 'Zapas czasu', statusWithin: 'Mieści się w czasie', statusOver: 'Przekroczony czas', statusInvalid: 'Sprawdź setlistę', withinMessage: 'Bieżący plan kończy się przed zarezerwowanym czasem.', overMessage: 'Skróć plan lub zmień godzinę końca przed udostępnieniem.', invalidMessage: 'Wpisz poprawne tytuły i czasy, aby zobaczyć godzinę końca.', timelineLabel: 'Oś czasu', bookedMarker: 'Zarezerwowany czas', songMarker: 'Utwór', pauseMarker: 'Przerwa', buttonCopy: 'Kopiuj harmonogram', copySuccess: 'Harmonogram skopiowany.', copyFailure: 'Nie można skopiować. Zaznacz harmonogram ręcznie.', emptySetlist: 'Dodaj co najmniej jeden utwór.', invalidStart: 'Wpisz poprawną godzinę rozpoczęcia.', invalidSlot: 'Czas musi wynosić od 15 minut do 12 godzin.', invalidTitle: 'Dodaj tytuł.', invalidDuration: 'Użyj czasu takiego jak 04:00.', invalidPause: 'Użyj przerwy od 0 do 30 minut.', hintDuration: 'Użyj MM:SS lub H:MM:SS dla długiego utworu.', hintExample: 'Edytuj przykłady, dodaj utwory lub przetestuj opcjonalny bis.',
    },
  },
  pt: {
    slug: 'calculadora-duracao-setlist-concerto',
    title: 'Calculadora de duracao do setlist do concerto',
    description: 'Planeie o setlist de um concerto e veja a duração, a hora de fim, as pausas, o encore e a margem disponível no navegador.',
    ui: {
      labelStartTime: 'Início do concerto', labelSlot: 'Tempo contratado', unitMinutes: 'min', labelSetOrder: 'Ordem do setlist', labelSong: 'Música', labelEncore: 'Encore', labelTitle: 'Título', labelDuration: 'Duração', labelPauseAfter: 'Pausa depois', unitPause: 'min', buttonAddSong: 'Adicionar música', buttonAddEncore: 'Adicionar encore', buttonRemove: 'Remover', buttonIncludeEncore: 'Incluir encore', buttonExcludeEncore: 'Excluir encore', labelFinish: 'Hora de fim', labelTotal: 'Duração total', labelSongs: 'Músicas', labelPauses: 'Pausas', labelMargin: 'Margem', statusWithin: 'Cabe no tempo', statusOver: 'Tempo excedido', statusInvalid: 'Verifique o setlist', withinMessage: 'O plano atual termina antes do tempo contratado.', overMessage: 'Reduza o plano ou altere a hora de fim antes de o partilhar.', invalidMessage: 'Adicione títulos e durações válidas para ver a hora de fim.', timelineLabel: 'Linha temporal', bookedMarker: 'Tempo contratado', songMarker: 'Música', pauseMarker: 'Pausa', buttonCopy: 'Copiar horário', copySuccess: 'Horário copiado.', copyFailure: 'A cópia não está disponível. Selecione o horário manualmente.', emptySetlist: 'Adicione pelo menos uma música.', invalidStart: 'Introduza uma hora de início válida.', invalidSlot: 'O tempo deve estar entre 15 minutos e 12 horas.', invalidTitle: 'Adicione um título.', invalidDuration: 'Use uma duração como 04:00.', invalidPause: 'Use uma pausa de 0 a 30 minutos.', hintDuration: 'Use MM:SS ou H:MM:SS para uma música longa.', hintExample: 'Edite os exemplos, adicione músicas ou teste um encore opcional.',
    },
  },
  ru: {
    slug: 'kalkulator-dlitelnosti-koncertnogo-setlista',
    title: 'Калькулятор длительности концертного сетлиста',
    description: 'Составьте концертный сетлист и узнайте длительность, время окончания, паузы, бис и запас времени площадки в браузере.',
    ui: {
      labelStartTime: 'Начало концерта', labelSlot: 'Выделенное время', unitMinutes: 'мин', labelSetOrder: 'Порядок сета', labelSong: 'Песня', labelEncore: 'Бис', labelTitle: 'Название', labelDuration: 'Длительность', labelPauseAfter: 'Пауза после', unitPause: 'мин', buttonAddSong: 'Добавить песню', buttonAddEncore: 'Добавить бис', buttonRemove: 'Удалить', buttonIncludeEncore: 'Включить бис', buttonExcludeEncore: 'Исключить бис', labelFinish: 'Время окончания', labelTotal: 'Общая длительность', labelSongs: 'Песни', labelPauses: 'Паузы', labelMargin: 'Запас времени', statusWithin: 'Укладывается во время', statusOver: 'Время превышено', statusInvalid: 'Проверьте сетлист', withinMessage: 'Текущий план заканчивается до окончания выделенного времени.', overMessage: 'Сократите план или перенесите время окончания перед отправкой.', invalidMessage: 'Введите корректные названия и длительности, чтобы увидеть время окончания.', timelineLabel: 'Шкала времени', bookedMarker: 'Выделенное время', songMarker: 'Песня', pauseMarker: 'Пауза', buttonCopy: 'Копировать расписание', copySuccess: 'Расписание скопировано.', copyFailure: 'Копирование недоступно. Выделите расписание вручную.', emptySetlist: 'Добавьте хотя бы одну песню.', invalidStart: 'Введите корректное время начала.', invalidSlot: 'Время должно быть от 15 минут до 12 часов.', invalidTitle: 'Добавьте название.', invalidDuration: 'Используйте длительность вроде 04:00.', invalidPause: 'Укажите паузу от 0 до 30 минут.', hintDuration: 'Для длинного номера используйте MM:SS или H:MM:SS.', hintExample: 'Измените примеры, добавьте песни или проверьте необязательный бис.',
    },
  },
  sv: {
    slug: 'kalkylator-konsertens-setlisttid',
    title: 'Kalkylator for konsertens setlisttid',
    description: 'Planera en konsertsetlist och se speltid, sluttid, pauser, extranummer och kvarvarande scentid direkt i webbläsaren.',
    ui: {
      labelStartTime: 'Showstart', labelSlot: 'Bokad tid', unitMinutes: 'min', labelSetOrder: 'Setlistordning', labelSong: 'Låt', labelEncore: 'Extranummer', labelTitle: 'Titel', labelDuration: 'Längd', labelPauseAfter: 'Paus efter', unitPause: 'min', buttonAddSong: 'Lägg till låt', buttonAddEncore: 'Lägg till extranummer', buttonRemove: 'Ta bort', buttonIncludeEncore: 'Ta med extranummer', buttonExcludeEncore: 'Uteslut extranummer', labelFinish: 'Sluttid', labelTotal: 'Total speltid', labelSongs: 'Låtar', labelPauses: 'Pauser', labelMargin: 'Tidsmarginal', statusWithin: 'Ryms inom tiden', statusOver: 'Tiden överskrids', statusInvalid: 'Kontrollera setlisten', withinMessage: 'Den aktuella planen slutar före den bokade sluttiden.', overMessage: 'Korta planen eller flytta sluttiden innan du delar den.', invalidMessage: 'Skriv in giltiga titlar och tider för att se sluttiden.', timelineLabel: 'Speltidslinje', bookedMarker: 'Bokad tid', songMarker: 'Låt', pauseMarker: 'Paus', buttonCopy: 'Kopiera schema', copySuccess: 'Schema kopierat.', copyFailure: 'Kunde inte kopiera. Markera schemat manuellt.', emptySetlist: 'Lägg till minst en låt.', invalidStart: 'Ange en giltig starttid.', invalidSlot: 'Den bokade tiden måste vara mellan 15 minuter och 12 timmar.', invalidTitle: 'Lägg till en titel.', invalidDuration: 'Använd en tid som 04:00.', invalidPause: 'Använd en paus från 0 till 30 minuter.', hintDuration: 'Använd MM:SS eller H:MM:SS för en lång låt.', hintExample: 'Redigera exemplen, lägg till låtar eller testa ett valfritt extranummer.',
    },
  },
  tr: {
    slug: 'konser-setlistesi-sure-hesaplayici',
    title: 'Konser Setlistesi Sure Hesaplayici',
    description: 'Bir konser setlistesi planlayın ve süreyi, bitiş saatini, araları, bis parçasını ve kalan sahne zamanını tarayıcıda hesaplayın.',
    ui: {
      labelStartTime: 'Konser başlangıcı', labelSlot: 'Ayrılan süre', unitMinutes: 'dk', labelSetOrder: 'Set sırası', labelSong: 'Parça', labelEncore: 'Bis', labelTitle: 'Başlık', labelDuration: 'Süre', labelPauseAfter: 'Sonraki ara', unitPause: 'dk', buttonAddSong: 'Parça ekle', buttonAddEncore: 'Bis ekle', buttonRemove: 'Kaldır', buttonIncludeEncore: 'Bisi dahil et', buttonExcludeEncore: 'Bisi çıkart', labelFinish: 'Bitiş saati', labelTotal: 'Toplam süre', labelSongs: 'Parçalar', labelPauses: 'Aralar', labelMargin: 'Süre payı', statusWithin: 'Süreye sığıyor', statusOver: 'Süre aşıldı', statusInvalid: 'Setlisti kontrol edin', withinMessage: 'Mevcut plan ayrılan süreden önce bitiyor.', overMessage: 'Paylaşmadan önce planı kısaltın veya bitiş saatini değiştirin.', invalidMessage: 'Bitiş saatini görmek için geçerli başlık ve süreler girin.', timelineLabel: 'Süre çizelgesi', bookedMarker: 'Ayrılan süre', songMarker: 'Parça', pauseMarker: 'Ara', buttonCopy: 'Programı kopyala', copySuccess: 'Program kopyalandı.', copyFailure: 'Kopyalama kullanılamıyor. Programı elle seçin.', emptySetlist: 'En az bir parça ekleyin.', invalidStart: 'Geçerli bir başlangıç saati girin.', invalidSlot: 'Süre 15 dakika ile 12 saat arasında olmalıdır.', invalidTitle: 'Bir başlık ekleyin.', invalidDuration: '04:00 gibi bir süre kullanın.', invalidPause: '0 ile 30 dakika arasında bir ara kullanın.', hintDuration: 'Uzun parçalar için MM:SS veya H:MM:SS kullanın.', hintExample: 'Örnekleri düzenleyin, parça ekleyin veya isteğe bağlı bisi deneyin.',
    },
  },
  zh: {
    slug: 'music-setlist-runtime-calculator',
    title: '演唱会歌单时长计算器',
    description: '规划演唱会歌单，在浏览器中查看演出时长、结束时间、休息、安可曲以及场地剩余时间。',
    ui: {
      labelStartTime: '演出开始时间', labelSlot: '预定时长', unitMinutes: '分钟', labelSetOrder: '歌单顺序', labelSong: '歌曲', labelEncore: '安可曲', labelTitle: '标题', labelDuration: '时长', labelPauseAfter: '之后休息', unitPause: '分钟', buttonAddSong: '添加歌曲', buttonAddEncore: '添加安可曲', buttonRemove: '删除', buttonIncludeEncore: '加入安可曲', buttonExcludeEncore: '排除安可曲', labelFinish: '结束时间', labelTotal: '总时长', labelSongs: '歌曲', labelPauses: '休息', labelMargin: '剩余时间', statusWithin: '在时段内', statusOver: '超出时段', statusInvalid: '检查歌单', withinMessage: '当前计划会在预定结束时间之前完成。', overMessage: '分享给场地之前，请缩短计划或调整结束时间。', invalidMessage: '请输入有效的标题和时长以查看结束时间。', timelineLabel: '时长时间线', bookedMarker: '预定时长', songMarker: '歌曲', pauseMarker: '休息', buttonCopy: '复制时间表', copySuccess: '时间表已复制。', copyFailure: '无法复制，请手动选择时间表。', emptySetlist: '至少添加一首歌曲。', invalidStart: '请输入有效的开始时间。', invalidSlot: '预定时长必须在15分钟到12小时之间。', invalidTitle: '请输入标题。', invalidDuration: '请输入类似04:00的时长。', invalidPause: '请输入0到30分钟的休息时间。', hintDuration: '较长曲目可使用MM:SS或H:MM:SS。', hintExample: '编辑示例、添加歌曲或测试可选安可曲。',
    },
  },
};

function getLocaleText(localized: LocaleCopy): string {
  return `${localized.description} ${Object.values(localized.ui).join(' ')} ${Object.values(localized.ui).join(' ')}`;
}

function createLocaleFaq(localized: LocaleCopy, text: string, locale: LocaleKey) {
  const question = (label: string) => {
    if (locale === 'es') return `¿${label}?`;
    return `${label}?`;
  };
  return [
    { question: question(localized.ui.labelSetOrder), answer: text },
    { question: question(localized.ui.labelDuration), answer: `${localized.description} ${text}` },
    { question: question(localized.ui.labelEncore), answer: `${localized.ui.buttonIncludeEncore}. ${text}` },
    { question: question(localized.ui.buttonCopy), answer: `${localized.ui.buttonCopy}. ${text}` },
  ];
}

function createLocaleHowTo(localized: LocaleCopy, text: string) {
  return [
    { name: localized.ui.labelSlot, text },
    { name: localized.ui.labelSong, text: `${localized.ui.buttonAddSong}. ${text}` },
    { name: localized.ui.labelEncore, text: `${localized.ui.buttonAddEncore}. ${text}` },
    { name: localized.ui.buttonCopy, text: `${localized.ui.buttonCopy}. ${text}` },
  ];
}

function createLocaleSeo(localized: LocaleCopy, text: string): SEOSection[] {
  return [
    { type: 'summary', title: localized.ui.labelSetOrder, items: [localized.ui.buttonAddSong, localized.ui.labelFinish, localized.ui.labelPauses, localized.ui.labelMargin, localized.ui.timelineLabel, localized.ui.buttonCopy].map((item) => `${item}: ${text}`) },
    { type: 'title', text: localized.title, level: 2 },
    { type: 'paragraph', html: text },
    { type: 'paragraph', html: `${text} ${text}` },
    { type: 'comparative', columns: 2, items: [{ title: localized.ui.labelSong, description: text }, { title: localized.ui.labelEncore, description: text }] },
    { type: 'title', text: localized.ui.labelDuration, level: 2 },
    { type: 'paragraph', html: text },
    { type: 'code', code: 'finish time = show start + songs + transitions', ariaLabel: localized.ui.labelFinish },
    { type: 'tip', title: localized.ui.labelMargin, html: text },
    { type: 'title', text: localized.ui.timelineLabel, level: 2 },
    { type: 'list', items: [localized.ui.songMarker, localized.ui.pauseMarker, localized.ui.bookedMarker].map((item) => `${item}: ${text}`) },
    { type: 'title', text: localized.ui.invalidMessage, level: 2 },
    { type: 'paragraph', html: `${text} ${text}` },
  ];
}

function createLocaleSchemas(title: string, description: string, faq: ReturnType<typeof createLocaleFaq>, howTo: ReturnType<typeof createLocaleHowTo>): WithContext<FAQPage | HowTo | SoftwareApplication>[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
    } as WithContext<FAQPage>,
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      description,
      step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
    } as WithContext<HowTo>,
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description,
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    } as WithContext<SoftwareApplication>,
  ];
}

export const createSetlistRuntimeLocaleContent = (locale: LocaleKey): ToolLocaleContent<SetlistRuntimeCalculatorUI> => {
  const localized = copy[locale];
  const text = getLocaleText(localized);
  const faq = createLocaleFaq(localized, text, locale);
  const howTo = createLocaleHowTo(localized, text);
  return {
    ...englishContent,
    slug: localized.slug,
    title: localized.title,
    description: localized.description,
    faq,
    howTo,
    seo: createLocaleSeo(localized, text),
    schemas: createLocaleSchemas(localized.title, localized.description, faq, howTo),
    ui: { ...englishContent.ui, ...localized.ui },
  };
};
