// backend/knexfile.js
const path = require('path'); // Usamos require aquí porque knex CLI lo prefiere

// Asegúrate que esta ruta sea correcta
const dbPath = path.resolve(__dirname, 'database', 'tuportal_db.sqlite3');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: dbPath
    },
    useNullAsDefault: true, // Necesario para SQLite
    migrations: {
      directory: path.join(__dirname, 'database', 'migrations') // Carpeta donde guardaremos las migraciones
    },
    seeds: {
      directory: path.join(__dirname, 'database', 'seeds') // Carpeta para datos iniciales (opcional)
    }
  },
  // Puedes añadir configuraciones para production, staging, etc. si lo necesitas
};