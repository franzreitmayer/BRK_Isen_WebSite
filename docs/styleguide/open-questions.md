# Offene Punkte – DRK-Styleguide-Umsetzung

Diese Punkte konnten mangels Zugriff auf `styleguide.drk.de` nicht
verifiziert werden und sollten in einer neuen Session (mit Netzwerkzugriff
oder nutzerseitig bereitgestellten Unterlagen) geklärt werden.

## Muss verifiziert werden

- [ ] Exakte Hex-/RGB-Werte für DRK-Rot, weiches Rot und DRK-Dunkelblau
      gegen die Originalseite `basiselemente/farben` prüfen.
- [ ] Offizielle Logo-Dateien (SVG/EPS) für BRK/DRK besorgen und
      `assets/img/` ablegen, statt des Text-Platzhalters (`+` in
      `.logo-cross`). Siehe `basiselemente/logo` und
      `downloads/deutsches-rotes-kreuz/bayerisches-rotes-kreuz`.
- [ ] Mindestabstände/Schutzzone und Mindestgröße des Rotkreuz-Symbols
      prüfen (typisch bei Corporate-Design-Guides vorgeschrieben).
- [ ] Freigabe/Lizenzbedingungen für Merriweather via Google Fonts
      gegenprüfen (laut Recherche Open Font License, sollte unkritisch sein).
- [ ] Genaues Grid-/Spacing-System (Spaltenraster, Breakpoints) der
      DRK-Webseiten-Vorgaben – aktuell nutzt das Projekt ein einfaches,
      nicht DRK-spezifisches Grid (`--max-width: 1100px`,
      `repeat(auto-fit, minmax(...))`).
- [ ] Icon-Set/Iconografie-Vorgaben (Stil, Strichstärke, Farbverwendung).
- [ ] Button-Varianten (primär/sekundär/disabled) laut Styleguide-Kapitel
      „Digital“ – aktuell nur eine einfache Primär-/Sekundär-Variante
      umgesetzt.
- [ ] Bildsprache/„Bühnenbild“-Prinzip: konkrete Vorgaben zu Bildformaten,
      Bildunterschriften, Freistellern.

## Bewusste Abweichungen (Entscheidung dieser Session, zur Diskussion)

- Navigations- und Footer-Links (`.main-nav a`, `.site-footer a`,
  `.brand`) verwenden weiterhin neutrale/dunkle Farben statt des
  Dunkelblau-Linkstils, da sie als UI-Chrome und nicht als Fließtext-Links
  gelten. Falls der Styleguide das anders vorschreibt, hier anpassen.
- Neutrale Grautöne (`--color-gray`, `--color-light-gray`,
  `--color-border`) sind nicht aus dem Styleguide belegt, sondern frei
  gewählt für Hintergründe/Rahmen. Falls der Styleguide definierte
  Graustufen vorgibt, hier ersetzen.
- `--color-red-dark` (`#b40004`, für Hover-Zustände) ist keine offizielle
  Styleguide-Farbe, sondern eine abgedunkelte Ableitung von DRK-Rot für
  Interaktionszustände.

## Vorgehen zum Abarbeiten

1. Punkt klären (Originalquelle oder Nutzerangabe).
2. `tokens.md` aktualisieren (Wert + Quelle mit Datum).
3. `css/style.css` bzw. betroffene HTML-Dateien anpassen.
4. Diesen Punkt hier abhaken oder entfernen.
