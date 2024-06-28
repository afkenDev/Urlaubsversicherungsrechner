# Urlaubsversicherungsrechner: Prämien online berechnen

## Prog 1 von Kenz Abdelkebir

Dieses webbasierte Tool ermöglicht die Berechnung von Versicherungsprämien für Reisen. Benutzer können verschiedene Parameter eingeben und erhalten eine geschätzte Prämie basierend auf ihren Angaben.

**Direkter Zugriff:** [https://urlaubsversicherungsrechner.vercel.app/](https://urlaubsversicherungsrechner.vercel.app/)

## Funktionen

1. **Schritt 1: Startseite**
   - Eingabe der Anzahl von Erwachsenen, Kindern und Haustieren (optional).
   - Berechnung einer ersten Prämie basierend auf Standardwerten.

2. **Schritt 2: Datenabfrage**
   - Angabe von Reisedaten, Reiseart und Reiseerfahrung.

3. **Schritt 3: Details**
   - Auswahl von optionalen Versicherungsleistungen:
     - Stornoschutz
     - Medizinische Notfallversorgung
     - Gepäckschutz
   - Erläuterung der Leistungen in Kurzform.

4. **Schritt 4: Versicherungspaket**
   - Zusammenfassung der ausgewählten Optionen.
   - Möglichkeit zur Überprüfung und Anpassung der Angaben.

5. **Ergebnisseite**
   - Detaillierte Übersicht der gewählten Leistungen.
   - Berechnung der Gesamtprämie basierend auf den Eingaben.
   - Hinweis: Die Prämie ist eine Schätzung, der tatsächliche Preis kann abweichen.
     
## Persönliches 
### Ziele: 
Ich mache einen Urlaubsversicherungsrechner gemäss meinem Miro Board. 
Alle Funktionen welche ich erabeite sind im Miro Board zu sehen. 
### Vorgehen: 
Ich habe jede Seite nach der anderen gemacht. Ich habe zuerst die Texte ins HTML gemacht, dann das Form 
und folglich das ganze JS dazu. 
Für die erste Seite habe ich am längsten gebraucht, da ich dort das CSS gemacht habe und die ersten wichtigen Komponeten. 
Auf der ersten Seite habe ich das ziel gehabt eine schöne Animation zu machen, dabei ist die Wolke entsanden. 
Am Schluss habe ich für die Berrechnung alles in eine globale Variable mit react-dom gemacht. 

## Technologien

* **Frontend:** React.js, React Router (Navigation), CSS (Styling)
* **Backend:** Keine serverseitige Logik, rein clientseitiges Tool


1. **Clone das Repository:**
   ```bash
   git clone https://github.com/dein-benutzername/versicherungspraemien-rechner.git
   cd versicherungspraemien-rechner


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




### Refactoring
Ich will, das man bei der ersten Seite das Form nur mit den Buttons verändern kann. Ich setzte "disabled" ein. 
Ich füge Erklärungen in den Code in mit Comments 
Ich mach, dass man beim Datepicker nur bestimmte Zeitraum auswählen kann, z.B. nicht in die Vergangenheit mit "maxDate und minDate"
