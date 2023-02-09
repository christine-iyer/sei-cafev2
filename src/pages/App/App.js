import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './App.module.scss';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import FruitsPage from '../FruitsPage/FruitsPage';
import TodosPage from '../TodosPage/TodosPage'
// import MainPage from '../MainPage/MainPage';
// import MoviePage from '../MoviePage/MoviePage';
import NavBar from '../../components/NavBar/NavBar';
export default function App() {
  const [user, setUser] = useState(getUser());
  // const [classicMovies, setClassicMovies] = useState([])
  //   const [newMovies, setNewMovies] = useState([])

  //   const getOldMovies = async () => {
  //     try {
  //         const response = await fetch('https://imdb-top-100-movies.p.rapidapi.com/', {
  //             method: "GET",
  //             headers: {
  //                 'X-RapidAPI-Key': `${process.env.REACT_APP_IMDB_TOP_TEN_KEY}`,
  //                 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  //             }
  //         })
  //         const data = await response.json()
  //         setClassicMovies(data.slice(0,6))


  //     } catch (error) {
  //         console.error(error)
  //     }
  // }


  // const getNewMovies = () => {

  //     fetch('https://metacriticapi.p.rapidapi.com/movies/new?filter=date', {
  //         method: "GET",
  //         headers: {
  //             'X-RapidAPI-Key': `${process.env.REACT_APP_IMDB_TOP_TEN_KEY}`,
  //             'X-RapidAPI-Host': 'metacriticapi.p.rapidapi.com'
  //         }
  //     })
  //         .then((metacriticResponse) => {
  //             return metacriticResponse.json()
  //         })
  //         .then((metacriticData) => {
  //             setNewMovies(metacriticData.slice(0, 10))
  //         })

  // }

  // useEffect(() => {
  //     getOldMovies()
  //     getNewMovies()
  // }, [])
  return (
    <main className={styles.App}>
      <NavBar />
      { user ?
        <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path="/fruits" element={<FruitsPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/todos" element={<TodosPage user={user} setUser={setUser} />} />
            {/* <Route path="/" element={<MainPage username={user._id} user={user} classicMovies={classicMovies} newMovies={newMovies} />} />
                            <Route path="/movie/:id" element={<MoviePage username={user._id} user={user} />} /> */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}