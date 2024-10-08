import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function TopTenMovies({ classicMovies }) {
    const [showCaseMovie, setShowCaseMovie] = useState(0)
    const [selected, setSelected] = useState(0)
    let genres = ""
    return (
        <>
            {classicMovies ?
                <>
                    <h3>Critically Acclaimed Classics </h3>
                    <div id="top-ten-movies">

                        {
                            classicMovies.map((movie, i) => {
                                const { title, image, id, imdbid } = movie
                                return (

                                    <div key={id} id={i} onClick={() => { setShowCaseMovie(i) }}>

                                        <div className={`poster ${showCaseMovie===i? "selected":""}`} style={{ backgroundImage: "url(" + `${image}` + ")" }}></div>


                                        <span >{title}</span>



                                    </div>


                                )
                            })
                        }
                    </div>


                </> : "nothing here"


            }


            <div id='movie-slide'>

                {
                    classicMovies && classicMovies[0] ?

                        <>


                            <div className={styles.movieImage} style={{ backgroundImage: "url(" + `${classicMovies[showCaseMovie].image}` + ")" }}></div>
                            <div className={styles.movieInfo}>

                                <div className={styles.movieTitle}>

                                    <h3>{classicMovies[showCaseMovie].title}</h3>
                                    <h3>{classicMovies[showCaseMovie].rating}/<span className={styles.tenRating}>10</span></h3>

                                </div>

                                <ul>
                                    <li>{classicMovies[showCaseMovie].year}</li>
                                    <li>{(classicMovies[showCaseMovie].genre).join("/")} </li>
                                </ul>

                                <p>{classicMovies[showCaseMovie].description}</p>
                                <Link to={`/movie/${classicMovies[showCaseMovie].imdbid}`}>See more</Link>
                            </div>

                        </> :
                        "nope"
                }


            </div>

        </>

    )

}