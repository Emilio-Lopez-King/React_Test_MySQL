const { database } = require("./keys");
const mysql = require("mysql2/promise"); 

const createDBConnection = async () => {
  const db = await mysql.createConnection(database);

  try {
    await db.connect();
    return db; 
  } catch (err) {
    console.error("Error de conexión a la base de datos MySQL:", err);
    throw err; 
  }
};

module.exports = {
  createDBConnection,
};