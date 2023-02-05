import React, { useState } from "react";
import logo from '../Screens/assets/bg.jpg'
import { useHistory } from "react-router-dom";

const Login=()=> {
    const history = useHistory();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "demo@coralmango.com",
      password: "demo123"
    }
  ];


  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
      } else {
        setIsSubmitted(true);
        history.push('/userlist')
      }
    } else {
      // Username not found
      alert(" Invalid Credentials!");

    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
    return  (
    <div className="align-center flex justify-center" >
        <form className="p-25 border mt-20 p-20 pt-20 pb-40 " onSubmit={handleSubmit}>
            <div className="pb-10">
        <label>Username </label>
          <input type="text" name="uname" required />
           {renderErrorMessage("uname")}
           </div>

           <div >
          <label>Password </label>
           <input type="password" name="pass" required />
           {renderErrorMessage("pass")}
         </div>
         <div className="mt-5">
         <input type="submit"  />
         </div>
        </form>
    </div>
    
  );
}

export default Login;