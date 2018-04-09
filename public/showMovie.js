document.addEventListener('DOMContentLoaded', () => {
  console.log("show movie page")
  showMovie();
  
})


const showMovie = (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.toString());
  const id = urlParams.toString().slice(4)

  axios.get(`${baseURL}/movies/${id}`)
     .then(result => {
       console.log('result in renderPage', result)

       const heading = document.createElement('h1')
       const poster = document.createElement('img')
       const movieTitle = document.createElement('p')
       const director = document.createElement('p')
       const year = document.createElement('p')
       const rating = document.createElement('p')

       heading.innerHTML = result.data.title
       poster.src = result.data.url
       movieTitle.innerHTML = `Title: ${result.data.title}`
       director.innerHTML = `Director: ${result.data.director}`
       year.innerHTML = `Year: ${result.data.year}`
       rating.innerHTML = `My Rating: ${result.data.rating}`
       
       const showMovieBody = document.querySelector('.show-movie')
       
       showMovieBody.appendChild(heading)
       showMovieBody.appendChild(poster)
       showMovieBody.appendChild(movieTitle)
       showMovieBody.appendChild(director)
       showMovieBody.appendChild(year)
       showMovieBody.appendChild(rating)
   })
  }
