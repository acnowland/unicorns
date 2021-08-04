import { useState } from "react";

const Form = ({ addUnicorn }) => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [colour, setColour] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const newUnicorn = { name, age, colour };
    addUnicorn(newUnicorn);
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Unicorn Name</label>
      <input
        type="text"
        value={name}
        id="name"
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="age">Unicorn Age</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <label htmlFor="colour">Unicorn Eye Colour</label>
      <input
        type="text"
        id="colour"
        value={colour}
        onChange={(event) => setColour(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default Form;
