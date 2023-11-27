const axios = require('axios');

// Intercepteur pour afficher les détails de la requête
axios.interceptors.request.use(request => {
  console.log('Requête envoyée au serveur:', request);
  return request;
}, error => {
  console.error('Erreur lors de la création de la requête:', error);
  return Promise.reject(error);
});

// Effectuer la requête POST
axios.post('http://saegeii.axel-cal.fr/api/post', {
  fkidEtudiant: "IDaxel4dd5564",
})
  .then(response => {
    console.log('Réponse du serveur:', response);
  })
  .catch(error => {
    console.error('Erreur lors de la requête:', error);
  });
