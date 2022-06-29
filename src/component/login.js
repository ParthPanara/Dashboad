import '../images/icons/favicon.ico';
import a from '../images/img-01.png'
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/select2/select2.min.css';
import '../css/util.css';
import '../css/main.css';
import { useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Switch, Route, Redirect, useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import { Offline, Online } from "react-detect-offline";



export default function Login() {
  const [email, setEmail] = useState(null);
  const [password1, setPassword] = useState(null);
  const [data, setData] = useState([]);
  let loggedIn = false;
  const navigate = useNavigate();
  function Validate(){
    if (email !== null) {


      fetch(`https://internshippro.000webhostapp.com/login.php`)
        .then(res => res.json())
        .then(json => setData(json.smoke));
      data.map(
        (newdata) => {
          if (newdata.email_id === email && newdata.password === password1) {

            loggedIn = true;
            if (loggedIn) {
              ReactSession.setStoreType("localStorage");
              ReactSession.set("username", email);
              ReactSession.set("login_id", newdata.Login_id);

              return navigate("/");
            }
          }
          else {
            document.getElementById("error").innerHTML = "Email Id or Password is wrong."
          }
        }
      )
    }


  }
  function SendEmail(){
    
    if (email != null) {
      fetch(`https://internshippro.000webhostapp.com/login.php`)
      .then(res => res.json())
      .then(json => setData(json.smoke));
      
      data.map(
        (newdata) => {
          // console.log(newdata.email_id)
          if (email==newdata.email_id) {
            console.log("inside send email")
            var templateParams = {
              email: email,
              message: newdata.password
            };

            emailjs.send('service_nf38i6r', 'template_muuukwj', templateParams, 'fUpgNRuy2HvoETyBz')
              .then((result) => {
                


                document.getElementById("msg").innerHTML = "Password sent to your email id."
              }, (error) => {
                console.log(error.text);
                document.getElementById("msg").innerHTML = "Please try after sometime"
              });
          }
          else{
            document.getElementById("error").innerHTML = "Please enter valid email id."
          }
        }
      )

    }
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          
          <form className="login100-form validate-form" >
            <span className="login100-form-title">
              Member Login
            </span>
            <p id='error' className="login100-form-title" style={{ fontSize: '150%', color: "red" }} ></p>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={(a) => setEmail(a.target.value)} />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true" />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="password" placeholder="Password" value={password1} onChange={(a) => setPassword(a.target.value)} />
              <span className="focus-input100" />
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true" />
              </span>
            </div>
            <div className="container-login100-form-btn">

              <button type="submit" form="form1" value="Submit" className='login100-form-btn' onClick={Validate}>Login</button>
            </div>
            <p id='msg' className="login100-form-title" style={{ fontSize: '150%', color: "red" }} ></p>
            <div className="text-center p-t-12">
              
              <a className="txt2" href="#" onClick={SendEmail} >
                Forgot Username / Password?
              </a>
            </div>
            <div className="text-center " style={{marginTop:'10px'}}>
              <a className="txt2" href="signup">
                Create your Account
                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}