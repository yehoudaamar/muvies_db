import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import './pop.css'
import Popup from './Popup'

function Movie() {


    const [movies, setMovies] = useState([])
    const [open, setOpen] = useState(false);
    const [my_Key , setMy_Key] = useState();




    const api = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c01481e77b1d159ef327d8980ea6296c')
        const data = await response.json()


        // console.log(data.results)

        setMovies(data.results)



    }
    const Clear = () => {
        setMovies([])
    }


    const Popup2 = () => {

           setOpen(true)
           
           setMy_Key(my_Key)
           console.log (my_Key)




    }




    return (

        <div className='movie'>
            <div className='movie-header'>
                <h1 style={{
                    color: 'white',
                    fontSize: '50px',
                    textAlign: 'center',
                }}>Popular Movies</h1>
            </div>
            <button className='mini-buuton' onClick={api}>my movie</button>
            <button className='mini-buuton2' onClick={Clear}>clear</button>


            <div className='movie-list'>

                {movies.map(movie => (
                    <buuton

                        onClick={Popup2}
                        className='movie-item' >

                        <img width={200} height={200} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                        <h2  onChange={my_Key}> {movie.original_title}</h2>
                        <h3 >{movie.title}</h3>
                        <h3>  {movie.overview.substring(0, 30) + '...'}</h3>

                    </buuton>))}


                <Popup trigger={open} setTrigger={setOpen} >
                    {movies.map(movie => (
                        <div className='popup-cont'>
                            <h1 className='popup-titet'>{movie.original_title}</h1>
                            <img className='popup-img' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />


                        </div>))}
                </Popup>


            </div>




            {/* <Modal/> */}









        </div>







    )
}

export default Movie