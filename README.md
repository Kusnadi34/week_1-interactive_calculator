# Interactive Calculator - Pynexia Internship Task

A simple, responsive, and functional web-based calculator built using fundamental web technologies (HTML, CSS, and Vanilla JavaScript). This project is part of the Week 1 Front-End Development task for the Pynexia Technology Internship.

## 🚀 Features

- **Basic Arithmetic Operations:** Supports addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- **Real-time Input:** UI updates immediately as the user clicks buttons or types on the keyboard.
- **Keyboard Support:** Users can type numbers, operators, and use `Enter`, `Backspace`, and `Escape` directly from the keyboard.
- **Decimal & Error Handling:** Prevents multiple decimals and handles edge cases like division by zero gracefully.
- **Mobile-First Design:** Fully responsive layout using CSS Grid, designed primarily for mobile screens and scaled up for desktop.
- **Interactive Feedback:** Button hover and active states for better user experience.

## 🛠️ Technologies Used

- **HTML5:** Semantic structure and accessibility.
- **CSS3:** Custom properties (variables), Flexbox for centering, and CSS Grid for the button layout.
- **Vanilla JavaScript:** DOM manipulation, event delegation, and arithmetic logic (no external libraries or frameworks used).

## 📂 Project Structure

```text
interactive_calculator/
├── index.html      # The main HTML structure
├── style.css       # Styling and responsive layout
└── script.js       # Calculator logic and event listeners



💻 How to Run Locally
Since this project uses only frontend fundamentals, you don't need any build tools or servers.

Clone or download this folder to your local machine.

Open the index.html file directly in any modern web browser (Chrome, Firefox, Safari, Edge).

Alternatively, if you use VS Code, you can right-click the index.html file and select "Open with Live Server" for a better development experience.

🧠 Implementation Notes
State Management: Uses a simple state object (currentInput, previousInput, currentOperator) to track the calculator's logic.

Floating Point Fix: Implemented a rounding method Math.round(result * 100000000) / 100000000 to prevent JavaScript's classic floating-point errors (e.g., 0.1 + 0.2 = 0.30000000000000004).

Event Delegation: Instead of adding event listeners to every single button, a single listener is attached to the .keys container for better performance and cleaner code.

Developed by [Nana Kusnadi] for Pynexia Technology Internship Batch 12.