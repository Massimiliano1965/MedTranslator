# MedTranslator

Frasi pronte per parlare con i pazienti stranieri (infermieri, OSS, OA, medici).
12 lingue, a voce e a schermo, con risposte da toccare (Sì/No, dolore 0-10, scelte) e tabella a immagini.

© 2026 Massimiliano Previtali. Tutti i diritti riservati.

## Come creare l'app sul PC (Linux, una volta sola)

```
cd ~/"Cartella senza nome/Documenti/Apps"
git clone https://github.com/Massimiliano1965/medtranslator MedTranslator
cd MedTranslator
cordova platform add android
cordova plugin add cordova-plugin-tts-advanced
cordova run android
```

Dopo, a ogni modifica: copia i file cambiati nelle loro cartelle e rilancia `cordova run android`.
