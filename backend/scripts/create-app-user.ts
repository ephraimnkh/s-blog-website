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

async function createAppUser() {
  const appUserName = process.env.SEBENZA_APP_USERNAME;
  const appPassword = process.env.SEBENZA_APP_PASSWORD;
  const user = `'${appUserName}'@'${host}'`;
  try {
    const connection = await mysql.createConnection(connectionConfig);

    // Create user
    const createUserSQL = `
        CREATE USER IF NOT EXISTS ${user}
        IDENTIFIED BY '${appPassword}'
    `;

    await connection.execute(createUserSQL);

    const giveUserSqlRights = `
        GRANT CREATE, ALTER, DELETE, INSERT, SELECT, UPDATE, INDEX
        ON ${database}.*
        TO ${user}
    `;

    await connection.execute(giveUserSqlRights);

    console.log(`App user ${appUserName} created successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error creating app user ${appUserName}:`, error);
  }
}

createAppUser();
