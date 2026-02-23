import  './ViewList.css';
import TodoItem from "./TodoItem";



function ViewList({todoListData,statusChanged,deleteTodoItem,successmessage,errormessage}){

     return(
        <div>
            {/* Show Error Message if any */}
            { errormessage && (
                <div className="alert alert-danger">
                    {errormessage}
                </div>
            )}

            {/* Show Success Message if any */}
             { successmessage && (
                <div className="alert alert-success">
                    {successmessage}
                </div>
            )}
          <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Status</th>
                    <th className="w-75" scope="col">Title</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
             
                <tbody>
                     {/* Show Message When No Data Available */}
                     { todoListData.length === 0 && (
                            <tr>
                                <td colSpan="3" className="text-center">
                                    No Data Available
                                </td>
                            </tr>
                    )}

                    {/* Loop & Display Each Todo Item */}
                    {todoListData.map((todo)=>( 
                          <TodoItem
                                key={todo.id} // Unique key
                                todo={todo} // Pass data to child component
                                statusChanged={statusChanged} // Function to update status
                                deleteTodoItem={deleteTodoItem} // Function to delete
                            />
                        
                    ))}
                </tbody>
                </table>
        </div>
    )
}

export default ViewList