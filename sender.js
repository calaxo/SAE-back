const axios = require('axios');

axios.post('http://saegeii.axel-cal.fr/api/post', {
  fkidEtudiant: "IDaxel4dd5564",
})
  .then(response => {
    console.log('Réponse du serveur:', response.data);
  })
  .catch(error => {
    console.error('Erreur lors de la requête:', error);
  });
