// import React, { useState } from 'react'
// import './movie.css'










// const Movie = () => {

//     const [movies, setMovies] = useState([])

//     const api = () => {
//         const data = fetch('https://api.themoviedb.org/3/movie/823625-blackligh?api_key=c01481e77b1d159ef327d8980ea6296c')
//             .then(response => response.json())
//             .then(data => {

//                 const { adult, overview, opularity, original_title, homepage
//                 } = data;


//                 setMovies({
//                     adult,
//                     overview,
//                     original_title,
//                     opularity,
//                     homepage
//                 })

//             })
//             .catch(error => console.log(error));


//     }
//     const Clearapi = () => {
//         setMovies([])
//     }

//     return (

//         <div>
//             <h1>Movie</h1>
//             <button onClick={api}>Click</button>

//             <div className='hed1'>  original_title {movies.original_title}</div>
//             <div className='hed2'> overview  {movies.overview}</div>
//             <div className='hed3'>opularity   {movies.opularity}</div>
//             <div className='hed4'> adult  {movies.adult}</div>
//             <div> <a className='hed5' href={movies.homepage}>homepage</a></div>

//             <button onClick={Clearapi}>Clear</button>

//         </div>


//     );


// }

// export default Movie

