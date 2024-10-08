
export default function UserReviews({userReviews}){
    const navigate = useNavigate()
    const handleRedirect = (id)=>{
        navigate(`/movie/${id}`)

    }

    return(
        <>

<h3>Recently Reviewed</h3>
{/* 
<div id="user-reviews-container"> */}

    <div id="recently-reviewed">
    {
          userReviews && userReviews.length?
          userReviews.map((review, i)=>{
            const { movieTitle, poster, movieId} = review
            return(


                <div key={i} onClick={()=> {handleRedirect(movieId)}}>

                <div className={styles.poster} style={{ backgroundImage: "url(" + `${poster}` + ")" }}></div>


                <span >{movieTitle}</span>



            </div>




             
            )
          }):
          "You have yet to leave a review"
        }



    </div>
   
       {/* </div> */}
        </>
    )
    }