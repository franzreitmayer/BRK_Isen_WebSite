# DRK Design-Tokens – extrahierter Stand

> **Herkunft:** Direkter Abruf von `styleguide.drk.de` war blockiert
> (`EGRESS_BLOCKED`). Diese Tabelle basiert auf Web-Suchergebnissen
> (Zusammenfassungen, keine Originalseiten). Vor produktivem Einsatz gegen
> die Originalquelle verifizieren – siehe `README.md` in diesem Ordner.

## Farben

| Token | Wert | Bedeutung / Quelle |
|---|---|---|
| DRK-Rot (Primärfarbe) | `#E60005` (RGB 230/0/5), RAL 3020 (Verkehrsrot) | Haupt-Markenfarbe; entspricht ICRC-Empfehlung |
| DRK-Rot Alternative | RAL 3024 (Leuchtrot) | alternative Abstufung laut Styleguide |
| Weiches Rot (Web) | `#E46450` (RGB 228/100/80) | weichere Variante speziell für digitale Anwendungen |
| DRK-Dunkelblau (Sekundärfarbe) | `#002D55` (RGB 0/45/85), Pantone 540 U, RAL 5003, Euroscale C100 M40 Y0 K60 | neu ins Farbspektrum aufgenommen, für Textbetonung/Links |
| Schwarz | `#000000` | Teil der Primärfarben (Rot/Weiß/Schwarz) |
| Weiß | `#FFFFFF` | Teil der Primärfarben; Pflicht-Hintergrund für das Rotkreuz-Symbol |

Verwendung laut Suchergebnissen: DRK-Rot wird auf der Website für Buttons,
Überschriften, Icons und Hintergrundflächen eingesetzt. Das Rotkreuz-Symbol
muss **immer** rot auf weißem Grund erscheinen und darf weder in Form noch
Farbe verändert oder überlagert werden.

## Typografie

| Rolle | Schrift | Hinweise |
|---|---|---|
| Überschriften | Merriweather (Serif) | freie Google-Font (Open Font License), im Projekt per `<link>` aus Google Fonts eingebunden |
| Fließtext / UI | Helvetica bzw. Neue Helvetica (Sans-Serif) | Fallback: Arial |
| Hervorhebungen im Fließtext / Links | Neue Helvetica **Bold**, Farbe DRK-Dunkelblau | im Projekt als globaler `a`-Stil umgesetzt |
| Büro-/Office-Anwendungen (nicht Web) | Georgia / Arial | nicht relevant für diese Website |

## Gestaltungsprinzipien Website (laut Suchergebnissen, Kapitel „Webseite“)

- Zurückhaltendes, klar strukturiertes Erscheinungsbild.
- Bilder als „Bühnenbild“ im Zentrum jeder Seite.
- Prinzip „weniger ist mehr“ bei der Inhaltsauswahl.

## Umsetzung im Projekt

Die Tokens sind als CSS-Variablen in `css/style.css` (`:root`) hinterlegt:
`--color-red`, `--color-red-dark`, `--color-red-soft`, `--color-blue-dark`,
`--color-black`, `--color-white`, `--font-heading`, `--font-body`.

## Quellen (Web-Suche, kein Originalabruf)

- https://styleguide.drk.de/ (Übersicht – Zugriff blockiert)
- https://styleguide.drk.de/deutsches-rotes-kreuz/basiselemente/farben
- https://styleguide.drk.de/deutsches-rotes-kreuz/basiselemente/schrift
- https://styleguide.drk.de/deutsches-rotes-kreuz/digital/webseite
- https://styleguide.drk.de/deutsches-rotes-kreuz/basiselemente/logo
- https://styleguide.drk.de/downloads/deutsches-rotes-kreuz/bayerisches-rotes-kreuz
  (BRK-spezifische Vorlagen/Downloads)
- https://roter-kreis.de/DRK-Rot
- https://roter-kreis.de/DRK-Dunkelblau
