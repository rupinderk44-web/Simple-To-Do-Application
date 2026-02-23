import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ViewList from './components/list/ViewList';
import AddList  from './components/addlist/AddList';
import { useState, useEffect } from 'react';


function App() {
    // setup states for todo
    const [viewtodolist, setviewtodolist] = useState([]);
    const [addtodoValue, setAddtodoValue] = useState("");
    const [successmessage, setsuccessMessage] = useState("");
    const [errormessage, seterrorMessage] = useState("");

    // Add Todo 
    const addTodoList = async(title) =>{
        // convert data to json format
        const tododata = JSON.stringify({title: title});
        try{
            //post the data with fecth
            const response = await fetch("/api/todos",{
                method: 'POST',
                body:tododata,
                 headers:{
                'Content-type': 'application/json'
                }
            });
            if(response.ok){
                const newItem = await response.json();

                // update state by adding new data
                setviewtodolist(prev => [...prev, newItem]);

                // Send success message by state
                setsuccessMessage("Todo added successfully!");
                // Hide message 
                setTimeout(() => {
                    setsuccessMessage("");
                }, 1500);

                return newItem;

            } else {
                //Error handle
                seterrorMessage("Failed to add todo");
                setTimeout(() => {
                    seterrorMessage("");
                }, 2000);
            }
        }
        catch(error){
            console.log(error);
        }
    }

 //get todo data
    const todoListData = async() =>{
        try{
            const response = await fetch("/api/todos");
            if(response.ok){
                const jsonResponse = await response.json();

            // Check if response data is an array (solved map data undefined error when empty.)
            setviewtodolist(Array.isArray(jsonResponse) ? jsonResponse : []);
            }
        }
        catch(error){
            console.log(error);
        }
    };

// Mark as completed
    const statusChanged = async (tododata)=>{
        // If status is 0 changed to 1 and vice-versa
        const todostatus = JSON.stringify({status: tododata.status ? 0 : 1});

        try{
               const response = await fetch(`/api/todos/${tododata.id}`,{
                method: 'PUT',
                body:todostatus,
                 headers:{
                'Content-type': 'application/json'
                }
            });
            if(response.ok){
                const jsonResponse = await response.json();

                // Update todo status, solved error data update immediately.
                setviewtodolist(prev =>
                    prev.map(todo =>
                        todo.id === tododata.id
                            ? { ...todo, status: !tododata.status }
                            : todo
                    )
                );

                // Send success message by state
                setsuccessMessage("Todo status changed successfully.");
                setTimeout(() => {
                    setsuccessMessage("");
                }, 1500);
            }else{
                // Error message
                seterrorMessage("There is an error in changing the Todo status.");
                setTimeout(() => {
                    seterrorMessage("");
                }, 3000);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

// Delete Todo
 const deleteTodoItem = async (id) =>{
        try{
           const response = await fetch(`/api/todos/${id}`, {
                method: 'DELETE'
            });
            if (response.ok){
                // Remove todo item from list by filtering out matching id
                setviewtodolist(prev =>
                    prev.filter(todo => todo.id !== id)
                );
                 // Send success message by state
                setsuccessMessage("Todo Deleted successfully.");
                setTimeout(() => {
                    setsuccessMessage("");
                }, 1500);
            }else{
                // Error message
                seterrorMessage("There is an error in deleting the Todo.");
                setTimeout(() => {
                    seterrorMessage("");
                }, 3000);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    // Fetch todo list data when component loads or when changed
     useEffect(() => {todoListData(); }, [todoListData]);


    return (
    <div className="container">
      <div className="title m-5 text-center">
          <h1>My To Do list</h1>
      </div>

      {/* Component to Add Todo */}
      <AddList addTodoList={addTodoList}></AddList>

       {/* Component to display Todo */}
      <ViewList 
        todoListData = {viewtodolist}
        statusChanged = {statusChanged}
        deleteTodoItem = {deleteTodoItem}
        successmessage = {successmessage}
        errormessage = {errormessage}
       ></ViewList>
    </div>
  );
}

export default App;
