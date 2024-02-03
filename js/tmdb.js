const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NThkMGQ3NzFkYzMzY2E1ODliYTVlMDBhNTMyMmM4YyIsInN1YiI6IjYyYjllZDU5MjI5YWUyMTIxM2FjY2UyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GsK0NJ0Au0j6fnZonB-baDe_Bs1EcT9GePGjC-dnb2A'
    }
  };
  
  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/discover/movie?language=en-US&year=2023', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));

    const cuerpo = {
      id: 572802
    }


        
      const optionsPost = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NThkMGQ3NzFkYzMzY2E1ODliYTVlMDBhNTMyMmM4YyIsInN1YiI6IjYyYjllZDU5MjI5YWUyMTIxM2FjY2UyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GsK0NJ0Au0j6fnZonB-baDe_Bs1EcT9GePGjC-dnb2A'
        },
        body: JSON.stringify(cuerpo)
        
      };
      
      fetch('https://api.themoviedb.org/3/account/12921085/favorite', optionsPost)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));



        