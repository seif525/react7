import React, { useState } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import { Search } from "./Search";
import {BrowserRouter , Route} from "react-router-dom"
import Description from "./Description";
import {link} from "react-router-dom";


function App() {
  const [movies, setMovies] = useState([
    {
      
      main_img:
        "https://cdn.telanganatoday.com/wp-content/uploads/2019/05/Aladdin.jpg",
      second_img:
        "https://l-express.ca/wp-content/uploads/2019/06/Box-office-France-Aladdin-prend-d-emblee-la-tete.jpg",
      title: "aladin",
      duration: "02:08:00",
      date: "2019",
      rate: 6,
      genre: "Action, imaginer, Fantasy",
      description:
        "About the famous classic story, where (Aladdin) is a street child wandering the streets of a large crowded city with his loyal friend the monkey (Apo), so he encounters Princess (Jasmine) and falls in love with her, but he goes to prison and gets involved in a plot to rule the land planned by the Sultan's advisor (Jafar) With the help of a mysterious lamp he has magical powers.",
      
      },
    {
      main_img: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg",
      second_img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7EreSxbYu9Uk1Z3GJuiolveoOJ8VLxFLWxg&usqp=CAU",
      title: "The Incredibles",
      duration: "01:55:26",
      date: "2004",
      rate: 1,
      genre: "Action, Fantasy",
      description:
        "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
        
      },
    {
      main_img: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      second_img:
        "https://www.gannett-cdn.com/-mm-/c03fd140debe8ad4c05cf81a5cad7ad61a12ce52/c=0-1580-2985-3266&r=x803&c=1600x800/local/-/media/2017/06/09/USATODAY/USATODAY/636326272873599176-Black-Panther-Teaser.jpg",
      title: "Black Panther",
      duration: "02:15:00",
      date: "2018",
      rate: 3,
      genre: "Action, Adventure, Sci-Fi",
      description:
        "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
      
      },
  ]);
  const [keyword, setKeyword] = useState("");
  const [newRate, setNewRate] = useState(1);

  const search = (text) => {
    setKeyword(text);
  };

  const setRate = (rate) => {
    setNewRate(rate);
  };

  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <BrowserRouter>
    <div className="container">
      <Search search={search} setRate={setRate} newRate={newRate} />
      <MovieList
        addMovie={addMovie}
        movies={movies.filter(
          (movie) =>
            movie.rate >= newRate &&
            movie.title.toLowerCase().includes(keyword.toLowerCase().trim())
        )}
      />
    </div>
    <Route path="/movie/:title" render={(props) =>  <Description {...props} movies={movies} />}/>
    </BrowserRouter>
    
  );
}

export default App;
