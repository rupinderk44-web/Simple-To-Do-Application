const express=  require ('express');
const db = require("./database");
const cors = require("cors");


const app = express();
const PORT =  process.env.PORT ||4000;

// Setup json format and cors
app.use(express.json());
app.use(cors());

// load static files
app.use(express.static('public'));


// add todolist data
app.post("/api/todos" ,  (req, res) =>{
    try{
        const {title} = req.body;
        db.run('INSERT INTO todolist (title) VALUES ($title)',{$title: title,}, 
        // error handler
        function(error)
            {
                if(error){
                   return  res.status(500).json({ error: error.message});;
                }
                res.status(200).json({message: "New todo added."});   
            }

        );
    }
     catch (error) {
        res.status(500).json({ error: error.message });

     }
})


// Read todolist data
app.get('/api/todos',  (req, res) =>{
    try{
        db.all('SELECT * FROM todolist ORDER BY created_date DESC',
        (error, rows) =>{
            if(error){
                return res.status(500).json({error:error.message});
            }
            // if no record found
            if (!rows || rows.length === 0) {
                return res.status(200).json({error:"No Data Found"});
            }
             res.json(rows);
        }
    )
    }  
    catch(error){
          res.status(500).json({ error: error.message });
    }
})


// Delete the todo list
app.delete('/api/todos/:id',  (req, res) =>{
    try{ 
        const { id } = req.params; 
        db.run('DELETE FROM todolist WHERE id = $id', 
            { 
                $id: id, 
            }, 
        function (error) {
            if(error){
                return res.status(500).json({error:error.message});
            } 
            // if no row effected in db means Data not found
            if(this.changes === 0){
                return res.status(404).json({message: "Todo not found"});
            }   
            res.status(200).json({message: "Todo deleted successfully."});         
        }) 
        }catch(error)
        { 
            res.status(500).json({ error: error.message });
         } 
     })

// mark as completed 
app.put("/api/todos/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try{
        db.run("UPDATE todolist SET status =$status WHERE id=$id",
                {
                    $status: status,
                    $id: id
                },
                function (error) {
                    if(error){
                        return res.status(500).json({error:error.message});
                    } 

                    if(this.changes === 0){
                        return res.status(404).json({message: "Todo not found"});
                    }  
                    res.json({ message: "Todo status updated successfully." });
                }
            );

    } catch(error){
          res.status(500).json({ error: error.message });
    }

   
});


//start server
app.listen(PORT,()=>{
    console.log(`Server start ${PORT}`);
})
