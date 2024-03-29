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

async function createBlogTable() {
  const tableName = 'blog';

  try {
    const connection = await mysql.createConnection(connectionConfig);

    const sql = `
      CREATE TABLE IF NOT EXISTS ${tableName} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author_id INT NOT NULL,
        author VARCHAR(255) NOT NULL,
        about TEXT,
        created_on DATETIME NOT NULL,
        modified_on DATETIME DEFAULT CURRENT_TIMESTAMP,
        content TEXT,
        category INT NOT NULL,
        tags VARCHAR(255) DEFAULT NULL,
        image_url VARCHAR(255) DEFAULT NULL,
        github VARCHAR(255) DEFAULT NULL,
        twitter VARCHAR(255) DEFAULT NULL,
        facebook VARCHAR(255) DEFAULT NULL,
        CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES user(id) ON DELETE CASCADE,
        CONSTRAINT fk_category FOREIGN KEY (category) REFERENCES blog_category(id) ON DELETE RESTRICT 
      );
    `;

    await connection.execute(sql);

    console.log(`Table ${tableName} created successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error creating table ${tableName}:`, error);
  }
}

createBlogTable();
