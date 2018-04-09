document.addEventListener('DOMContentLoaded', () => {

  axios.get(`${baseURL}/movies`)
    .then(result => {
      
      result.data.forEach(movie => {
        
        const row = document.createElement('tr')
        const colTitle = document.createElement('td')
        const colTitleLink = document.createElement('a')
        const colDir = document.createElement('td')
        const colYr = document.createElement('td')
        const colRating = document.createElement('td')
        const editButton = document.createElement('a')
        const delButton = document.createElement('a')
        editButton.id = 'edit-button'
        editButton.className = 'button'
        delButton.id = 'del-button'
        delButton.className = 'button'

        colTitleLink.innerHTML = movie.title
        colTitleLink.href = `showMovie.html?uid=${movie.id}`
        colDir.innerHTML = movie.director
        colYr.innerHTML = movie.year
        colRating.innerHTML = movie.rating
        editButton.innerHTML = 'Edit'
        editButton.href = `editMovie.html?uid=${movie.id}`
        delButton.innerHTML = 'Delete'
        delButton.onclick = deleteMovie

        colTitle.id = movie.id
        colTitle.className = 'title'
        colDir.className = 'dir'
        colYr.className = 'yr'
        colRating.className = 'rating'

        colTitle.appendChild(colTitleLink)
        row.appendChild(colTitle)
        row.appendChild(colDir)
        row.appendChild(colYr)
        row.appendChild(colRating)
        row.appendChild(editButton)
        row.appendChild(delButton)

        const table = document.querySelector('#table')
        table.appendChild(row)

      })
    })
})