# Installing
1. Clone the project and cd into the folder
   `git clone https://github.com/fac19/week6-Tiger-Kingdom.git`
   `cd week6-Tiger-Kingdom`
3. Run `npm i` to install package dependencies
4. Create a local "production" database called whatever you like
5. Create a test database called `localtest` with the same owner/user
   Alternatively edit "test" in package.json to use a db of your choosing
5. Create a .env file in the project root and set the following fields
   - PGDATABASE=your_local_production_database_name
   - PGUSER=your_db_user
   - PGPASSWORD=your_db_password
6. Run `npm run setupdb` to initialise or reset your local production db
   Alternatively import 'src/db/schema.sql' using your preferred db admin tool

# Running the tests

Run `npm run test` to run tests

# Running the server

1. Run `npm run startdev` to start
2. Browse to http://localhost:3000

# Or visit us live on the web

https://tiger-kingdom.herokuapp.com/

# The bugs are no doubt manifold

You can report them here: https://github.com/fac19/week6-Tiger-Kingdom/issues

Thanks for reading! :smiley: