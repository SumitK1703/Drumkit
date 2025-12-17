# 🥁 Drum Kit

> A virtual drum kit that lets you play beats using your keyboard or mouse.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Stack-HTML%20|%20CSS%20|%20JavaScript-yellow)

## 📖 Overview
This project is a fun, interactive web application that simulates a real drum kit. It allows users to play different drum sounds by clicking on the drum icons or pressing specific keys on their keyboard. It's a great example of **DOM manipulation** and **event handling** in JavaScript.

## ✨ Features
- **Dual Interaction:** Play drums by clicking buttons or using keyboard shortcuts.
- **Real Audio:** High-quality audio samples for 7 different percussion instruments.
- **Responsive Design:** Centered layout that works on desktop browsers.
- **Visuals:** Custom images for each drum component (Toms, Snare, Crash, Kick).

## 🎹 How to Play
You can trigger the sounds using the following keys:

| Key | Instrument |
| :---: | :--- |
| **W** | Tom-1 |
| **A** | Tom-2 |
| **S** | Tom-3 |
| **D** | Tom-4 |
| **J** | Snare |
| **K** | Crash |
| **L** | Kick Bass |

## 🛠️ Tech Stack
- **HTML5:** Structure of the drum kit buttons.
- **CSS3:** Styling, background images for drums, and layout.
- **JavaScript (ES6):** Logic for mapping key presses and clicks to audio files using the `switch` statement and `Audio` objects.
- **Assets:** Custom PNG images and MP3 sound files.

## 📂 Project Structure
```text
drumkit/
├── index.html        # Main interface
├── styles.css        # Styling and drum images
├── script.js         # Event listeners for clicks and keystrokes
├── images/           # Visual assets (tom1.png, crash.png, etc.)
└── sounds/           # Audio assets (tom-1.mp3, snare.mp3, etc.)
