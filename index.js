const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const mysql = require("mysql");
const dbConfig = require('./dbConfig');
const port = 3129;

const pool = mysql.createPool(dbConfig);

// Middleware to set headers for CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Enable CORS
app.use(cors());

// Parse JSON bodies for this app.
app.use(express.json());

// Middleware to serve static files recursively
function serveStaticRecursive(rootDir) {
  return function (req, res, next) {
    const filePath = path.join(rootDir, req.path);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      next();
    }
  };
}

// Serve static files
app.use(serveStaticRecursive(path.join(__dirname, "assets")));

// Serve index.html for the root path
app.get("/", (req, res) => {
  res.header("Content-type", "text/html");
  res.sendFile(path.join(__dirname, "/assets/index.html"));
  console.log("test", "requete", req);
});

// API endpoint to get data from the 'Passage' table
app.get("/api/get", (req, res) => {
  pool.query("SELECT * FROM `Passage`", function (error, results, fields) {
    if (error) {
      console.error("Error in query: ", error);
      res.status(500).send(" Internal Server Error pasque " + error);
      return;
    }
    console.log("The solution is: ", results);
    res.send(results);
  });
});

// API endpoint to get data from the 'Information' table
app.get("/api/getinfos", (req, res) => {
  pool.query("SELECT * FROM `Information`", function (error, results, fields) {
    if (error) {
      console.error("Error in query: ", error);
      res.status(500).send(" Internal Server Error pasque " + error);
      return;
    }
    console.log("The solution is: ", results);
    res.send(results);
  });
});

// API endpoint to update information in the 'Information' table
app.post("/api/changeinfos", (req, res) => {
  const changement = req.body;

  pool.query(
    "UPDATE `Information` SET `prenom` = ?, `nom` = ?, `classe` = ? WHERE `idEtudiant` = ?",
    [changement.prenom, changement.nom, changement.classe, changement.idEtudiant],
    function (error, results, fields) {
      if (error) {
        console.error("Error updating information: ", error);
        res.status(500).send("Internal Server Error pasque " + error);
        return;
      }

      console.log("Information updated successfully");
      res.send("Information updated successfully");
    }
  );
});

// API endpoint to post data to the 'Passage' and 'Information' tables
app.post("/api/post", async (req, res) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const currentTime = new Date().toLocaleTimeString();

  const passageData = req.body;

  try {
    // Insert a record into the 'Information' table
    await pool.query(
      "INSERT INTO `Information` (`idEtudiant`, `prenom`, `nom`, `classe`) VALUES (?, NULL, NULL, NULL)",
      [passageData.fkidEtudiant]
    );

    // Insert a record into the 'Passage' table
    const results = await pool.query(
      "INSERT INTO `Passage` (`idPassage`, `fkidEtudiant`, `date`, `heure`) VALUES (NULL, ?, ?, ?)",
      [passageData.fkidEtudiant, currentDate, currentTime]
    );

    var o1 = {
      "reponse": "ok",
      "idetudiant": passageData.fkidEtudiant,
      "date": currentDate,
      "heure": currentTime,
    };

    res.json(o1);
  } catch (error) {
    console.error("Error in query: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
