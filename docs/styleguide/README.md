# DRK-Styleguide-Anbindung – Status &amp; Fortsetzung

Ziel: Diese Website (BRK Isen) soll den Vorgaben des offiziellen
DRK-Styleguides unter https://styleguide.drk.de/ entsprechen.

## Status (Stand: siehe letzten Commit in diesem Ordner)

**Wichtige Einschränkung:** Der direkte Zugriff auf `styleguide.drk.de` war
in der Session, die diese Dokumente angelegt hat, durch den
Netzwerk-Egress-Proxy blockiert (`EGRESS_BLOCKED`). Alle Angaben in
[`tokens.md`](./tokens.md) stammen deshalb **nicht** von der Originalseite,
sondern aus Web-Suchergebnissen (Zusammenfassungen Dritter, siehe Quellen
in `tokens.md`). Das ist ein Notbehelf, keine verifizierte Übernahme.

Bereits umgesetzt (siehe `css/style.css` und alle `*.html`):

- Farb-Tokens auf DRK-Rot (`#E60005`), DRK-Dunkelblau (`#002D55`) als
  Sekundärfarbe umgestellt.
- Schrift-Tokens: `--font-heading` (Merriweather) für Überschriften,
  `--font-body` (Helvetica/Arial) für Fließtext; Merriweather wird per
  Google Fonts eingebunden (`<link>`-Tags in jedem HTML-`<head>`).
- Fließtext-Links (`a`-Grundstil) auf DRK-Dunkelblau + fett umgestellt.
- Logo-Platzhalter (`.logo-cross`) korrigiert: Rotes Kreuz jetzt rot auf
  weißem Grund (vorher fälschlich invertiert) – das Kreuz-Symbol darf laut
  Styleguide nie umgefärbt oder invertiert werden.

Noch offen: siehe [`open-questions.md`](./open-questions.md).

## Wie eine neue Session hier weiterarbeitet

1. **Zuerst versuchen, die Originalquelle zu erreichen:**
   `WebFetch` auf `https://styleguide.drk.de/` (und die Unterseiten aus
   `tokens.md` → Abschnitt „Quellen“). Falls das in der neuen Session
   funktioniert (Netzwerk-Policy kann sich unterscheiden), **alle Werte in
   `tokens.md` gegen die Originalseite verifizieren und Quellenangaben auf
   die echten Seiten-URLs mit Abrufdatum aktualisieren.**
2. Falls der Zugriff weiterhin blockiert ist: den Nutzer bitten, relevante
   Seiten/Screenshots/PDF-Exporte des Styleguides bereitzustellen (z. B. als
   Datei-Upload), und `tokens.md` danach aktualisieren.
3. Nach jeder Aktualisierung von `tokens.md`: die entsprechenden CSS-Variablen
   in `css/style.css` (Abschnitt `:root`) und ggf. Font-Links in den
   HTML-`<head>`-Bereichen anpassen.
4. Offene Punkte aus `open-questions.md` abarbeiten und dort abhaken bzw.
   entfernen, sobald geklärt.
5. Änderungen committen und auf den Branch
   `claude/static-website-scaffold-ef17x5` pushen (Remote:
   `franzreitmayer/BRK_Isen_WebSite`).

## Repo-Layout (Kontext für neue Sessions)

- Arbeitskopie mit Push-Zugriff: `/home/user/brk_isen_website`
  (Branch `claude/static-website-scaffold-ef17x5`).
- `css/style.css` enthält alle Design-Tokens als CSS-Variablen in `:root`.
- Es gibt **kein Build-Tool** – reines HTML/CSS/JS, jede Seite bindet
  `css/style.css` und `js/main.js` direkt ein.
