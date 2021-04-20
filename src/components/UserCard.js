import { useState } from "react";
import EditUser from "./EditUser";

const UserCard = ({ name, email, phone, handleClick, id }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className='card'>
      {!isEditMode ? (
        <>
          <p>user name: {name}</p>
          <p>email: {email}</p>
          <p>phone: {phone}</p>
        </>
      ) : (
        <EditUser name={name} email={email} phone={phone} />
      )}

      <button onClick={() => handleClick(id)}>Delete user</button>
      <button onClick={() => setIsEditMode(!isEditMode)}>Edit user</button>
    </div>
  );
};

export default UserCard;
