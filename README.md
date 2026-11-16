# Miteinander für Afrika · mfmia

**Kundenprojekt für Miteinander – für Menschen in Afrika e.V.**

Website zur Darstellung der Vereinsarbeit und der Projekte in Kamerun. Die Anwendung kombiniert Nuxt-Seiten und wiederverwendbare Vue-Komponenten mit Storyblok als Headless CMS für redaktionelle Inhalte.

## Funktionsumfang

- Vereins- und Projektseiten zu Bildung, Brunnenbau, Hygiene/Gesundheit und Hilfe zur Selbsthilfe.
- Storyblok-Anbindung für Artikel, Storys und Projektinhalte; Darstellung von Rich Text und Mediengalerien.
- Nachrichtenübersicht mit Datumssortierung und schrittweisem Nachladen der angezeigten Artikel.
- Interaktive Standortkarten mit Leaflet und OpenStreetMap.
- Kontaktformular und Newsletter-Anmeldeformular mit serverseitiger reCAPTCHA-Prüfung und E-Mail-Versand über Nodemailer.
- PayPal-Spendenbutton sowie seitenbezogene SEO-Metadaten.

Die Newsletter-Anmeldung versendet E-Mails an Interessierte und den Verein; eine vollständige Newsletter-Verwaltung ist nicht Bestandteil des Repositories.

## Technik und Struktur

**Nuxt 3 · Vue 3 · Storyblok · Tailwind CSS / daisyUI · Leaflet · Nodemailer**

| Pfad | Inhalt |
| --- | --- |
| `pages/` | Dateibasierte Routen für Vereins-, Projekt- und Inhaltsseiten |
| `components/` | Navigation, Inhaltsvorlagen, Karten, Formulare und SVG-Komponenten |
| `storyblok/` | Komponenten zur Darstellung von CMS-Inhalten |
| `server/api/` | Server-Endpunkte für Kontakt und Newsletter-Anmeldung |
| `assets/css/` | Globale Styles |
| `nuxt.config.ts` | Module und Integrationskonfiguration |

Das Repository basiert auf dem eigenen [Nuxt-/Storyblok-Starter](https://github.com/ElianKas/storyblok-starter) und enthält die projektspezifischen Seiten, Komponenten und Integrationen.

## Lokal einrichten

Voraussetzungen sind Node.js, npm und Zugriff auf einen Storyblok-Space mit den passenden Inhaltsmodellen und Inhalten. Diese CMS-Daten sind nicht im Repository enthalten.

```bash
npm ci
npm run dev
```

Der Entwicklungsserver läuft standardmäßig unter `http://localhost:3000`. Die benötigten Umgebungsvariablen können lokal in einer `.env`-Datei gesetzt werden:

| Variable | Verwendung |
| --- | --- |
| `STORYBLOK_ACCESSTOKEN` | Storyblok-API-Zugriff |
| `RECAPTCHA_SECRET_KEY` | Serverseitige reCAPTCHA-Prüfung |
| `EMAIL`, `EMAIL_PASSWORD` | SMTP-Zugang für das Kontaktformular |
| `NEWSLETTER_EMAIL`, `NEWSLETTER_EMAIL_PASSWORD` | SMTP-Zugang für Newsletter-Anmeldungen |

SMTP-Host, reCAPTCHA-Site-Key und PayPal-Button-ID sind im Code projektspezifisch hinterlegt. Für eine eigene Installation müssen diese Integrationen passend konfiguriert werden.

```bash
npm run build
npm run preview
```

Kontakt- und Newsletter-Endpunkte benötigen eine Server-Laufzeit und gültige Dienstkonfigurationen.
