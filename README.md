# Server-Side-Basic-Scripting-using-Node-Express-MongoDB

This is the very basic server side Scripting in Node/Express/MongoDB.
In this, User.model.js file contains mongoose Schema.Another file is app.js,where main programme is wriitten(Inserting and Displaying Schema Objects.).For this,We have to intsall express,body-parser and mongojs using npm.This files are in module folder.JSOn data file is to store JSON objects.

To run this code,First You have to start your database using mongod.Here we are creating database named "placement" and in it,We are creating model "user".Here Mongoose Schema is like of Resume details.And to insert User object into database through input,We will use Advance Rest Client.Here We will use post method with content type application/x-www-form-urlencoded.There are many atributes to this object which are required to insert else it will display error "Field are required" or something like that.Our surver will be running on port 1234.(http://localhost:1234/) and to see all the objects->http://localhost:1234/users.And post method is also on same url->http://localhost:1234/users.
