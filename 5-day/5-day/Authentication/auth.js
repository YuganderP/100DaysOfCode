// learning authentication: 
// Building Authenticated websites:

// Hashing:

// when the request hits the back end (with username and password )
// passwords are hashed before they are stored in the database 
// password + salt => hashed entry
// hasing is one directional.
//

// Encryption:

// data ____key_____> encrypted data (2 way with key)


// JWT (Json web tokens ): only works for json inputs 

// json -> very long string (different from hasing and encryption)
// The string formed is called token.
// if we have the token we can get the input unlike hashing and encryption.

// json data -> jwt.encode() 
//  on the server they verify using jwt.verify() 


// Local storage:
// The token is stored in the brower's local storage.
// localStorage.set()  : to store the password
// localStorage.get(): to get the password.



// JWT notes:
// json web tokens are used for authorization but not for Authentication
// it works using session json web token
// Traditional proces 
// ___________________________________
// user id and password -> back end 
// backend ------session id ---> client 
// client ----session id ---> server
// sever ---- response -----> client
// 
// JWT process 

// user id and password ---> backend 
// At the backend jwt is created using secret password 
// and jwt token is sent to the client 
// the jwt token is stored using session / cookies storage 
// and when ever the client needs a response the jwt is sent and is decoded and verified 
// and the response is sent to the client 







// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
