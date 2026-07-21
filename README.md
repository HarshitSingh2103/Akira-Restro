# 🍱 Akira (明) | Sumi-e Minimalist Omakase Web Experience

> A high-end, editorial web interface for a Japanese Omakase dining concept. Grounded in Wabi-Sabi (侘寂) aesthetics and the beauty of negative space (間).

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 📖 Overview

**Akira (明)** is a meticulously crafted landing page designed to evoke the feeling of traditional Japanese Sumi-e (ink wash painting) and handmade Washi paper. It abandons standard modern web UI conventions in favor of an **editorial, magazine-like layout** featuring vertical typography, extreme asymmetric padding, and razor-sharp geometric edges.

## ✨ Key Features

*   **Vertical Typography (`vertical-rl`)**: Authentic integration of vertical Japanese and English text for navigation, section titles, and addresses.
*   **Split-Curtain Preloader**: A custom intro sequence featuring the Enso circle and the idiom "一期一会" (Ichi-go ichi-e: "One time, one meeting").
*   **SVG Grain Texture**: A fixed, multiply-blended fractal noise overlay that gives the entire viewport a tactile, physical paper feel.
*   **Asymmetric Fixed Sidebar**: A 10% width persistent navigation bar acting as the visual anchor for the fluid 12-column grid system.
*   **Zero-Radius Geometry**: Forced `0px` border-radii across the entire Tailwind config for sharp, architectural UI elements.
*   **Ambient Hero Media**: Fullscreen background video softened by warm paper-tone overlays.

---

## 🎨 Design System

### Typography Pairings
The site uses a three-tier typographic hierarchy:
1.  **Cormorant Garamond**: Elegant, high-contrast serif for English quotes, high-end titles, and course descriptions.
2.  **Noto Serif JP**: Refined kanji and kana rendering for authentic Japanese text.
3.  **Montserrat**: Wide-spaced, uppercase monospace/sans for structural labels, navigation, and metadata.

### Color Palette
Custom-configured in Tailwind to reflect natural, organic materials:
*   ⬛ **Sumi (`#1c1a17`)**: Deep charcoal/ink black.
*   📜 **Washi (`#f3ebd9`)**: Warm cream/unbleached paper.
*   ⬜ **Surface (`#ffffff`)**: Pure white for structured cards.
*   🖋️ **Bodytext (`#3a352f`)**: Softened black for readable long-form text.
*   🔴 **Hanko (`#8c2111`)**: Vermilion red accent (inspired by traditional Japanese signature seals).

---

## 🚀 Tech Stack

*   **HTML5**: Semantic markup structuring.
*   **Tailwind CSS**: Handled via CDN with heavily customized theme configurations embedded directly in the `<head>`.
*   **Vanilla JavaScript**: For preloader animations and scroll effects (handled in `script.js`).
*   **Google Fonts**: Serving typography globally.

---

## 🛠️ Installation & Setup

Since this project relies on vanilla HTML/CSS/JS with a Tailwind CDN, there is no complex build process required to view it.

1. **Clone the repository:**
   ```bash
  

   
Navigate to the directory:

Bash
cd akira-omakase
Open the project:
Simply open index.html in any modern web browser, or use a live server extension (like Live Server for VS Code) for the best development experience.

📁 File Structure
Plaintext
├── index.html       # Main HTML document & embedded Tailwind config
├── style.css        # Custom CSS for specific animations (scroll lines, etc.)
├── script.js        # Logic for preloader and scroll interactions
├── Images/          # SVG logos and static assets
└── Videos/          # Ambient background media (e.g., hero background)
💡 Note on Design Philosophy
"完成とは、足すことではなく、残された余白にこそある."
(Perfection is found not in adding, but in the negative space left behind.)

This project intentionally uses extreme margins (mb-[240px], pt-[240px]) and minimal UI elements to let the content breathe.
