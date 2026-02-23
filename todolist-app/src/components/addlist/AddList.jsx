import { useState, useEffect } from "react";

function AddList({addTodoList}){
    let [error, setError] = useState("");
    const [inputvalue, setinputvalue] = useState("");

  // input value check 
  let handleTodo = (e) => {
        const { value } = e.target;
        setinputvalue(value);
        if (value.length <= 6) {
            setError("Todo should be greater than 6");
        } else {
            setError("");
        }
    };

//  Add button action
 const addTodo = async () => {
        if (inputvalue.trim().length === 0) {
            setError("Please enter the todo.");
        }
        else if (inputvalue.trim().length > 6) {
          await addTodoList(inputvalue); // add todo to backend
            setinputvalue(""); // clear input
            setError(""); //clear error
        }
    };
    return(
        <div className="mb-3">
            <div className="input-group">
                <input value={inputvalue}   onChange={handleTodo}  type="text" className="form-control" placeholder="Add New Todo " />
                <button onClick={addTodo}  className="btn btn-primary" type="button" id="add-todo-list">ADD</button>
            </div>  
            { error && <p className="text-danger">{error}</p> } 
        </div>   
    )
}

export default AddList;