# Structure of backend application
a. create folders with their relevant files.e.g. controllers, models build and utils folders with their relevant files.
b. The utils/logger.js files handles console.logs which has two functions, info for printing normal log messages, and error for all error messages.
c. The contents of the index.js file is used for starting the application and imports the actual application from the app.js file 
d. The handling of environment variables is extracted into a separate utils/config.js file

# Exports
a. Use of module.exports = {name} to export files

# Testing node applications
a. By using jest library
b. Install cross-env using the command  'npm install cross-env' to enable cross-platform compatibility 
c. supertest package helps to write our tests for testing the API, install it using 'npm install --save-dev supertest'

# Creating blog
a. Install bcrypt using 'npm install bcrypt'. This package is for generating the password hashes

# Token authentication
a. The jsonwebtoken library allows us to generate JSON web tokens. Install it using 'npm install jsonwebtoken'
b. The token is created with the method jwt.sign. The token contains the username and the user id in a digitally signed form.