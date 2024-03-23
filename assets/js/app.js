const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nameGit = document.querySelector('.name'); // falta el selector (.) para seleccionar la clase name, cambiar el nombre de la variable para que sea mas entendible
const blogGit = document.querySelector('.blog'); //  blog es una clase, cambiar el nombre de la variable para que sea mas entendible
const locationGit = document.querySelector('.location'); // cambiar el nombre de la variable para que sea mas entendible

async function displayUser(username) { // falta el async para que la función sea asincrona
  nameGit.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  console.log(data);
  nameGit.textContent = '${data.name}';
  blogGit.textContent = '${data.blog}';
  locationGit.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameGit.textContent = `Algo salió mal: ${err}` 
}

displayUser('stolinski').catch(handleError);