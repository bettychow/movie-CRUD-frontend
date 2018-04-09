

  const deleteMovie = (event) => {

    console.log('bbbbbbb', event)

    const id = event.target.parentNode.firstChild.id
console.log(id)
    axios.delete(`${baseURL}/movies/${id}`)
      .then(result => {
        console.log('?????', result)
        location.reload();
      })
  }




