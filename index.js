const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = process.env.PORT || 3000;

// Configura il middleware per interpretare JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connessione al database SQLite
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Errore nella connessione al database:', err.message);
  } else {
    console.log('Connesso al database SQLite.');
  }
});

// Crea la tabella dei punteggi
db.run(`CREATE TABLE IF NOT EXISTS punteggi (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  squadra1 TEXT,
  punteggio1 INTEGER,
  squadra2 TEXT,
  punteggio2 INTEGER
)`);
