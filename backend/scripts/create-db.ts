import * as mysql from 'mysql2/promise';
// Loads .env file contents into process.env by default.
import 'dotenv/config';

const host = process.env.SEBENZA_DB_HOST;
const user = process.env.SEBENZA_ADMIN_USERNAME;
const password = process.env.SEBENZA_ADMIN_PASSWORD;
const database = process.env.SEBENZA_DB_NAME;

// Replace with your actual connection details
const connectionConfig = {
  host,
  user,
  password,
  database,
};

async function createAppDb() {
  try {
    const connection = await mysql.createConnection(connectionConfig);

    // Create user
    const sql = `
        CREATE DATABASE IF NOT EXISTS ${database}
    `;

    await connection.execute(sql);

    console.log(`Database ${database} created successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error creating database ${database}:`, error);
  }
}

createAppDb();
