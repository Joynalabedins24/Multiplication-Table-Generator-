# Dynamic Multiplication Table Generator

A beautifully designed, fully responsive web application that generates multiplication tables (নামতা) based on user input. Built using clean HTML, modern CSS Grid, and dynamic JavaScript nested loops with staggered entrance animations.

## 🚀 Features

- **Dynamic Table Generation:** Generates multiplication tables from 1 up to the exact number entered by the user.
- **Nested Loop Logic:** Utilizes optimized JavaScript nested `for` loops to structure the calculations.
- **Modern & Responsive UI:** Fully adaptable layout using CSS Grid and Flexbox that looks stunning on desktops, tablets, and mobile phones.
- **Staggered Animations:** Individual table cards fade and slide up smoothly with dynamic delays for a premium user experience.
- **Input Validation:** Prevents empty or invalid number submissions with instant error feedback.

## 🛠️ Tech Stack

- **HTML5:** Semantic structure and interface layout.
- **CSS3:** Custom properties (variables), linear gradients, modern typography, and CSS grid alignments.
- **JavaScript (ES6):** Dynamic DOM manipulation, nested looping arrays, and logic implementation.

## 📁 Project Structure

```text
├── index.html          # Main HTML document structure
├── style.css           # Modern styles, grids, and animations
└── app.js              # Nested loop logic and DOM integration
```

## ⚙️ How It Works (Code Breakdown)

The application leverages a nested loop sequence to compute and output the structure into the UI container:

1. **Outer Loop (`i`):** Iterates from `1` up to the user-defined `limit`. Each iteration spawns a new distinct table card container.
2. **Inner Loop (`j`):** Iterates from `1` to `10` for each parent number, generating individual rows (e.g., `i x j = result`) and embedding them natively inside the card.

## 💻 How to Run Locally

1. Clone or download this repository to your computer.
2. Open the project folder.
3. Double-click the `index.html` file to instantly open it inside any modern web browser.