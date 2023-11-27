const axios = require('axios');

const dataToSend = {
  fkidEtudiant: "IDaxel4dd5564",
};

// Intercepteur pour afficher les détails de la requête
axios.interceptors.request.use(request => {
  console.log('Requête envoyée au serveur:', request);
  return request;
}, error => {
  console.error('Erreur lors de la création de la requête:', error);
  return Promise.reject(error);
});

axios.post('http://saegeii.axel-cal.fr/api/post', JSON.stringify(dataToSend), {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => {
    console.log('Réponse du serveur:', response.data);
  })
  .catch(error => {
    console.error('Erreur lors de la requête:', error);
  });
