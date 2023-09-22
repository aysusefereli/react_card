import { useEffect, useState } from 'react'
import './App.css'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const[games, setGames] = useState([]);

  useEffect (() => {
    fetch("https://api.rawg.io/api/games?key=5582cde83f6f4b7fb02162d641f54836")
    .then(response => response.json())
    .then(data => setGames(data.results))
  },[])

  return (
      <div className="container">
        <div className="card-container">
          {games.map((game) => (
            <div className="card" style={{ backgroundImage: `url(${game.background_image})` }}>
              <div className="border">
                <h1>{game.name}</h1>
                <h2>Rating:{game.rating}</h2>
                <div className="icons">
                  <i className="fa fa-codepen" aria-hidden="true"></i>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                  <i className="fa fa-dribbble" aria-hidden="true"></i>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default App
