
const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.toString());
const id = urlParams.toString().slice(4)
const heading = document.querySelector('#movie-header')
const poster = document.querySelector('#movie-poster')
const movieInput = document.querySelector('#movie-title')
const directorInput = document.querySelector('#director')
const yearInput = document.querySelector('#year')
const ratingInput = document.querySelector('#rating')
const movieURLInput = document.querySelector('#movie-url')

document.addEventListener('DOMContentLoaded', () => {
  displayMovieForm()
})

const displayMovieForm = () => {

  axios.get(`${baseURL}/movies/${id}`)
     .then(result => {
       console.log('result in renderPage', result)

       heading.innerHTML = result.data.title
       poster.src = result.data.url
       movieInput.value = result.data.title
       directorInput.value = result.data.director
       yearInput.value = result.data.year
       ratingInput.value = result.data.rating
       movieURLInput.value = result.data.url
       
  const submitButton = document.querySelector('#submit-button')
  submitButton.addEventListener('click', editMovieInfo)

})

}

const editMovieInfo = (event) => {
  console.log('event', event)
  const title = movieInput.value
  const director = directorInput.value
  const year = yearInput.value
  const rating = ratingInput.value
  const url = movieURLInput.value

  axios.put(`${baseURL}/movies/${id}`, {title, director, year, rating, url})
    .then(result => {
      console.log('vvvvvvvv', result)
    })
  
}