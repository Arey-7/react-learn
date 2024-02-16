import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form action="">
      <input
        // onChange={function demo(e) {
        //   return handleChange(e);
        // }}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        type="text"
        value={name.firstName}
        placeholder="First Name"
        id="firstName"
      />
      <input
        // onChange={function demo(e) {
        //   return handleChange(e);
        // }}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        type="text"
        value={name.lastName}
        placeholder="Last Name"
        id="lastName"
      />
      <h1>
        So your name is {name.firstName} {name.lastName}?
      </h1>
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  );
}
