import React,{useState} from 'react'

function Modal() {



    const [movies, setMovies] = useState([])
    const [open , setOpen] = useState(false)


    const api2 = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c01481e77b1d159ef327d8980ea6296c')
        const data = await response.json()


        console.log(data.results)

        setMovies(data.results)

    }
    setOpen(movies)
    
  

  return (
    <div>Modal
         <div className='movie-list'>

                {movies.map(movie => (
                    <buuton 
                 
                    
                    className='movie-item' >
                        <img width={200} height={200} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        <h1 > {movie.original_title}</h1>
                        <h2 >{movie.title}</h2>
                        <h3>  {movie.overview}</h3>

                    </buuton>))}


            </div>
            </div>




  )
}

export default Modal