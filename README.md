# Towers of Hanoi 🏗️  

A **React + TypeScript + Vite** implementation of the **Towers of Hanoi** puzzle.  

## 🚀 Features  
- Click on rings to move them between pegs  
- Supports a custom number of pegs  
- Tailwind for styling  

## 🛠️ Tech Stack  
- **React** (UI)  
- **TypeScript** (type safety)  
- **Vite** (fast dev environment)  
- **Tailwind CSS** (styling)  

## 📦 Installation  
```sh
git clone -b react https://github.com/tomwinskell/towers-of-hanoi.git
cd towers-of-hanoi
npm install
npm run dev
```

## 🎮 How to Play  
1. Click a ring to pick it up, then click a peg to place it.  
2. Move all rings to last peg, following the rules:  
   - Only one ring can be moved at a time.  
   - A larger ring cannot be placed on a smaller ring.  

## 🔍 Learnings & Structure  
- **Game logic** is kept separate in `gameLogic.ts`.  
- **`useRef`** is used for values that persist across renders without causing re-renders.  
- **JSX rules**: Certain JavaScript (like conditionals) must use `&&` or a ternary.  
- **Tailwind limitation**: Class names must be present at compile time, so conditional rendering of classes isn’t possible.  

## 📜 License  
MIT