# Number Guessing Game

> A responsive number guessing game built with JavaScript and Tailwind CSS, inspired by **Jonas Schmedtmann's** project but with a distinct implementation.

## Features Implemented

### 🎮 Core Gameplay

- Random Number Generation: Secret number between 1-20

- Input System: Number input field with validation

- Guess Checking:
  - Correct guess → Green background, number revealed

  - Too high/too low → Real-time feedback

- Attempt Limits: 20 maximum attempts

## 📊 Game State Management

- Score Tracking: Decreases with incorrect guesses

- HighScore Persistence: Saved across browser sessions

- Restart Functionality: "Again" button resets game

## 🎨 UI/UX Design

- Responsive Layout: Tailwind CSS for all screen sizes

- Visual Feedback:
  - Color-coded backgrounds (green for win)

  - Dynamic message display

- Interactive Elements: Hover states, focus states

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/01mehran/Number_Guessing_Game.git

# Install dependencies
npm install -D tailwindcss

# Build CSS
npm run dev

# Run with Live Server
# Use VS Code Live Server extension or any static file server
```

## 🤝 Contributing

### Contributions are welcome! Here's how you can help:

1. Fork the project

2. Create a feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some AmazingFeature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

## Made with ❤️ by **Mehran**
