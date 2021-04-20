import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  useEffect(getUsers, []);

  function handleClick(clickedId) {
    let filteredUsers = users.filter( user => user.id !== clickedId)
    setUsers(filteredUsers)
  }



  return (
    <div className='App'>
      {users.map((user) => (
        <UserCard key={user.id} {...user} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default App;

// From the data returned we want to find a way in which we can delete a user from the array stored in state.
// Think about where the event should be triggered (e.g on the listItem.js or the app.js)
// Bear in mind that this deletion will work between page refreshes only.
// If we refresh the page it will retrieve the users again and reset the users list back to the default array returned from the API.
