import { generateSchemas } from './logic/schemas';
import type { KnownLocale, ToolLocaleContent } from '../types';
import type { AudioConverterUI } from './AudioConverter.astro';
import type { SEOSection } from '@jjlmoya/utils-shared';

export type AudioFormat = 'mp3' | 'ogg' | 'wav';

interface AudioCopy {
  slug: (from: string, to: string) => string;
  title: (from: string, to: string) => string;
  description: (from: string, to: string) => string;
  ui: Omit<AudioConverterUI, 'dragText' | 'convertText'>;
  dragText: (from: string) => string;
  convertText: (from: string, to: string) => string;
  faq: (from: string, to: string) => { question: string; answer: string }[];
  howTo: (from: string, to: string) => { name: string; text: string }[];
  seo: (from: string, to: string) => SEOSection[];
}

const pair = (from: string, to: string) => `${from.toUpperCase()} → ${to.toUpperCase()}`;

const COPY: Record<KnownLocale, AudioCopy> = {
  es: {
    slug: (from, to) => `convertir-${from}-a-${to}`,
    title: (from, to) => `Convertir ${from.toUpperCase()} a ${to.toUpperCase()} online`,
    description: (from, to) => `Convierte archivos ${from.toUpperCase()} a ${to.toUpperCase()} directamente en tu navegador. Procesamiento local con FFmpeg WebAssembly, sin subir tus audios a ningún servidor.`,
    ui: { selectFiles: 'Seleccionar archivos', processedFiles: 'Archivos procesados', downloadAll: 'Descargar todo (.zip)', pending: 'Pendiente', loadingEngine: 'Preparando el motor de audio…', converting: 'Convirtiendo…', ready: 'Listo', error: 'Error de conversión', tooLarge: 'Archivo demasiado grande', download: 'Descargar', privacyNote: 'El audio se procesa localmente en tu dispositivo y no se envía a internet.' },
    dragText: (from) => `Arrastra tus archivos ${from.toUpperCase()} aquí`,
    convertText: (_, to) => `Para convertirlos a ${to.toUpperCase()} al instante`,
    faq: (from, to) => [
      { question: `¿Cómo convierto ${from.toUpperCase()} a ${to.toUpperCase()}?`, answer: 'Selecciona uno o varios archivos y el conversor ejecutará la transformación en la memoria de tu navegador. Después podrás descargar cada resultado o un ZIP con todos ellos.' },
      { question: '¿Se suben mis archivos de audio?', answer: 'No. El archivo permanece en tu dispositivo. El motor FFmpeg WebAssembly se ejecuta en el navegador y solo descarga sus propios recursos técnicos, nunca tu audio.' },
      { question: '¿Qué calidad tendrá el archivo convertido?', answer: 'WAV se genera como PCM sin compresión. OGG usa Vorbis con un ajuste de calidad alto y MP3 se genera a 192 kbps, una configuración equilibrada para escuchar y compartir.' },
      { question: '¿Hay algún límite de tamaño?', answer: 'Para mantener estable el procesamiento local, la herramienta acepta archivos de hasta 100 MB. Los archivos grandes pueden necesitar más memoria y tiempo en dispositivos móviles.' },
    ],
    howTo: (from, to) => [
      { name: 'Selecciona el audio', text: `Arrastra tus archivos ${from.toUpperCase()} al área de trabajo o pulsa el botón para buscarlos en tu dispositivo.` },
      { name: 'Espera la conversión', text: `El motor local procesa cada audio y muestra su progreso hasta generar el archivo ${to.toUpperCase()}.` },
      { name: 'Descarga el resultado', text: 'Descarga cada archivo por separado o usa el botón ZIP cuando hayas terminado varios audios.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Convertidor de ${from.toUpperCase()} a ${to.toUpperCase()} con privacidad local`, level: 2 },
      { type: 'paragraph', html: `Convertir ${from.toUpperCase()} a ${to.toUpperCase()} resulta útil cuando una aplicación, un reproductor o un proyecto exige otro formato de audio. Esta herramienta utiliza un motor de conversión en WebAssembly para leer el archivo, cambiar su códec y preparar una descarga compatible sin enviar el contenido a un servidor.` },
      { type: 'title', text: 'Calidad, compatibilidad y tamaño', level: 3 },
      { type: 'paragraph', html: `Cada formato responde a una necesidad distinta. ${to.toUpperCase()} puede ofrecer una combinación diferente de compatibilidad, peso y calidad, mientras que el archivo original ${from.toUpperCase()} permanece intacto. La conversión crea una copia nueva para que puedas comparar los resultados antes de sustituir nada.` },
      { type: 'title', text: 'Procesamiento local en el navegador', level: 3 },
      { type: 'paragraph', html: 'El audio se lee desde la memoria del dispositivo y se procesa dentro de un trabajador de FFmpeg WebAssembly. No se crea una cuenta, no hay una cola remota y el archivo no abandona tu equipo. Al cerrar la pestaña, los datos temporales dejan de estar disponibles.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Conversión por lotes de varios audios.', 'Descarga individual o agrupada en ZIP.', 'Lectura de metadatos cuando el formato lo permite.', 'Límite práctico de 100 MB por archivo para cuidar la memoria.'] },
    ],
  },
  en: {
    slug: (from, to) => `${from}-to-${to}-converter`,
    title: (from, to) => `Convert ${from.toUpperCase()} to ${to.toUpperCase()} online`,
    description: (from, to) => `Convert ${from.toUpperCase()} files to ${to.toUpperCase()} directly in your browser. Local FFmpeg WebAssembly processing keeps your audio away from external servers.`,
    ui: { selectFiles: 'Select files', processedFiles: 'Processed files', downloadAll: 'Download all (.zip)', pending: 'Pending', loadingEngine: 'Preparing audio engine…', converting: 'Converting…', ready: 'Ready', error: 'Conversion error', tooLarge: 'File is too large', download: 'Download', privacyNote: 'Audio is processed locally on your device and is never uploaded.' },
    dragText: (from) => `Drop your ${from.toUpperCase()} files here`,
    convertText: (_, to) => `To convert them to ${to.toUpperCase()} instantly`,
    faq: (from, to) => [
      { question: `How do I convert ${from.toUpperCase()} to ${to.toUpperCase()}?`, answer: 'Select one or more files and the converter transforms them in your browser memory. Download each result separately or collect all completed files in a ZIP archive.' },
      { question: 'Are my audio files uploaded?', answer: 'No. Your files stay on your device. FFmpeg WebAssembly runs in the browser and downloads only its technical runtime resources, never your audio content.' },
      { question: 'What quality will the converted file have?', answer: 'WAV is produced as uncompressed PCM. OGG uses high quality Vorbis settings, while MP3 is created at 192 kbps for a practical balance between quality and size.' },
      { question: 'Is there a file size limit?', answer: 'For reliable local processing, files are limited to 100 MB. Larger audio needs more memory and may take longer on mobile devices.' },
    ],
    howTo: (from, to) => [
      { name: 'Choose your audio', text: `Drop your ${from.toUpperCase()} files into the workspace or use the button to browse your device.` },
      { name: 'Wait for conversion', text: `The local engine processes each file and reports progress until the ${to.toUpperCase()} output is ready.` },
      { name: 'Download the result', text: 'Download files one by one or use the ZIP button after processing several audio files.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Private ${from.toUpperCase()} to ${to.toUpperCase()} audio conversion`, level: 2 },
      { type: 'paragraph', html: `Converting ${from.toUpperCase()} to ${to.toUpperCase()} is useful when an app, player, or production workflow requires another audio format. This tool runs a WebAssembly conversion engine in your browser to read the source, change its codec, and prepare a compatible download without sending the recording to a remote server.` },
      { type: 'title', text: 'Quality, compatibility and file size', level: 3 },
      { type: 'paragraph', html: `Each format serves a different purpose. ${to.toUpperCase()} may offer a different balance of compatibility, file size, and sound quality, while the original ${from.toUpperCase()} remains untouched. The conversion creates a separate copy so you can compare it before replacing anything.` },
      { type: 'title', text: 'Local browser processing', level: 3 },
      { type: 'paragraph', html: 'The audio is read from your device memory and processed inside an FFmpeg WebAssembly worker. There is no account, remote queue, or upload. When the tab closes, the temporary conversion data is no longer available.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Batch conversion for multiple audio files.', 'Individual downloads or one ZIP archive.', 'Metadata mapping when the format supports it.', 'A practical 100 MB per file limit to protect browser memory.'] },
    ],
  },
  fr: {
    slug: (from, to) => `convertisseur-${from}-en-${to}`,
    title: (from, to) => `Convertir ${from.toUpperCase()} en ${to.toUpperCase()} en ligne`,
    description: (from, to) => `Convertissez vos fichiers ${from.toUpperCase()} en ${to.toUpperCase()} dans le navigateur. Le traitement local par FFmpeg WebAssembly ne transfère pas vos fichiers.`,
    ui: { selectFiles: 'Sélectionner des fichiers', processedFiles: 'Fichiers traités', downloadAll: 'Tout télécharger (.zip)', pending: 'En attente', loadingEngine: 'Préparation du moteur audio…', converting: 'Conversion…', ready: 'Prêt', error: 'Erreur de conversion', tooLarge: 'Fichier trop volumineux', download: 'Télécharger', privacyNote: 'L’audio est traité localement sur votre appareil et n’est jamais envoyé.' },
    dragText: (from) => `Déposez vos fichiers ${from.toUpperCase()} ici`,
    convertText: (_, to) => `Pour les convertir en ${to.toUpperCase()} instantanément`,
    faq: (from, to) => [
      { question: `Comment convertir ${from.toUpperCase()} en ${to.toUpperCase()} ?`, answer: 'Sélectionnez un ou plusieurs fichiers. La conversion se déroule dans la mémoire de votre navigateur, puis chaque résultat peut être téléchargé séparément ou dans une archive ZIP.' },
      { question: 'Mes fichiers audio sont-ils envoyés ?', answer: 'Non. Vos fichiers restent sur votre appareil. FFmpeg WebAssembly fonctionne dans le navigateur et ne télécharge que ses ressources techniques, jamais votre audio.' },
      { question: 'Quelle qualité aura le fichier obtenu ?', answer: 'Le WAV utilise un PCM sans compression. L’OGG emploie Vorbis avec une qualité élevée et le MP3 est produit à 192 kbit/s pour un bon équilibre.' },
      { question: 'Existe-t-il une limite de taille ?', answer: 'Pour préserver la stabilité du traitement local, la taille est limitée à 100 Mo. Un appareil mobile peut avoir besoin de davantage de mémoire.' },
    ],
    howTo: (from, to) => [
      { name: 'Choisir les fichiers', text: `Déposez vos fichiers ${from.toUpperCase()} dans la zone de travail ou utilisez le bouton de sélection.` },
      { name: 'Attendre la conversion', text: `Le moteur local traite chaque fichier et affiche sa progression jusqu’à obtenir le ${to.toUpperCase()}.` },
      { name: 'Télécharger le résultat', text: 'Téléchargez les fichiers séparément ou rassemblez plusieurs résultats dans un ZIP.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Convertisseur ${from.toUpperCase()} vers ${to.toUpperCase()} privé`, level: 2 },
      { type: 'paragraph', html: `Convertir ${from.toUpperCase()} en ${to.toUpperCase()} est pratique lorsqu’un lecteur, une application ou un projet exige un autre format. Le moteur WebAssembly lit la source dans votre navigateur, change son codec et prépare le téléchargement sans transmettre l’enregistrement à un serveur distant.` },
      { type: 'title', text: 'Qualité, compatibilité et poids', level: 3 },
      { type: 'paragraph', html: `Chaque format a son usage. ${to.toUpperCase()} propose un compromis différent entre compatibilité, taille et qualité sonore, tandis que le fichier ${from.toUpperCase()} original reste intact. Vous obtenez une copie séparée pour vérifier le résultat.` },
      { type: 'title', text: 'Traitement local', level: 3 },
      { type: 'paragraph', html: 'Le fichier est lu en mémoire puis traité par un moteur FFmpeg WebAssembly. Aucun compte ni transfert distant n’est nécessaire. Les données temporaires disparaissent lorsque vous fermez l’onglet.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Conversion de plusieurs fichiers.', 'Téléchargement individuel ou en ZIP.', 'Copie des métadonnées lorsque le format le permet.', 'Limite pratique de 100 Mo par fichier.'] },
    ],
  },
  de: {
    slug: (from, to) => `${from}-in-${to}-umwandeln`,
    title: (from, to) => `${from.toUpperCase()} in ${to.toUpperCase()} umwandeln`,
    description: (from, to) => `Wandle ${from.toUpperCase()} Dateien direkt im Browser in ${to.toUpperCase()} um. Die lokale Verarbeitung mit FFmpeg WebAssembly lädt keine Audiodateien auf Server hoch.`,
    ui: { selectFiles: 'Dateien auswählen', processedFiles: 'Verarbeitete Dateien', downloadAll: 'Alle herunterladen (.zip)', pending: 'Ausstehend', loadingEngine: 'Audioengine wird vorbereitet…', converting: 'Wird konvertiert…', ready: 'Fertig', error: 'Konvertierungsfehler', tooLarge: 'Datei ist zu groß', download: 'Herunterladen', privacyNote: 'Das Audio wird lokal auf deinem Gerät verarbeitet und nicht hochgeladen.' },
    dragText: (from) => `Ziehe deine ${from.toUpperCase()} Dateien hierher`,
    convertText: (_, to) => `Um sie sofort in ${to.toUpperCase()} umzuwandeln`,
    faq: (from, to) => [
      { question: `Wie wandle ich ${from.toUpperCase()} in ${to.toUpperCase()} um?`, answer: 'Wähle eine oder mehrere Dateien aus. Die Umwandlung läuft im Browser-Speicher und die Ergebnisse können einzeln oder als ZIP heruntergeladen werden.' },
      { question: 'Werden meine Audiodateien hochgeladen?', answer: 'Nein. Die Dateien bleiben auf deinem Gerät. FFmpeg WebAssembly läuft im Browser und lädt nur technische Ressourcen, nicht dein Audio.' },
      { question: 'Welche Qualität hat die Ausgabedatei?', answer: 'WAV wird als unkomprimiertes PCM erstellt. OGG nutzt Vorbis mit hoher Qualität und MP3 wird mit 192 kbit/s erzeugt.' },
      { question: 'Gibt es eine Größenbeschränkung?', answer: 'Für eine stabile lokale Verarbeitung sind Dateien auf 100 MB begrenzt. Große Dateien benötigen auf Mobilgeräten mehr Speicher.' },
    ],
    howTo: (from, to) => [
      { name: 'Audio auswählen', text: `Ziehe deine ${from.toUpperCase()} Dateien in den Arbeitsbereich oder öffne den Dateiauswahldialog.` },
      { name: 'Konvertierung abwarten', text: `Die lokale Engine verarbeitet jede Datei bis die ${to.toUpperCase()} Ausgabe bereit ist.` },
      { name: 'Ergebnis herunterladen', text: 'Lade die Dateien einzeln oder mehrere Ergebnisse als ZIP herunter.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Privater ${from.toUpperCase()} zu ${to.toUpperCase()} Konverter`, level: 2 },
      { type: 'paragraph', html: `Die Umwandlung von ${from.toUpperCase()} zu ${to.toUpperCase()} ist praktisch, wenn ein Player oder Projekt ein anderes Audioformat verlangt. Ein WebAssembly Motor liest die Quelle im Browser, ändert den Codec und erstellt den Download, ohne die Aufnahme an einen entfernten Server zu senden.` },
      { type: 'title', text: 'Qualität, Kompatibilität und Dateigröße', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} bietet einen eigenen Ausgleich zwischen Kompatibilität, Größe und Klangqualität. Die ursprüngliche ${from.toUpperCase()} Datei bleibt unverändert und das Ergebnis wird als separate Kopie erstellt.` },
      { type: 'title', text: 'Lokale Verarbeitung', level: 3 },
      { type: 'paragraph', html: 'Die Datei wird im Gerätespeicher gelesen und in einem FFmpeg WebAssembly Worker verarbeitet. Es gibt kein Konto und keinen Upload. Beim Schließen des Tabs werden temporäre Daten entfernt.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Mehrere Audiodateien im Stapel konvertieren.', 'Einzeln oder als ZIP herunterladen.', 'Metadaten übernehmen, wenn das Format es erlaubt.', 'Praktische Grenze von 100 MB pro Datei.'] },
    ],
  },
  it: {
    slug: (from, to) => `convertitore-${from}-in-${to}`,
    title: (from, to) => `Convertire ${from.toUpperCase()} in ${to.toUpperCase()} online`,
    description: (from, to) => `Converti i file ${from.toUpperCase()} in ${to.toUpperCase()} direttamente nel browser. Il motore FFmpeg WebAssembly lavora in locale e non invia i tuoi audio.`,
    ui: { selectFiles: 'Seleziona file', processedFiles: 'File elaborati', downloadAll: 'Scarica tutto (.zip)', pending: 'In attesa', loadingEngine: 'Preparazione del motore audio…', converting: 'Conversione…', ready: 'Pronto', error: 'Errore di conversione', tooLarge: 'File troppo grande', download: 'Scarica', privacyNote: 'L’audio viene elaborato localmente sul dispositivo e non viene caricato.' },
    dragText: (from) => `Trascina qui i file ${from.toUpperCase()}`,
    convertText: (_, to) => `Per convertirli subito in ${to.toUpperCase()}`,
    faq: (from, to) => [
      { question: `Come converto ${from.toUpperCase()} in ${to.toUpperCase()}?`, answer: 'Seleziona uno o più file. La conversione avviene nella memoria del browser e puoi scaricare i risultati singolarmente o in un archivio ZIP.' },
      { question: 'I file audio vengono caricati?', answer: 'No. I file restano sul dispositivo. FFmpeg WebAssembly funziona nel browser e scarica solo le risorse tecniche, non il tuo audio.' },
      { question: 'Quale qualità avrà il risultato?', answer: 'WAV usa PCM non compresso, OGG usa Vorbis con qualità alta e MP3 viene creato a 192 kbit/s per un buon equilibrio.' },
      { question: 'Esiste un limite di dimensione?', answer: 'Per un’elaborazione locale stabile, i file sono limitati a 100 MB. I file grandi richiedono più memoria sui dispositivi mobili.' },
    ],
    howTo: (from, to) => [
      { name: 'Scegli l’audio', text: `Trascina i file ${from.toUpperCase()} nell’area di lavoro oppure usa il pulsante di selezione.` },
      { name: 'Attendi la conversione', text: `Il motore locale elabora ogni file fino a creare l’uscita ${to.toUpperCase()}.` },
      { name: 'Scarica il risultato', text: 'Scarica i file singolarmente oppure crea uno ZIP con più risultati.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Convertitore privato da ${from.toUpperCase()} a ${to.toUpperCase()}`, level: 2 },
      { type: 'paragraph', html: `Convertire ${from.toUpperCase()} in ${to.toUpperCase()} è utile quando un lettore o un progetto richiede un formato diverso. Il motore WebAssembly legge il file nel browser, cambia il codec e prepara il download senza inviare la registrazione a un server.` },
      { type: 'title', text: 'Qualità, compatibilità e dimensione', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} offre un equilibrio diverso tra compatibilità, peso e qualità sonora. Il file ${from.toUpperCase()} originale non viene modificato e il risultato è una copia separata da controllare.` },
      { type: 'title', text: 'Elaborazione locale', level: 3 },
      { type: 'paragraph', html: 'Il file viene letto in memoria e processato da un worker FFmpeg WebAssembly. Non servono account né caricamenti remoti. I dati temporanei vengono eliminati chiudendo la scheda.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Conversione di più file audio.', 'Download singolo o in ZIP.', 'Metadati mantenuti quando possibile.', 'Limite pratico di 100 MB per file.'] },
    ],
  },
  pt: {
    slug: (from, to) => `conversor-${from}-para-${to}`,
    title: (from, to) => `Converter ${from.toUpperCase()} para ${to.toUpperCase()} online`,
    description: (from, to) => `Converta arquivos ${from.toUpperCase()} para ${to.toUpperCase()} diretamente no navegador. O FFmpeg WebAssembly processa tudo localmente, sem enviar os seus áudios.`,
    ui: { selectFiles: 'Selecionar arquivos', processedFiles: 'Arquivos processados', downloadAll: 'Baixar tudo (.zip)', pending: 'Pendente', loadingEngine: 'Preparando o motor de áudio…', converting: 'Convertendo…', ready: 'Pronto', error: 'Erro de conversão', tooLarge: 'Arquivo muito grande', download: 'Baixar', privacyNote: 'O áudio é processado localmente no dispositivo e nunca é enviado.' },
    dragText: (from) => `Arraste os seus arquivos ${from.toUpperCase()} para cá`,
    convertText: (_, to) => `Para convertê-los para ${to.toUpperCase()} na hora`,
    faq: (from, to) => [
      { question: `Como converter ${from.toUpperCase()} para ${to.toUpperCase()}?`, answer: 'Selecione um ou mais arquivos. A conversão acontece na memória do navegador e os resultados podem ser baixados individualmente ou em ZIP.' },
      { question: 'Os meus arquivos de áudio são enviados?', answer: 'Não. Os arquivos ficam no seu dispositivo. O FFmpeg WebAssembly roda no navegador e baixa apenas os recursos técnicos, nunca o seu áudio.' },
      { question: 'Qual será a qualidade do arquivo?', answer: 'WAV usa PCM sem compressão, OGG usa Vorbis com qualidade alta e MP3 é gerado a 192 kbit/s para equilibrar qualidade e tamanho.' },
      { question: 'Existe limite de tamanho?', answer: 'Para manter o processamento local estável, os arquivos têm limite de 100 MB. Arquivos grandes exigem mais memória em celulares.' },
    ],
    howTo: (from, to) => [
      { name: 'Escolha o áudio', text: `Arraste os arquivos ${from.toUpperCase()} para a área ou use o botão de seleção.` },
      { name: 'Aguarde a conversão', text: `O motor local processa cada arquivo até preparar a saída ${to.toUpperCase()}.` },
      { name: 'Baixe o resultado', text: 'Baixe cada arquivo ou reúna vários resultados em um ZIP.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Conversor privado de ${from.toUpperCase()} para ${to.toUpperCase()}`, level: 2 },
      { type: 'paragraph', html: `Converter ${from.toUpperCase()} para ${to.toUpperCase()} é útil quando um reprodutor ou projeto exige outro formato. O motor WebAssembly lê o original no navegador, troca o codec e prepara o download sem transferir a gravação para um servidor.` },
      { type: 'title', text: 'Qualidade, compatibilidade e tamanho', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} oferece um equilíbrio próprio entre compatibilidade, peso e qualidade sonora. O ${from.toUpperCase()} original permanece intacto e o resultado é criado como uma cópia independente.` },
      { type: 'title', text: 'Processamento local', level: 3 },
      { type: 'paragraph', html: 'O arquivo é lido na memória do dispositivo e processado por um worker FFmpeg WebAssembly. Não há conta nem upload. Os dados temporários deixam de existir quando a aba é fechada.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Conversão em lote de vários áudios.', 'Download individual ou em ZIP.', 'Metadados preservados quando possível.', 'Limite prático de 100 MB por arquivo.'] },
    ],
  },
  nl: {
    slug: (from, to) => `${from}-naar-${to}-converter`,
    title: (from, to) => `${from.toUpperCase()} naar ${to.toUpperCase()} converter`,
    description: (from, to) => `Zet ${from.toUpperCase()} bestanden direct in je browser om naar ${to.toUpperCase()}. FFmpeg WebAssembly verwerkt audio lokaal zonder bestanden te uploaden.`,
    ui: { selectFiles: 'Bestanden kiezen', processedFiles: 'Verwerkte bestanden', downloadAll: 'Alles downloaden (.zip)', pending: 'In afwachting', loadingEngine: 'Audio engine voorbereiden…', converting: 'Converteren…', ready: 'Klaar', error: 'Conversiefout', tooLarge: 'Bestand is te groot', download: 'Downloaden', privacyNote: 'Audio wordt lokaal op je apparaat verwerkt en nooit geüpload.' },
    dragText: (from) => `Sleep je ${from.toUpperCase()} bestanden hierheen`,
    convertText: (_, to) => `Om ze direct naar ${to.toUpperCase()} om te zetten`,
    faq: (from, to) => [
      { question: `Hoe zet ik ${from.toUpperCase()} om naar ${to.toUpperCase()}?`, answer: 'Kies één of meer bestanden. De browser verwerkt ze in het lokale geheugen en je kunt resultaten apart of als ZIP downloaden.' },
      { question: 'Worden mijn audiobestanden geüpload?', answer: 'Nee. Bestanden blijven op je apparaat. FFmpeg WebAssembly draait in de browser en haalt alleen technische bronnen op, nooit je audio.' },
      { question: 'Welke kwaliteit heeft het resultaat?', answer: 'WAV gebruikt ongecomprimeerde PCM, OGG gebruikt Vorbis met hoge kwaliteit en MP3 wordt gemaakt op 192 kbit/s.' },
      { question: 'Is er een maximale bestandsgrootte?', answer: 'Voor stabiele lokale verwerking geldt een limiet van 100 MB. Grote bestanden vragen meer geheugen op mobiele apparaten.' },
    ],
    howTo: (from, to) => [
      { name: 'Audio kiezen', text: `Sleep je ${from.toUpperCase()} bestanden naar het werkvlak of gebruik de select knop.` },
      { name: 'Conversie afwachten', text: `De lokale engine verwerkt ieder bestand totdat de ${to.toUpperCase()} uitvoer klaar is.` },
      { name: 'Resultaat downloaden', text: 'Download bestanden apart of bundel meerdere resultaten in een ZIP.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Privé ${from.toUpperCase()} naar ${to.toUpperCase()} converter`, level: 2 },
      { type: 'paragraph', html: `${from.toUpperCase()} naar ${to.toUpperCase()} omzetten is handig wanneer een speler of project een ander formaat vereist. De WebAssembly engine leest het bronbestand in je browser, wijzigt de codec en maakt een download zonder de opname naar een server te sturen.` },
      { type: 'title', text: 'Kwaliteit, compatibiliteit en grootte', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} heeft een eigen balans tussen compatibiliteit, bestandsgrootte en geluidskwaliteit. Het oorspronkelijke ${from.toUpperCase()} bestand blijft ongewijzigd en het resultaat is een aparte kopie.` },
      { type: 'title', text: 'Lokale verwerking', level: 3 },
      { type: 'paragraph', html: 'Audio wordt in het geheugen gelezen en verwerkt door een FFmpeg WebAssembly worker. Er is geen account of upload nodig. Tijdelijke gegevens verdwijnen wanneer je het tabblad sluit.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Meerdere audiobestanden tegelijk converteren.', 'Los downloaden of als ZIP.', 'Metagegevens behouden waar het formaat dit ondersteunt.', 'Praktische limiet van 100 MB per bestand.'] },
    ],
  },
  sv: {
    slug: (from, to) => `konvertera-${from}-till-${to}`,
    title: (from, to) => `Konvertera ${from.toUpperCase()} till ${to.toUpperCase()} online`,
    description: (from, to) => `Konvertera ${from.toUpperCase()} filer till ${to.toUpperCase()} direkt i webbläsaren. Lokal FFmpeg WebAssembly behandling håller ljudet på din enhet.`,
    ui: { selectFiles: 'Välj filer', processedFiles: 'Bearbetade filer', downloadAll: 'Ladda ner alla (.zip)', pending: 'Väntar', loadingEngine: 'Förbereder ljudmotorn…', converting: 'Konverterar…', ready: 'Klar', error: 'Konverteringsfel', tooLarge: 'Filen är för stor', download: 'Ladda ner', privacyNote: 'Ljudet bearbetas lokalt på enheten och laddas aldrig upp.' },
    dragText: (from) => `Släpp dina ${from.toUpperCase()} filer här`,
    convertText: (_, to) => `För att konvertera dem till ${to.toUpperCase()} direkt`,
    faq: (from, to) => [
      { question: `Hur konverterar jag ${from.toUpperCase()} till ${to.toUpperCase()}?`, answer: 'Välj en eller flera filer. Webbläsaren behandlar dem i lokalt minne och resultaten kan laddas ner separat eller som ZIP.' },
      { question: 'Laddas mina ljudfiler upp?', answer: 'Nej. Filerna stannar på din enhet. FFmpeg WebAssembly körs i webbläsaren och hämtar aldrig ditt ljud till en server.' },
      { question: 'Vilken kvalitet får resultatet?', answer: 'WAV skapas som okomprimerad PCM, OGG använder Vorbis med hög kvalitet och MP3 skapas med 192 kbit/s.' },
      { question: 'Finns en storleksgräns?', answer: 'För stabil lokal behandling är gränsen 100 MB. Stora filer kan kräva mer minne på mobila enheter.' },
    ],
    howTo: (from, to) => [
      { name: 'Välj ljudet', text: `Släpp dina ${from.toUpperCase()} filer i arbetsytan eller använd knappen för att välja dem.` },
      { name: 'Vänta på konverteringen', text: `Den lokala motorn bearbetar varje fil tills ${to.toUpperCase()} resultatet är klart.` },
      { name: 'Ladda ner resultatet', text: 'Ladda ner filer separat eller samla flera resultat i en ZIP.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Privat konvertering från ${from.toUpperCase()} till ${to.toUpperCase()}`, level: 2 },
      { type: 'paragraph', html: `Att konvertera ${from.toUpperCase()} till ${to.toUpperCase()} är användbart när en spelare eller ett projekt kräver ett annat ljudformat. WebAssembly motorn läser källan i webbläsaren, byter codec och skapar en fil utan att skicka inspelningen till en server.` },
      { type: 'title', text: 'Kvalitet, kompatibilitet och storlek', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} har en egen balans mellan kompatibilitet, storlek och ljudkvalitet. Originalfilen ${from.toUpperCase()} lämnas oförändrad och resultatet skapas som en separat kopia.` },
      { type: 'title', text: 'Lokal behandling', level: 3 },
      { type: 'paragraph', html: 'Filen läses i enhetens minne och behandlas av en FFmpeg WebAssembly worker. Inget konto eller uppladdning behövs. Tillfälliga data försvinner när fliken stängs.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Konvertera flera ljudfiler samtidigt.', 'Enskild nedladdning eller ZIP.', 'Metadata bevaras när formatet stöder det.', 'Praktisk gräns på 100 MB per fil.'] },
    ],
  },
  pl: {
    slug: (from, to) => `konwerter-${from}-na-${to}`,
    title: (from, to) => `Konwertuj ${from.toUpperCase()} na ${to.toUpperCase()} online`,
    description: (from, to) => `Konwertuj pliki ${from.toUpperCase()} do ${to.toUpperCase()} bezpośrednio w przeglądarce. FFmpeg WebAssembly przetwarza dźwięk lokalnie, bez wysyłania plików.`,
    ui: { selectFiles: 'Wybierz pliki', processedFiles: 'Przetworzone pliki', downloadAll: 'Pobierz wszystko (.zip)', pending: 'Oczekuje', loadingEngine: 'Przygotowywanie silnika audio…', converting: 'Konwertowanie…', ready: 'Gotowe', error: 'Błąd konwersji', tooLarge: 'Plik jest za duży', download: 'Pobierz', privacyNote: 'Dźwięk jest przetwarzany lokalnie i nie jest wysyłany na serwer.' },
    dragText: (from) => `Przeciągnij tutaj pliki ${from.toUpperCase()}`,
    convertText: (_, to) => `Aby od razu przekonwertować je do ${to.toUpperCase()}`,
    faq: (from, to) => [
      { question: `Jak przekonwertować ${from.toUpperCase()} na ${to.toUpperCase()}?`, answer: 'Wybierz jeden lub kilka plików. Przeglądarka przetworzy je w pamięci urządzenia, a wyniki pobierzesz osobno lub jako archiwum ZIP.' },
      { question: 'Czy pliki audio są wysyłane?', answer: 'Nie. Pliki pozostają na urządzeniu. FFmpeg WebAssembly działa w przeglądarce i nie wysyła dźwięku na zewnętrzny serwer.' },
      { question: 'Jaka będzie jakość wyniku?', answer: 'WAV używa nieskompresowanego PCM, OGG korzysta z Vorbis w wysokiej jakości, a MP3 jest tworzone z przepływnością 192 kbit/s.' },
      { question: 'Czy istnieje limit rozmiaru?', answer: 'Dla stabilnego przetwarzania lokalnego pliki mają limit 100 MB. Duże pliki potrzebują więcej pamięci na telefonach.' },
    ],
    howTo: (from, to) => [
      { name: 'Wybierz dźwięk', text: `Przeciągnij pliki ${from.toUpperCase()} do obszaru roboczego lub użyj przycisku wyboru.` },
      { name: 'Poczekaj na konwersję', text: `Lokalny silnik przetwarza każdy plik do momentu przygotowania wyniku ${to.toUpperCase()}.` },
      { name: 'Pobierz wynik', text: 'Pobierz pliki osobno albo połącz kilka wyników w archiwum ZIP.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Prywatny konwerter ${from.toUpperCase()} na ${to.toUpperCase()}`, level: 2 },
      { type: 'paragraph', html: `Konwersja ${from.toUpperCase()} na ${to.toUpperCase()} przydaje się, gdy odtwarzacz lub projekt wymaga innego formatu dźwięku. Silnik WebAssembly czyta źródło w przeglądarce, zmienia kodek i przygotowuje pobieranie bez przesyłania nagrania na serwer.` },
      { type: 'title', text: 'Jakość, zgodność i rozmiar', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} zapewnia inny kompromis między zgodnością, rozmiarem i jakością. Oryginalny plik ${from.toUpperCase()} pozostaje bez zmian, a wynik jest osobną kopią.` },
      { type: 'title', text: 'Przetwarzanie lokalne', level: 3 },
      { type: 'paragraph', html: 'Plik jest odczytywany w pamięci i przetwarzany przez worker FFmpeg WebAssembly. Nie trzeba zakładać konta ani wykonywać wysyłania. Dane tymczasowe znikają po zamknięciu karty.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Konwersja wielu plików audio.', 'Pobieranie osobne lub w ZIP.', 'Zachowanie metadanych, gdy format je obsługuje.', 'Praktyczny limit 100 MB na plik.'] },
    ],
  },
  tr: {
    slug: (from, to) => `${from}-${to}-donusturucu`,
    title: (from, to) => `${from.toUpperCase()} dosyasını ${to.toUpperCase()} dosyasına dönüştür`,
    description: (from, to) => `${from.toUpperCase()} dosyalarını tarayıcında doğrudan ${to.toUpperCase()} biçimine dönüştür. FFmpeg WebAssembly sesini yerel olarak işler ve dosyaları yüklemez.`,
    ui: { selectFiles: 'Dosya seç', processedFiles: 'İşlenen dosyalar', downloadAll: 'Tümünü indir (.zip)', pending: 'Bekliyor', loadingEngine: 'Ses motoru hazırlanıyor…', converting: 'Dönüştürülüyor…', ready: 'Hazır', error: 'Dönüştürme hatası', tooLarge: 'Dosya çok büyük', download: 'İndir', privacyNote: 'Ses cihazında yerel olarak işlenir ve hiçbir yere yüklenmez.' },
    dragText: (from) => `${from.toUpperCase()} dosyalarını buraya sürükle`,
    convertText: (_, to) => `Anında ${to.toUpperCase()} biçimine dönüştür`,
    faq: (from, to) => [
      { question: `${from.toUpperCase()} dosyasını ${to.toUpperCase()} biçimine nasıl dönüştürürüm?`, answer: 'Bir veya daha fazla dosya seç. Dönüştürme tarayıcı belleğinde yapılır; sonuçları ayrı ayrı veya ZIP olarak indirebilirsin.' },
      { question: 'Ses dosyalarım yükleniyor mu?', answer: 'Hayır. Dosyaların cihazında kalır. FFmpeg WebAssembly tarayıcıda çalışır ve sesini uzak sunucuya göndermez.' },
      { question: 'Sonuç dosyasının kalitesi nedir?', answer: 'WAV sıkıştırılmamış PCM kullanır. OGG yüksek kaliteli Vorbis, MP3 ise 192 kbit/s ayarıyla oluşturulur.' },
      { question: 'Dosya boyutu sınırı var mı?', answer: 'Yerel işlemin kararlı kalması için sınır 100 MB’tır. Büyük dosyalar mobil cihazlarda daha fazla bellek kullanabilir.' },
    ],
    howTo: (from, to) => [
      { name: 'Sesi seç', text: `${from.toUpperCase()} dosyalarını çalışma alanına sürükle veya seçim düğmesini kullan.` },
      { name: 'Dönüşümü bekle', text: `Yerel motor her dosyayı işler ve ${to.toUpperCase()} çıktısını hazırlar.` },
      { name: 'Sonucu indir', text: 'Dosyaları tek tek indir veya birkaç sonucu ZIP arşivinde topla.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Gizli ${from.toUpperCase()} ve ${to.toUpperCase()} ses dönüştürücü`, level: 2 },
      { type: 'paragraph', html: `${from.toUpperCase()} dosyasını ${to.toUpperCase()} biçimine çevirmek, oynatıcı veya proje farklı bir ses biçimi istediğinde kullanışlıdır. WebAssembly motoru kaynağı tarayıcıda okur, codec’i değiştirir ve kaydı sunucuya göndermeden indirme dosyasını hazırlar.` },
      { type: 'title', text: 'Kalite, uyumluluk ve boyut', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} uyumluluk, dosya boyutu ve ses kalitesi arasında farklı bir denge sunar. Orijinal ${from.toUpperCase()} dosyası değişmez; sonuç ayrı bir kopya olarak oluşturulur.` },
      { type: 'title', text: 'Yerel işleme', level: 3 },
      { type: 'paragraph', html: 'Dosya cihaz belleğinde okunur ve FFmpeg WebAssembly worker içinde işlenir. Hesap veya uzak yükleme gerekmez. Sekme kapatıldığında geçici veriler silinir.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Birden fazla ses dosyasını toplu dönüştürme.', 'Tek tek veya ZIP olarak indirme.', 'Biçim destekliyorsa meta verileri koruma.', 'Dosya başına pratik 100 MB sınırı.'] },
    ],
  },
  id: {
    slug: (from, to) => `konverter-${from}-ke-${to}`,
    title: (from, to) => `Konversi ${from.toUpperCase()} ke ${to.toUpperCase()} online`,
    description: (from, to) => `Konversi file ${from.toUpperCase()} ke ${to.toUpperCase()} langsung di browser. FFmpeg WebAssembly memproses audio secara lokal tanpa mengunggah file.`,
    ui: { selectFiles: 'Pilih file', processedFiles: 'File yang diproses', downloadAll: 'Unduh semua (.zip)', pending: 'Menunggu', loadingEngine: 'Menyiapkan mesin audio…', converting: 'Mengonversi…', ready: 'Siap', error: 'Kesalahan konversi', tooLarge: 'File terlalu besar', download: 'Unduh', privacyNote: 'Audio diproses secara lokal di perangkat dan tidak pernah diunggah.' },
    dragText: (from) => `Seret file ${from.toUpperCase()} ke sini`,
    convertText: (_, to) => `Untuk mengubahnya ke ${to.toUpperCase()} sekarang`,
    faq: (from, to) => [
      { question: `Bagaimana mengonversi ${from.toUpperCase()} ke ${to.toUpperCase()}?`, answer: 'Pilih satu atau beberapa file. Browser memprosesnya di memori lokal, lalu hasil dapat diunduh satu per satu atau sebagai ZIP.' },
      { question: 'Apakah file audio saya diunggah?', answer: 'Tidak. File tetap berada di perangkat. FFmpeg WebAssembly berjalan di browser dan tidak mengirim audio ke server.' },
      { question: 'Bagaimana kualitas hasilnya?', answer: 'WAV dibuat sebagai PCM tanpa kompresi, OGG memakai Vorbis berkualitas tinggi, dan MP3 dibuat pada 192 kbit/s.' },
      { question: 'Apakah ada batas ukuran?', answer: 'Untuk pemrosesan lokal yang stabil, ukuran file dibatasi 100 MB. File besar membutuhkan memori lebih banyak di ponsel.' },
    ],
    howTo: (from, to) => [
      { name: 'Pilih audio', text: `Seret file ${from.toUpperCase()} ke area kerja atau gunakan tombol pilih file.` },
      { name: 'Tunggu konversi', text: `Mesin lokal memproses setiap file sampai keluaran ${to.toUpperCase()} siap.` },
      { name: 'Unduh hasil', text: 'Unduh file satu per satu atau gabungkan beberapa hasil dalam ZIP.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Konverter audio ${from.toUpperCase()} ke ${to.toUpperCase()} pribadi`, level: 2 },
      { type: 'paragraph', html: `Konversi ${from.toUpperCase()} ke ${to.toUpperCase()} berguna saat pemutar atau proyek memerlukan format berbeda. Mesin WebAssembly membaca sumber di browser, mengganti codec, dan menyiapkan unduhan tanpa mengirim rekaman ke server.` },
      { type: 'title', text: 'Kualitas, kompatibilitas, dan ukuran', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} memiliki keseimbangan berbeda antara kompatibilitas, ukuran, dan kualitas suara. File ${from.toUpperCase()} asli tidak diubah dan hasil dibuat sebagai salinan terpisah.` },
      { type: 'title', text: 'Pemrosesan lokal', level: 3 },
      { type: 'paragraph', html: 'File dibaca di memori perangkat dan diproses oleh worker FFmpeg WebAssembly. Tidak perlu akun atau unggahan. Data sementara hilang saat tab ditutup.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Konversi banyak file audio.', 'Unduhan satuan atau ZIP.', 'Metadata dipertahankan jika format mendukung.', 'Batas praktis 100 MB per file.'] },
    ],
  },
  ru: {
    slug: (from, to) => `konverter-${from}-v-${to}`,
    title: (from, to) => `Конвертировать ${from.toUpperCase()} в ${to.toUpperCase()} онлайн`,
    description: (from, to) => `Конвертируйте файлы ${from.toUpperCase()} в ${to.toUpperCase()} прямо в браузере. FFmpeg WebAssembly обрабатывает аудио локально и не отправляет файлы на сервер.`,
    ui: { selectFiles: 'Выбрать файлы', processedFiles: 'Обработанные файлы', downloadAll: 'Скачать всё (.zip)', pending: 'Ожидание', loadingEngine: 'Подготовка аудиодвижка…', converting: 'Конвертация…', ready: 'Готово', error: 'Ошибка конвертации', tooLarge: 'Файл слишком большой', download: 'Скачать', privacyNote: 'Аудио обрабатывается локально на устройстве и не загружается.' },
    dragText: (from) => `Перетащите файлы ${from.toUpperCase()} сюда`,
    convertText: (_, to) => `Чтобы сразу преобразовать их в ${to.toUpperCase()}`,
    faq: (from, to) => [
      { question: `Как преобразовать ${from.toUpperCase()} в ${to.toUpperCase()}?`, answer: 'Выберите один или несколько файлов. Браузер обработает их в локальной памяти, после чего результаты можно скачать отдельно или архивом ZIP.' },
      { question: 'Загружаются ли мои аудиофайлы?', answer: 'Нет. Файлы остаются на устройстве. FFmpeg WebAssembly работает в браузере и не отправляет звук на удалённый сервер.' },
      { question: 'Какое качество будет у результата?', answer: 'WAV создаётся как несжатый PCM, OGG использует качественный Vorbis, а MP3 создаётся с битрейтом 192 кбит/с.' },
      { question: 'Есть ли ограничение размера?', answer: 'Для стабильной локальной обработки установлен лимит 100 МБ. Большие файлы требуют больше памяти на мобильных устройствах.' },
    ],
    howTo: (from, to) => [
      { name: 'Выберите аудио', text: `Перетащите файлы ${from.toUpperCase()} в рабочую область или воспользуйтесь кнопкой выбора.` },
      { name: 'Дождитесь конвертации', text: `Локальный движок обработает каждый файл и подготовит результат ${to.toUpperCase()}.` },
      { name: 'Скачайте результат', text: 'Скачайте файлы отдельно или соберите несколько результатов в ZIP.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `Приватный конвертер ${from.toUpperCase()} в ${to.toUpperCase()}`, level: 2 },
      { type: 'paragraph', html: `Преобразование ${from.toUpperCase()} в ${to.toUpperCase()} нужно, когда проигрыватель или проект поддерживает другой аудиоформат. Движок WebAssembly читает исходник в браузере, меняет кодек и готовит скачивание без передачи записи на сервер.` },
      { type: 'title', text: 'Качество, совместимость и размер', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} предлагает свой баланс совместимости, размера и качества звука. Исходный ${from.toUpperCase()} остаётся без изменений, а результат создаётся отдельной копией.` },
      { type: 'title', text: 'Локальная обработка', level: 3 },
      { type: 'paragraph', html: 'Файл читается в памяти устройства и обрабатывается worker FFmpeg WebAssembly. Регистрация и загрузка не нужны. Временные данные исчезают после закрытия вкладки.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['Пакетная конвертация нескольких файлов.', 'Отдельное скачивание или ZIP.', 'Перенос метаданных при поддержке формата.', 'Практический лимит 100 МБ на файл.'] },
    ],
  },
  ja: {
    slug: (from, to) => `${from}-to-${to}-converter`,
    title: (from, to) => `${from.toUpperCase()}を${to.toUpperCase()}に変換`,
    description: (from, to) => `${from.toUpperCase()}音声をブラウザ上で${to.toUpperCase()}へ変換します。FFmpeg WebAssemblyが端末内で処理するため、音声ファイルをアップロードしません。`,
    ui: { selectFiles: 'ファイルを選択', processedFiles: '処理済みファイル', downloadAll: 'すべてダウンロード (.zip)', pending: '待機中', loadingEngine: '音声エンジンを準備中…', converting: '変換中…', ready: '完了', error: '変換エラー', tooLarge: 'ファイルが大きすぎます', download: 'ダウンロード', privacyNote: '音声は端末内で処理され、アップロードされません。' },
    dragText: (from) => `${from.toUpperCase()}ファイルをここにドロップ`,
    convertText: (_, to) => `すぐに${to.toUpperCase()}へ変換`,
    faq: (from, to) => [
      { question: `${from.toUpperCase()}を${to.toUpperCase()}に変換する方法は？`, answer: 'ファイルを選択すると、ブラウザのメモリ内で変換します。変換後は個別に保存するか、ZIPでまとめて保存できます。' },
      { question: '音声ファイルはアップロードされますか？', answer: 'いいえ。ファイルは端末内に残ります。FFmpeg WebAssemblyはブラウザで動作し、音声を外部サーバーへ送信しません。' },
      { question: '変換後の品質はどうなりますか？', answer: 'WAVは非圧縮PCM、OGGは高品質のVorbis、MP3は192 kbit/sで作成します。' },
      { question: 'サイズの制限はありますか？', answer: '安定した処理のため、1ファイル100 MBまで対応します。大きな音声はモバイル端末で時間がかかる場合があります。' },
    ],
    howTo: (from, to) => [
      { name: '音声を選択', text: `${from.toUpperCase()}ファイルを作業エリアへドロップするか、選択ボタンを押します。` },
      { name: '変換を待つ', text: `端末内のエンジンが処理し、${to.toUpperCase()}ファイルを作成します。` },
      { name: '結果を保存', text: 'ファイルを個別に保存するか、複数の結果をZIPで保存します。' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `プライバシー重視の${from.toUpperCase()}から${to.toUpperCase()}変換`, level: 2 },
      { type: 'paragraph', html: `${from.toUpperCase()}を${to.toUpperCase()}へ変換すると、プレーヤーや制作環境の形式に合わせられます。このツールはWebAssemblyエンジンをブラウザで実行し、音声をサーバーへ送信せずにコーデックを変換します。` },
      { type: 'title', text: '品質と互換性', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()}はサイズ、互換性、音質のバランスが異なります。元の${from.toUpperCase()}は変更せず、比較できる新しいコピーを作成します。` },
      { type: 'title', text: '端末内での処理', level: 3 },
      { type: 'paragraph', html: '音声は端末のメモリで読み込まれ、FFmpeg WebAssembly workerで処理されます。アカウントやアップロードは不要で、タブを閉じると一時データは利用できなくなります。' },
      { type: 'list', icon: 'mdi:check-circle', items: ['複数ファイルの一括変換。', '個別またはZIPで保存。', '対応形式ではメタデータを保持。', '1ファイル100 MBの実用的な上限。'] },
    ],
  },
  ko: {
    slug: (from, to) => `${from}-to-${to}-converter`,
    title: (from, to) => `${from.toUpperCase()}을 ${to.toUpperCase()}로 변환`,
    description: (from, to) => `브라우저에서 ${from.toUpperCase()} 오디오를 ${to.toUpperCase()}로 변환하세요. FFmpeg WebAssembly가 기기에서 처리하며 파일을 업로드하지 않습니다.`,
    ui: { selectFiles: '파일 선택', processedFiles: '처리된 파일', downloadAll: '모두 다운로드 (.zip)', pending: '대기 중', loadingEngine: '오디오 엔진 준비 중…', converting: '변환 중…', ready: '완료', error: '변환 오류', tooLarge: '파일이 너무 큽니다', download: '다운로드', privacyNote: '오디오는 기기에서 처리되며 업로드되지 않습니다.' },
    dragText: (from) => `${from.toUpperCase()} 파일을 여기에 놓으세요`,
    convertText: (_, to) => `즉시 ${to.toUpperCase()}로 변환`,
    faq: (from, to) => [
      { question: `${from.toUpperCase()}을 ${to.toUpperCase()}로 변환하는 방법은 무엇인가요?`, answer: '파일을 하나 이상 선택하면 브라우저 메모리에서 변환합니다. 결과는 개별 파일 또는 ZIP으로 저장할 수 있습니다.' },
      { question: '오디오 파일이 업로드되나요?', answer: '아니요. 파일은 기기에 남습니다. FFmpeg WebAssembly는 브라우저에서 실행되며 오디오를 서버로 보내지 않습니다.' },
      { question: '결과 파일의 품질은 어떤가요?', answer: 'WAV는 압축하지 않은 PCM으로 만들고, OGG는 고품질 Vorbis, MP3는 192 kbit/s로 생성합니다.' },
      { question: '파일 크기 제한이 있나요?', answer: '안정적인 로컬 처리를 위해 파일당 100 MB로 제한합니다. 큰 파일은 모바일 기기에서 더 많은 메모리를 사용할 수 있습니다.' },
    ],
    howTo: (from, to) => [
      { name: '오디오 선택', text: `${from.toUpperCase()} 파일을 작업 영역에 놓거나 선택 버튼을 누르세요.` },
      { name: '변환 대기', text: `로컬 엔진이 파일을 처리하여 ${to.toUpperCase()} 출력을 만듭니다.` },
      { name: '결과 다운로드', text: '파일을 하나씩 다운로드하거나 여러 결과를 ZIP으로 묶으세요.' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `개인정보를 지키는 ${from.toUpperCase()} ${to.toUpperCase()} 변환`, level: 2 },
      { type: 'paragraph', html: `${from.toUpperCase()}을 ${to.toUpperCase()}로 변환하면 플레이어 또는 프로젝트가 요구하는 형식을 사용할 수 있습니다. WebAssembly 엔진이 브라우저에서 원본을 읽고 코덱을 바꾸므로 녹음 파일을 서버로 보내지 않습니다.` },
      { type: 'title', text: '품질과 호환성', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()}는 파일 크기, 호환성, 음질 사이에서 다른 균형을 제공합니다. 원본 ${from.toUpperCase()} 파일은 그대로 두고 새 복사본을 만듭니다.` },
      { type: 'title', text: '기기에서 처리', level: 3 },
      { type: 'paragraph', html: '오디오는 기기 메모리에서 읽고 FFmpeg WebAssembly worker에서 처리합니다. 계정이나 업로드가 필요하지 않으며 탭을 닫으면 임시 데이터가 사라집니다.' },
      { type: 'list', icon: 'mdi:check-circle', items: ['여러 오디오 파일 일괄 변환.', '개별 또는 ZIP 다운로드.', '형식이 지원하면 메타데이터 유지.', '파일당 100 MB의 실용적인 제한.'] },
    ],
  },
  zh: {
    slug: (from, to) => `${from}-to-${to}-converter`,
    title: (from, to) => `在线将 ${from.toUpperCase()} 转换为 ${to.toUpperCase()}`,
    description: (from, to) => `直接在浏览器中将 ${from.toUpperCase()} 音频转换为 ${to.toUpperCase()}。FFmpeg WebAssembly 在本地处理文件，不会上传音频。`,
    ui: { selectFiles: '选择文件', processedFiles: '已处理文件', downloadAll: '全部下载 (.zip)', pending: '等待中', loadingEngine: '正在准备音频引擎…', converting: '转换中…', ready: '完成', error: '转换错误', tooLarge: '文件太大', download: '下载', privacyNote: '音频在设备本地处理，不会上传。' },
    dragText: (from) => `将 ${from.toUpperCase()} 文件拖到这里`,
    convertText: (_, to) => `立即转换为 ${to.toUpperCase()}`,
    faq: (from, to) => [
      { question: `如何将 ${from.toUpperCase()} 转换为 ${to.toUpperCase()}？`, answer: '选择一个或多个文件，浏览器会在本地内存中完成转换。之后可以单独下载，也可以打包成 ZIP。' },
      { question: '音频文件会上传吗？', answer: '不会。文件始终留在设备中。FFmpeg WebAssembly 在浏览器运行，不会把音频发送到服务器。' },
      { question: '转换后的质量如何？', answer: 'WAV使用未压缩PCM，OGG使用高质量Vorbis，MP3使用192 kbit/s设置生成。' },
      { question: '文件大小有限制吗？', answer: '为了保证本地处理稳定，每个文件限制为100 MB。移动设备处理大文件可能需要更多内存。' },
    ],
    howTo: (from, to) => [
      { name: '选择音频', text: `将 ${from.toUpperCase()} 文件拖入工作区，或使用选择按钮。` },
      { name: '等待转换', text: `本地引擎会处理每个文件并生成 ${to.toUpperCase()} 输出。` },
      { name: '下载结果', text: '可以逐个下载，也可以将多个结果打包为 ZIP。' },
    ],
    seo: (from, to) => [
      { type: 'title', text: `私密的 ${from.toUpperCase()} 转 ${to.toUpperCase()} 工具`, level: 2 },
      { type: 'paragraph', html: `当播放器或项目需要其他音频格式时，将 ${from.toUpperCase()} 转换为 ${to.toUpperCase()} 非常方便。WebAssembly 引擎在浏览器中读取源文件并更换编码器，不需要把录音发送到远程服务器。` },
      { type: 'title', text: '质量、兼容性和大小', level: 3 },
      { type: 'paragraph', html: `${to.toUpperCase()} 在兼容性、文件大小和音质之间提供不同的平衡。原始 ${from.toUpperCase()} 文件不会改变，结果会作为独立副本生成。` },
      { type: 'title', text: '本地处理', level: 3 },
      { type: 'paragraph', html: '音频在设备内存中读取，并由 FFmpeg WebAssembly worker 处理。不需要账号或上传。关闭标签页后，临时数据将无法继续使用。' },
      { type: 'list', icon: 'mdi:check-circle', items: ['批量转换多个音频文件。', '单独下载或下载 ZIP。', '格式支持时保留元数据。', '每个文件100 MB的实用限制。'] },
    ],
  },
};

const SECTION_LABELS: Record<KnownLocale, { faqTitle: string; bibliographyTitle: string; preview: string }> = {
  es: { faqTitle: 'Preguntas frecuentes', bibliographyTitle: 'Referencias bibliográficas', preview: 'Previsualizar audio convertido' },
  en: { faqTitle: 'Frequently asked questions', bibliographyTitle: 'Bibliographic references', preview: 'Preview converted audio' },
  fr: { faqTitle: 'Questions fréquentes', bibliographyTitle: 'Références bibliographiques', preview: 'Écouter l’audio converti' },
  de: { faqTitle: 'Häufig gestellte Fragen', bibliographyTitle: 'Bibliografische Referenzen', preview: 'Konvertiertes Audio anhören' },
  it: { faqTitle: 'Domande frequenti', bibliographyTitle: 'Riferimenti bibliografici', preview: 'Ascolta l’audio convertito' },
  pt: { faqTitle: 'Perguntas frequentes', bibliographyTitle: 'Referências bibliográficas', preview: 'Ouvir o áudio convertido' },
  nl: { faqTitle: 'Veelgestelde vragen', bibliographyTitle: 'Bibliografische referenties', preview: 'Geconverteerde audio beluisteren' },
  sv: { faqTitle: 'Vanliga frågor', bibliographyTitle: 'Bibliografiska referenser', preview: 'Spela upp konverterat ljud' },
  pl: { faqTitle: 'Często zadawane pytania', bibliographyTitle: 'Bibliografia', preview: 'Odtwórz przekonwertowany dźwięk' },
  tr: { faqTitle: 'Sık sorulan sorular', bibliographyTitle: 'Kaynakça', preview: 'Dönüştürülen sesi oynat' },
  id: { faqTitle: 'Pertanyaan umum', bibliographyTitle: 'Referensi bibliografi', preview: 'Putar audio yang dikonversi' },
  ru: { faqTitle: 'Частые вопросы', bibliographyTitle: 'Библиографические ссылки', preview: 'Прослушать преобразованный звук' },
  ja: { faqTitle: 'よくある質問', bibliographyTitle: '参考資料', preview: '変換した音声を再生' },
  ko: { faqTitle: '자주 묻는 질문', bibliographyTitle: '참고 자료', preview: '변환된 오디오 재생' },
  zh: { faqTitle: '常见问题', bibliographyTitle: '参考资料', preview: '播放转换后的音频' },
};

export function createAudioLocaleContent(from: AudioFormat, to: AudioFormat, locale: KnownLocale): ToolLocaleContent<AudioConverterUI> {
  const copy = COPY[locale] ?? COPY.en;
  const faq = copy.faq(from, to);
  const howTo = copy.howTo(from, to);
  const seo = copy.seo(from, to);
  const title = copy.title(from, to);
  const description = copy.description(from, to);

  const ui = {
    ...copy.ui,
    ...SECTION_LABELS[locale],
    dragText: copy.dragText(from),
    convertText: copy.convertText(from, to),
  } as AudioConverterUI;

  return {
    slug: copy.slug(from, to),
    title,
    description,
    ui,
    seo,
    faq,
    bibliography: [
      { name: 'FFmpeg Documentation', url: 'https://ffmpeg.org/documentation.html' },
      { name: 'WebAssembly Documentation', url: 'https://webassembly.org/docs/' },
    ],
    howTo,
    schemas: generateSchemas({ title, description, inLanguage: locale, faq, howTo }),
  };
}

export function createAudioLocaleLoaders(from: AudioFormat, to: AudioFormat) {
  return {
    de: () => Promise.resolve(createAudioLocaleContent(from, to, 'de')),
    en: () => Promise.resolve(createAudioLocaleContent(from, to, 'en')),
    es: () => Promise.resolve(createAudioLocaleContent(from, to, 'es')),
    fr: () => Promise.resolve(createAudioLocaleContent(from, to, 'fr')),
    id: () => Promise.resolve(createAudioLocaleContent(from, to, 'id')),
    it: () => Promise.resolve(createAudioLocaleContent(from, to, 'it')),
    ja: () => Promise.resolve(createAudioLocaleContent(from, to, 'ja')),
    ko: () => Promise.resolve(createAudioLocaleContent(from, to, 'ko')),
    nl: () => Promise.resolve(createAudioLocaleContent(from, to, 'nl')),
    pl: () => Promise.resolve(createAudioLocaleContent(from, to, 'pl')),
    pt: () => Promise.resolve(createAudioLocaleContent(from, to, 'pt')),
    ru: () => Promise.resolve(createAudioLocaleContent(from, to, 'ru')),
    sv: () => Promise.resolve(createAudioLocaleContent(from, to, 'sv')),
    tr: () => Promise.resolve(createAudioLocaleContent(from, to, 'tr')),
    zh: () => Promise.resolve(createAudioLocaleContent(from, to, 'zh')),
  };
}

export const audioFormatLabel = (from: AudioFormat, to: AudioFormat): string => pair(from, to);
