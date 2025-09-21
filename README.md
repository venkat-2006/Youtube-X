# 🎥 Youtube-X

Youtube-X is a **YouTube clone built with React + Vite**.  
It replicates core YouTube features such as video playback, recommendations, and a responsive layout, while also being modular and developer-friendly.  

---

## 🚀 Features
- 🎬 Play videos with a modern UI  
- 🧭 Navigation bar, sidebar, and feed components  
- 📑 Recommended videos section  
- 📱 Responsive design using Flexbox & media queries  
- ⚡ Fast development with **Vite** bundler  

---

## 🛠️ Tech Stack
- **React 18** – Component-based UI  
- **Vite** – Fast build & dev server  
- **CSS3** – Styling & responsive layout  
- **JavaScript (ES6+)** – Functionality & API integration  

---

## 📂 Project Structure
Youtube-X/
├── public/ # Static files
├── src/
│ ├── assets/ # Images, icons, etc.
│ ├── components/ # Reusable components
│ │ ├── Feed/
│ │ ├── Navbar/
│ │ ├── PlayVideo/
│ │ ├── Recommended/
│ │ └── Sidebar/
│ ├── pages/ # Main app pages
│ │ ├── Home/
│ │ └── Video/
│ ├── App.jsx # Root component
│ ├── data.js # Sample data / API handler
│ ├── index.css # Global styles
│ └── main.jsx # Entry point
├── .env # Environment variables (API keys etc.)
├── index.html # Main HTML template
├── package.json # Dependencies & scripts
├── vite.config.js # Vite configuration
└── README.md # Documentation

yaml
Copy code

---

## ⚡ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/venkat-2006/Youtube-X.git
   cd Youtube-X
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open in browser:

arduino
Copy code
http://localhost:5173/
🔧 Future Improvements
🔍 Integrate YouTube Data API v3 for real video search & playback

🌙 Dark mode toggle

💬 Like, comment & subscribe features

👤 User authentication (Google OAuth / Firebase)