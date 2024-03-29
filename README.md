# S Blog Website

## To run the project

To effectively run this project you should clone it and then run `npm run install-all`.

Then before running the next command you will need to create a .env file in the my-blog-website directory that contains the following:

``` 
SEBENZA_DB_HOST=
SEBENZA_DB_NAME=
SEBENZA_ADMIN_USERNAME=
SEBENZA_ADMIN_PASSWORD=
SEBENZA_APP_USERNAME=
SEBENZA_APP_PASSWORD=
SEBENZA_DB_TYPE=
SEBENZA_DB_PORT=
```

SEBENZA_DB_HOST = the hostname of your mysql instance likely `localhost`

SEBENZA_DB_NAME = the name of the database please use `sebenza_blog` as it's the name used in the db scripts

SEBENZA_ADMIN_USERNAME = the username of the admin user for your mysql instance

SEBENZA_ADMIN_PASSWORD = the password of the admin user for your mysql instance

SEBENZA_APP_USERNAME = the username of the nestjs user that will be interacting with your mysql instance, please use `sebenza_app` as it's the name used in the db scripts

SEBENZA_APP_PASSWORD = the password of the nestjs user that will be interacting with your mysql instance, please use `appPassword` as it's the name used in the db scripts

SEBENZA_DB_TYPE = should be `mysql`

SEBENZA_DB_PORT = the port of your mysql instance

Once the .env file is setup in the root of the my-blog-website-nest folder, you can run the db setup scripts.

```
$ npm run setup-db

// if it's your first time running setup

or

$ npm run clean-setup-db 

// if you've already run setup db before, clean-setup-db deletes all tables and starts again, refreshing all the data.
```

The scripts create the tables for blog posts, users, blog categories and blog tags.

## frontend

This is a blog website that has a frontend for navigating blog posts and a cms dashboard for viewing blog posts, users, blog categories and blog tags.

You can then navigate to the [homepage](http://localhost:3000) at `http://localhost:3000` to view the blog website frontend. There you will see all blog posts that are currently in the database. You can click continue reading link to view the full blog post. On the blog post page you will find that the title, content, about, external links and recent blog posts are all provided by the nestjs backend. That's all for the frontend.

As for the [dashboard](http://localhost:3000/dashboard/blog) which can be accessed at `http://localhost:3000/dashboard/blog` you can view all four pages from the side nav, which are the blog posts, user, blog categories and blog tags pages. Each page has a table that shows all the records kept in the DB. Delete works on all the pages, except for records blog categories attached to blog posts. View only works on the blog posts page, in fact, the full CRUD works on the blog posts page, you can view/update/delete and create blog posts. View will take you to the page where you can view all details and update or delete. The plus sign in the corner of the table will allow you to create a new blog post. Blogs updated or created can be viewed from the frontend later at the [homepage](http://localhost:3000) at `http://localhost:3000`.

## backend

This is the NestJS/Fastify backend server for the blog website.

It runs all CRUD operations for blog posts, users, blog categories and blog tags. The frontend only makes full CRUD use of blog posts but the server can perform CRUD operations for all the elements. 

The server runs on `http://localhost:8080`.

What I missed:
- Hide user passwords when making get calls for user details or info
- Allow view, create and update users, blog categories and blog tags in the frontend
- Make the dashboard work with JWT for user login/logout
- Allow blog site user login/logout
- Use WYSIWYG editor for blog content
- Get dark mode selector working
- Popup are you sure you want to delete modal when deleting content
- Add loading indicators throughout the website whenever using server
- Get the Next.js segment with next/router to work, I had to use a hack for time to get blog id
- Add Dashboard page that shows number of items in all times
- Add cannot delete modal describing to users why certain categories cannot be deleted as it is linked to a blog post , or that deleting a user will delete their associated blog posts
- Display blog post image in recent blog posts section based on blog post image url
- Show blog post tags in blog post
- Allow user to add blog post tags in create and allow them to see it in view
