
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',           // 🔁 change to your DB **username**
  host: 'localhost',          // 🔁 change if your DB is hosted elsewhere
  database: 'placesdb',       // 🔁 change to your **database name**
  password: '1234',           // 🔁 change to your **database password**
  port: 5432                  // ✅ default port for PostgreSQL
});

module.exports = pool;
