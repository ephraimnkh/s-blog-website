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

async function populateBlogTable() {
  const tableName = 'blog';

  try {
    const connection = await mysql.createConnection(connectionConfig);

    const sqlStatements = [
      `INSERT INTO ${tableName} (title, author_id, author, content, about, category, tags, created_on)
      VALUES ('A Day in the Life of a Web Developer', (SELECT id FROM user WHERE email = 'jane.brown@example.com'), 'Jane Brown', 
              'This blog post explores the daily routine of a web developer. A typical day might involve tasks like working on client projects, writing code, debugging issues, collaborating with designers and other developers, staying up-to-date on the latest web technologies, and learning new skills. Web development is a challenging but rewarding field that requires a combination of technical expertise, creativity, and problem-solving abilities.', 
              'Jane Brown your usual dev girl.', 1, '1, 2', '2024-03-24');`,
      `INSERT INTO ${tableName} (title, author_id, author, content, about, category, tags, created_on)
      VALUES ('The Power of Open Source', (SELECT id FROM user WHERE email = 'jane.brown@example.com'), 'Jane Brown', 
              'Open source software is changing the world. It allows developers to collaborate on creating freely available software that benefits everyone. Open source projects are often innovative, well-maintained, and secure. By using and contributing to open source software, you can be a part of a thriving community and help shape the future of technology.', 
              'Jane Brown your usual dev girl.', 3, '3, 4', '2024-03-24');`,
      `INSERT INTO ${tableName} (title, author_id, author, content, about, category, tags, created_on)
      VALUES ('Building a Simple Blog with React', (SELECT id FROM user WHERE email = 'david.williams@example.com'), 'David Williams', 
              'Learn how to create a blog using React.js, a popular JavaScript library for building user interfaces. React allows you to create dynamic and interactive web applications with ease. This blog post will guide you through the process of setting up a React project, creating reusable components, managing state, and handling user interactions. By the end of this post, you will have a basic understanding of how to build a blog with React.', 
              'David avid JS supporter.', 1, '5, 6', '2024-03-24');`,
      `INSERT INTO ${tableName} (title, author_id, author, content, about, category, tags, created_on)
      VALUES ('Essential Design Tips for Beginners', (SELECT id FROM user WHERE email = 'lisa.johnson@example.com'), 'Lisa Johnson', 
              'Master the basics of design with these helpful tips! Design plays a crucial role in making your website or application visually appealing and user-friendly. Here are some essential design tips for beginners:  1. Focus on hierarchy and user flow: Ensure your content is organized in a way that guides the user''s eye and makes it easy to find what they''re looking for. 2. Use consistent colors, fonts, and spacing: Establish a visual style guide and maintain consistency throughout your design. 3. Choose high-quality images and graphics: Images can enhance the visual appeal of your design and communicate information effectively. 4. Keep it simple and avoid clutter: Don''t overwhelm users with too much information or complex design elements.', 
              'UI/UX Expert who loves design and style.', 2, '7, 8', '2024-03-25');`,
      `INSERT INTO ${tableName} (title, author_id, author, content, about, category, tags, created_on)
      VALUES ('Securing Your Website: A Comprehensive Guide', (SELECT id FROM user WHERE email = 'david.williams@example.com'), 'David Williams', 
              'Protect your website from vulnerabilities with a comprehensive security strategy. Website security is critical in today''s digital world. Hackers are constantly looking for ways to exploit weaknesses in websites and steal data. Here are some steps you can take to improve your website security: 1. Keep your software up-to-date: Regularly update your website software, including the content management system (CMS), plugins, and themes. 2. Use strong passwords: Implement strong passwords for all user accounts associated with your website. 3. Enable two-factor authentication: Add an extra layer of security with two-factor authentication, which requires a second verification step in addition to the password. 4. Secure your connection',
              'David avid JS supporter.', 4, '9', '2024-03-25');`,
    ];

    sqlStatements.forEach(async (sql) => {
      await connection.execute(sql);
    });

    console.log(`Table ${tableName} populated successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error populating table ${tableName}:`, error);
  }
}

populateBlogTable();
