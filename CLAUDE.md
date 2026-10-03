# MedTranslator (ex "Traduttore di reparto") — istruzioni per Claude

Progetto PERSONALE di Massimiliano Previtali: frasi pronte per infermieri, OSS, OA e medici
che parlano con pazienti stranieri. Pensato per ospedali di tutta Italia e del mondo.
NON è un progetto dell'Ospedale Papa Giovanni XXIII e NON va presentato all'ospedale (decisione di Massi).
È separato dall'app Doko (repo Massimiliano1965/doko): non mescolare i due progetti.

App Cordova/Android. App id: `it.previtali.medtranslator`. Nome: MedTranslator.
File: `www/index.html` (tutto il programma: frasi, lingue, schermate), `www/fonts/` (font dentro l'app),
`www/lib/Sortable.min.js` (trascinare i bottoni), `config.xml` (impostazioni dell'app).
`extra/giorgia.html` = versione per Giorgia (pagina a parte, non fa parte dell'app).
In cima a ogni file c'è la dichiarazione di diritti d'autore di Massimiliano Previtali: va mantenuta.

## Chi ci lavora
Massi non è un programmatore. Rispondi e spiega sempre in italiano semplice.
Fai tu le modifiche e alla fine riassumi cosa hai cambiato e cosa deve provare sul telefono.
Niente soluzioni "prova questo, poi quest'altro": la soluzione definitiva al primo colpo.
Consegna: i file SINGOLI cambiati, dicendo in quale cartella vanno (`www/`, `www/fonts/`…). MAI zip.
Il PC di Massi è Linux; il telefono è Android.

## REGOLA N. 1: NON MODIFICARE SENZA CHIEDERE IL PERMESSO
Fai SOLO quello che Massi chiede. Qualsiasi altra cosa va PRIMA proposta e fatta solo dopo il suo sì.

## Lingue
Ordine delle lingue (colonne delle frasi): it, en, es, fr, ar, zh, ja, ur, ro, sq, pa, uk, ru, bn, fil (15 lingue).
- Le prime 7 sono scritte dentro ogni frase (`FRASI`); urdu, romeno, albanese, punjabi (gurmukhi), ucraino e russo
  stanno nei dizionari `URDU`/`ROMENO`/`ALBANESE`/`PUNJABI`/`UCRAINO`/`RUSSO`/`BENGALESE`/`TAGALOG` (chiave = frase italiana)
  e vengono aggiunte in fondo alle frasi. Le frasi aggiunte dopo (`FRASI_NUOVE`) hanno già tutte le 15 colonne.
- IL GIAPPONESE È PER MASSI (motivo personale, molto importante): la LINGUA giapponese deve restare sempre nell'app.
  Le frasi (giapponese compreso) si possono correggere, cambiare o togliere come tutte le altre.
- Altre lingue: le decide Massi.
- Le traduzioni vanno controllate da madrelingua (colleghi, mediatori culturali) prima di distribuire l'app.
  Frasi cliniche (digiuno, farmaci, consenso): un errore può fare danni.

## Ruoli
I = infermiere, S = OSS, A = OA (operatore alberghiero), M = medico. Ogni frase ha i suoi ruoli.

## Voce
Nell'app la voce passa dal plugin TTS (`window.TTS.speak`); nel browser da `speechSynthesis`.
Se una lingua non ha la voce installata sul telefono, il testo resta comunque grande a schermo.

## Da fare
1. Icona e nome definitivo dell'app (MedTranslator per ora).
2. Fogli di controllo per i madrelingua (una lingua per volta: frase italiana, traduzione, "giusta"/"correggi").
3. Frase di esclusione di responsabilità: "strumento di aiuto, non sostituisce il mediatore culturale né il consenso informato".
