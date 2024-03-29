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

async function dropUserTable() {
  const tableName = 'user';
  try {
    const connection = await mysql.createConnection(connectionConfig);

    // Create user
    const sql = `
        DROP TABLE IF EXISTS ${tableName};
    `;

    await connection.execute(sql);

    console.log(`Database table ${tableName} dropped successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error dropping database table ${tableName}:`, error);
  }
}

async function dropBlogCategoryTable() {
  const tableName = 'blog_category';
  try {
    const connection = await mysql.createConnection(connectionConfig);

    // Create user
    const sql = `
        DROP TABLE IF EXISTS ${tableName};
    `;

    await connection.execute(sql);

    console.log(`Database table ${tableName} dropped successfully!`);

    await connection.end();
    dropUserTable();
  } catch (error) {
    console.error(`Error dropping database table ${tableName}:`, error);
  }
}

async function dropBlogTagTable() {
  const tableName = 'blog_tag';
  try {
    const connection = await mysql.createConnection(connectionConfig);

    // Create user
    const sql = `
        DROP TABLE IF EXISTS ${tableName};
    `;

    await connection.execute(sql);

    console.log(`Database table ${tableName} dropped successfully!`);

    await connection.end();
    dropBlogCategoryTable();
  } catch (error) {
    console.error(`Error dropping database table ${tableName}:`, error);
  }
}

async function dropBlogTable() {
  const tableName = 'blog';
  try {
    const connection = await mysql.createConnection(connectionConfig);

    // Create user
    const sql = `
        DROP TABLE IF EXISTS ${tableName};
    `;

    await connection.execute(sql);

    console.log(`Database table ${tableName} dropped successfully!`);

    await connection.end();
    dropBlogTagTable();
  } catch (error) {
    console.error(`Error dropping database table ${tableName}:`, error);
  }
}

dropBlogTable();
