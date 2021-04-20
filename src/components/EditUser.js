const EditUser = ({ name, email, phone }) => {
  return (
    <form>
      <label htmlFor='formName'>Name:</label>
      <input type='text' id='formName' value={name} />
      <label htmlFor='formEmail'>Email:</label>
      <input type='text' id='formEmail' value={email} />
      <label htmlFor='formPhone'>Phone:</label>
      <input type='text' id='formPhone' value={phone} />
    </form>
  );
};

export default EditUser;
