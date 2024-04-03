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
