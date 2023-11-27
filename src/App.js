import './App.css';
import React, { useState, useEffect } from 'react';
export default App;

function App() {
  // const emailRegex = new RegExp(
  //   '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  // const personalInfoRegex = new RegExp(
  //   '^[a-zA-Z]'
  // );


  // const [name, setName] = useState('');
  // const [surname, setSurname] = useState('');
  // const [gender, setGender] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [agrement, setAgrement] = useState('');
  // const [isNameOk, setIsNameOk] = useState(false);
  // const [isSurnameOk, setIsSurnameOk] = useState(false);
  // const validateEmail = (e) => {
  //   const valueForEmail = (e.target.value);
  //   setEmail(valueForEmail)
  //   console.log("1", emailRegex.test(valueForEmail))

  //   if (emailRegex.test(valueForEmail)) {
  //     console.log("2", email, valueForEmail,)
  //   } else {
  //     console.log("change an email")
  //   }

  // }
  // function validatePersonalInfo(personalInfo, wichOne) {
  //   if (personalInfoRegex.test(personalInfo)) {
  //     if (wichOne === "name") {
  //       setIsNameOk(true)
  //     } else {
  //       setIsSurnameOk(true)
  //     }
  //   } else {
  //     console.log("wrong ", wichOne)
  //   }

  // }


  // const handleSubmit = () => {

  //   if (name != "") {
  //     validatePersonalInfo(name, "name")
  //   } else {
  //     console.log("warrning, name is empty")
  //   };
  //   if (surname != "") {
  //     validatePersonalInfo(surname, "surname")
  //   } else {
  //     console.log("warrning, Surname is empty")
  //   };
  //   if (gender != "") {
  //     console.log(name, surname, gender, email, message, agrement)
  //   } else {
  //     console.log("warrning, gender is empty")
  //   };
  //   if (message != "") {
  //     console.log(name, surname, gender, email, message, agrement)
  //   } else {
  //     console.log("warrning, Message is empty")
  //   };
  //   if (agrement != "") {
  //     console.log(name, surname, gender, email, message, agrement)
  //   } else {
  //     console.log("warrning, agrement is empty")
  //   };
  //   if (email != "") {
  //     console.log(name, surname, gender, email, message, agrement)
  //   } else {
  //     console.log("warrning, Email is empty")
  //   };

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

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
    }
    return errors;
  };

  return (
    <React.Fragment>

      <div className='form'>
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        <form onSubmit={handleSubmit}>
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

          <button type="submit" >
            Submit
          </button>
        </form>
      </div>
      {/* </div>
      <div className='form'>
        <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} required={true} />Mr
        <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} required={true} />Mrs
        <br></br>
        <label>
          First Name
          <br></br>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label className='preview'>Surname<br></br>
          <input type="text" name="surname" onChange={(e) => setSurname(e.target.value)} required={true} />
         <br></br> <span>{isSurnameOk && "It's wrong"}</span><br></br>
        </label> <br></br>
        <lable>Your email<br></br>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required={true}></input>
        </lable><br></br>
        <label> Your Message </label><br></br>
        <textarea rows="4" cols="18" name="message" placeholder="Enter your message here" onChange={(e) => setMessage(e.target.value)}></textarea><br></br>
        <label>Are you agree to send this form</label><br></br>
        <input type='checkbox' name="agrement" value="yes" onChange={(e) => setAgrement(e.target.value)} required={true}></input> i said yes <br></br>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>

      </div> */}


      <footer>
        Created by G.
      </footer>


    </React.Fragment>
  );
};