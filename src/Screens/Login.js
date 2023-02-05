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
    <div className="align-center flex justify-center bgLogo bg-cover bg-no-repeat h-screen" style={{resize:'contain'}} >

        <form className="p-25  p-20 pt-20  h-screen" onSubmit={handleSubmit}>
          <div className="border rounded pl-20 pr-20 pt-14 mt-10 pb-28">
      <div className="pb-10 text-white font-bold text-xl">Login</div>

            <div className="pb-10 ">
        <div className="text-white">Username </div>
          <input type="text" className="rounded mt-1 pl-2 pr-2" name="uname" required />
           {renderErrorMessage("uname")}
           </div>

           <div >
          <div className="text-white">Password </div>
           <input className="ml-1 rounded mt-1 pl-2 pr-2 " type="password" name="pass" required />
           {renderErrorMessage("pass")}
         </div>
         <div className="mt-5 ">
         <input type="submit" className="rounded border" />
         </div>
         </div>
        </form>
    </div>
    
  );
}

export default Login;