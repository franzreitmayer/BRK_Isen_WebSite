# BRK Isen – Website

Statisches Grundgerüst für die Website des BRK Ortsvereins Isen. Reines
HTML/CSS/JavaScript ohne Build-Schritt – jede Seite kann direkt im Browser
geöffnet werden.

## Struktur

```
.
├── index.html          Startseite
├── ueber-uns.html       Über uns
├── angebote.html        Angebote/Leistungen
├── kontakt.html          Kontakt (Formular ohne Backend)
├── impressum.html        Impressum (Platzhalter, rechtlich prüfen lassen)
├── datenschutz.html      Datenschutzerklärung (Platzhalter, rechtlich prüfen lassen)
├── css/style.css         Gemeinsames Stylesheet
├── js/main.js            Mobile Navigation, Footer-Jahr
└── assets/img/           Bilder (aktuell leer)
```

## Lokal ansehen

Kein Build nötig. Entweder `index.html` direkt im Browser öffnen, oder für
saubere relative Pfade einen einfachen lokalen Server starten:

```bash
python3 -m http.server 8000
```

und dann `http://localhost:8000` aufrufen.

## DRK-Styleguide

Die Website orientiert sich am Corporate Design des DRK
(https://styleguide.drk.de/). Status, verwendete Design-Tokens (Farben,
Schriften) und offene Punkte dazu stehen in
[`docs/styleguide/`](docs/styleguide/README.md) – dort auch die Anleitung,
wie eine neue Session an dieser Anbindung weiterarbeitet.

## Offene Punkte / Platzhalter

- Adresse, Telefonnummer, E-Mail und Ansprechpartner sind Platzhalter und
  müssen durch echte Daten ersetzt werden.
- Impressum und Datenschutzerklärung sind Platzhalter und müssen vor
  Veröffentlichung rechtlich geprüft und vervollständigt werden.
- Das Kontaktformular ist aktuell nicht an ein Backend angebunden.
- Es gibt noch keine echten Bilder in `assets/img/`.

## Konventionen für die Weiterarbeit

- Jede Seite bindet `css/style.css` und `js/main.js` ein und übernimmt den
  bestehenden Header/Footer-Aufbau (Kopieren aus einer vorhandenen Seite ist
  der einfachste Weg für eine neue Seite).
- Neue Unterseiten in die Navigation (`.main-nav`) und den Footer aller
  Seiten eintragen, damit die Navigation konsistent bleibt.
- Es kommt bewusst kein Framework/Build-Tool zum Einsatz, damit mehrere
  Sessions unabhängig voneinander an einzelnen Dateien arbeiten können.
