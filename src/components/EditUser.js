import { useState } from "react";

const EditUser = ({ name, email, phone, id, handleEdited, setIsEditMode }) => {
  const [edited, setEdited] = useState({
    name,
    email,
    phone,
  });

  const handleChange = (event) => {
    setEdited((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });

    //this does the same thing as above
    // if (event.target.name === "name") {
    //   setEdited({ ...edited, name: event.target.value });
    // } else if (event.target.name === "email") {
    //   setEdited({ ...edited, email: event.target.value });
    // } else {
    //   setEdited({ ...edited, phone: event.target.value });
    // }
  };

  const handleClick = () => {
    handleEdited({ ...edited, id });
    setIsEditMode(false);
  };

  return (
    <form>
      <label htmlFor='formName'>Name:</label>
      <input
        name='name'
        type='text'
        id='formName'
        value={edited.name}
        onChange={handleChange}
      />
      <label htmlFor='formEmail'>Email:</label>
      <input
        name='email'
        type='text'
        id='formEmail'
        value={edited.email}
        onChange={handleChange}
      />
      <label htmlFor='formPhone'>Phone:</label>
      <input
        name='phone'
        type='text'
        id='formPhone'
        value={edited.phone}
        onChange={handleChange}
      />
      <input onClick={handleClick} type='button' value='Save' />
    </form>
  );
};

export default EditUser;
