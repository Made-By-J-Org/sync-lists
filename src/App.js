import './App.css';
import React, { useState, useEffect } from 'react';
export default App;

function App() {

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const buttonClass = isHovered ? 'hovered' : '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit)
      console.log(formValues);
  }, [formErrors, formValues, isSubmit])


  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email))
      errors.email = "This is not a valid email format!";

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password < 5) {
      errors.passowrd = "Passowrd must be more than 5 characters";
    }
    return errors;
  };

  return (
    <React.Fragment>
      <div className='wrapper'>
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        <form onSubmit={handleSubmit} className="form">
          <h1>Your form</h1>
          <label>
            Username
            <br></br>
            <input
              type="text" name="username" placeholder='Username' value={formValues.username} onChange={handleChange} />
          </label>
          <p> {formErrors.username} </p>
          <lable>Your email<br></br>
            <input type="email" name="email" placeholder='Email' value={formValues.email} onChange={handleChange}></input>
          </lable><br></br>
          <p> {formErrors.email} </p>
          <label>Password<br></br>
            <input type="password" name="password" placeholder='Password' value={formValues.password} onChange={handleChange} />
          </label> <br></br>
          <p> {formErrors.password} </p>
          <button type="submit" className={`custom-button ${buttonClass}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            Submit
          </button>
        </form>
      </div>

      <footer>
        Created by G.
      </footer>


    </React.Fragment>
  );
};