const express = require('express');
const app = express();
const path =require('path')
var cors = require('cors')

var mysql      = require('mysql');




var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'caax1193_geii',
  password: 'geiisae134679',
  database: 'caax1193_saenfc'
});
 

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})


app.use(cors());
app.use(express.json());

app.get('/api/get', (req, res) => {
  pool.query('SELECT * FROM `Passage`', function (error, results, fields) {
    if (error) {
      console.error('Error in query: ', error);
      res.status(500).send('Internal Server Error');
      return;
    }
    console.log('The solution is: ', results);
    res.send(results);
  });
});



// Other middleware and routes


app.get('/api/test', (req, res) => {


 
  res.send('ouai ouai ouai',)

 

})

app.get('/', (req, res) => {
  // Chemin d'accès à l'image locale

      // Transférer l'image dans la réponse HTTP
  res.sendFile(path.join(__dirname, '/assets/index.html'));
 // logger.info("js")
    

});


app.get('/index.html', (req, res) => {
  // Chemin d'accès à l'image locale

      // Transférer l'image dans la réponse HTTP
  res.sendFile(path.join(__dirname, '/assets/index.html'));
 // logger.info("js")
    

});

app.get('/plugin.js', (req, res) => {
  // Chemin d'accès à l'image locale

      // Transférer l'image dans la réponse HTTP
  res.sendFile(path.join(__dirname, '/assets/plugin.js'));
 // logger.info("js")
    

});
app.get('/chunk.js', (req, res) => {
  // Chemin d'accès à l'image locale
  
      // Transférer l'image dans la réponse HTTP
  res.sendFile(path.join(__dirname, '/assets/chunk.js'));
//  logger.info("css ")
    

});


app.get('/plugin.css', (req, res) => {
  // Chemin d'accès à l'image locale
  
      // Transférer l'image dans la réponse HTTP
  res.sendFile(path.join(__dirname, '/assets/plugin.css'));
//  logger.info("css ")
    

});


app.post('/api/post', async (req, res) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toLocaleTimeString();

  // Extraire les données JSON du corps de la requête
  const passageData = req.body;

  try {
    const results = await pool.query('INSERT INTO `Passage` (`idPassage`, `fkidEtudiant`, `date`, `heure`) VALUES (NULL, ?, ?, ?)', 
      [passageData.fkidEtudiant, currentDate, currentTime]
    );
    res.json(passageData);
  } catch (error) {
    console.error('Error in query: ', error);
    res.status(500).send('Internal Server Error');
  }
});







const server =  app.listen(3129);


