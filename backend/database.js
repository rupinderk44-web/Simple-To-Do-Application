const sqlite = require('sqlite3');

// Conect Database
const db = new sqlite.Database('./db.sqlite', (err)=>{
    if(err){
        console.log("There is an error in database connected.");
    } else{
        console.log("Database connected.");
    }
});

//Create Table for todo
db.serialize(()=>{
    db.run(`CREATE TABLE IF NOT EXISTS todolist(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        status INTEGER DEFAULT 0,
        created_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      
        )` , err =>{
            if(err){
                    console.log("There is an error in creating tododlist table.");
                } else{
                    console.log("Todolist table created successfully.");
            }
        });
});


module.exports = db; 