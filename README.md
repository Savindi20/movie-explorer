# Movie Explorer

This is a React-based movie browsing app using the TMDb API.

## 🔥 Live Demo

[👉 View Deployed App](https://movie-explorer-osyex2dg2-savindi20s-projects.vercel.app/)


## Features
- Search for movies
- View trending movies
- Toggle light/dark mode
- Save favorites using localStorage
- View detailed movie info

## Setup

1. Copy `.env.example` to `.env` and add your TMDb API key.
2. Run `npm install`
3. Run `npm start`

# 🎬 Movie Explorer – Discover Your Favorite Films

Movie Explorer is a responsive React web application that allows users to search, explore, and save their favorite movies using real-time data from [TMDb API](https://developers.themoviedb.org/3). Designed with a user-friendly interface, light/dark mode, and local persistence, this app is perfect for movie enthusiasts.

## 📸 Features

- 🔐 User login interface (demo purpose only)
- 🔎 Search bar to look up movies
- 🎥 Detailed movie view with poster, overview, genres, rating, release date, and trailer
- 🔄 Light/Dark theme toggle
- ⭐ Add/remove movies from a local favorites list
- 🌟 View trending movies on the homepage
- 💾 Last search and favorites stored in local storage
- 📱 Responsive mobile-first design
- 📦 Infinite scrolling (or optional Load More)

---

## ⚙️ Technologies Used

- React
- Axios
- Material-UI (MUI)
- TMDb API
- React Router
- React Context API
- LocalStorage

---

## 🚀 Getting Started

### 1. Clone the Repo

git clone https://github.com/Savindi20/movie-explorer.git
cd movie-explorer

### 2. Install Dependencies
npm install

### 3. Setup TMDb API
Create a .env file in the root directory and add:
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
You can get your API key from TMDb API.

### 4. Run the App
npm start
The app will run locally at http://localhost:3000.

### 🏗️ Project Structure
movie-explorer/
│
├── public/
│   └── index.html
│
├── src/
│   ├── api/
│   │   └── tmdb.js
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│   └── theme.js
│
├── .env
├── package.json
└── README.md

### 📦 Dependencies
- axios
- react
- react-dom
- react-router-dom
- @mui/material
- @emotion/react
- @emotion/styled
- react-icons
- react-scripts
- react-toastify
- react-lottie
- react-lottie-player