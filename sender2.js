const axios = require('axios');

axios.post('http://saegeii.axel-cal.fr/api/changeinfos', {
  idEtudiant: "blablabla",
  prenom: "prezdzdnom",
  nom: "nomfamizdzdlle",
  classe: "tp35zdzd444",
})
  .then(response => {
    console.log('Réponse du serveur:', response.data);
  })
  .catch(error => {
    console.error('Erreur lors de la requête:', error);
  });
