import '../images/icons/favicon.ico';
import a from '../images/img-01.png'
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../vendor/animate/animate.css';
import '../vendor/css-hamburgers/hamburgers.min.css';
import '../vendor/select2/select2.min.css';
import '../css/util.css';
import '../css/main.css';
import { Suspense, useEffect, useState } from 'react';
import { ReactSession } from 'react-client-session';
import { BrowserRouter, Switch, Route, Redirect, useNavigate, Navigate } from 'react-router-dom'
// import SendEmail from './send';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { Offline, Online } from "react-detect-offline";




export default function Signup() {
    const [email, setEmail] = useState(null);
    const [password1, setPassword] = useState(null);
    const [otp, setOtp] = useState(null);
    const [confirmpassword1, setConfirmPassword] = useState(null);
    const [contact, setContact] = useState(null);
    const [data, setData] = useState([]);
    const [name, setName] = useState(null);
    const [empid, setEmpid] = useState(null);
    // const [data,setData] = useState([]);
    // const [loginid,setLoginid] = useState(null);
    const [address, setAddress] = useState(``);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);

    const [dob, setDob] = useState(null);
    const otp1 = Math.floor(100000 + Math.random() * 900000)
    let otp2 = 0;
    const navigate = useNavigate();
    let data1 = []




    async function SignUp() {



        if (document.getElementById("verify").innerHTML === "Verified") {
            // if (true) {

            const res = await fetch(`https://internshippro.000webhostapp.com/addCustomer.php?email=${email}&password=${password1}&phone=${contact}`)
            // .then(fetch(`https://internshippro.000webhostapp.com/login.php`))

            const response = await fetch('https://internshippro.000webhostapp.com/login.php')
            const json = await response.json();
            data1 = json.smoke;
            console.log(data1)
            Adddetail();
            // .then(response=>response.json())
            // // const json1 = await response.json()
            // .then(json=>setData1(json.smoke))
            // .then(console.log(data1))

            // console.log(res)

            // fetch(`https://internshippro.000webhostapp.com/login.php`)
            //     .then(res => res.json())
            //     .then(json => setData1(json.smoke))
            //     .then(console.log(data1))
            //     .then(Adddetail(data1))
            //     .then(console.log("inside signup", data1))
            // console.log(data1)










        }


    }

    async function Adddetail() {
        console.log("inside adddetail")
        console.log(data1)


        data1.map(

            (newdata) => {
                console.log("inside map")
                console.log(newdata.email_id)
                if (newdata.email_id === email && newdata.password === password1) {
                    console.log("inside");
                    fetch(`https://internshippro.000webhostapp.com/insertEmployee.php?name=${name}&loginId=${newdata.Login_id}&address=${address}&dob=${dob}&city=${city}&state=${state}&zip=${zip}`)
                        .then(console.log("inserted data"))
                        .then(navigate("../login"))

                }

            }
        )







    }
    function Getotp() {
        let status = "false"
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            if (password1 === confirmpassword1 && contact !== null && name !== null && address !== null && city !== null && state !== null && zip !== null && dob !== null) {
                status = "true"
            }
            else {
                document.getElementById('error').style.display = 'inline'
                document.getElementById("error").innerHTML = "Password is not matched with confirm password."
                status = 'false';
            }
        }
        else {
            document.getElementById('error').style.display = 'inline'
            document.getElementById("error").innerHTML = "email is not valid"
            status = 'false';
        }
        if (status = "true" && contact.length === 10) {
            status = 'false'
            let message = `Your OTP for verify account is ${otp1}. Please verify your account with this otp and enjoyed our services. Otp is valid for 5 minutes.`
            var templateParams = {
                email: email,
                message: message
            };


            emailjs.send('service_nf38i6r', 'template_gfnurx7', templateParams, 'fUpgNRuy2HvoETyBz')
                .then((result) => {
                    console.log(result.text);
                    otp2 = otp1;
                    ReactSession.set("otp", otp2)

                    document.getElementById('msg').style.display = 'inline'
                    document.getElementById("msg").innerHTML = "otp sent to your email id."
                }, (error) => {
                    console.log(error.text);
                    document.getElementById('msg').style.display = 'inline'
                    document.getElementById("msg").innerHTML = "Please try after sometime"
                });
            document.getElementById("verify").style.display = "inline"
            document.getElementById("otp").style.display = 'none'
        }



    }
    function Verify() {
        let status = 'false';
        if (otp == parseInt(ReactSession.get("otp"))) {
            status = 'true';
            document.getElementById("verify").innerHTML = "Verified"
        }
        else {
            document.getElementById('msg').style.display = 'inline'
            document.getElementById("msg").innerHTML = "Wrong OTP"
        }
    }

    return (
        <><Online>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">

                        <form className="login100-form validate-form" >
                            <span className="login100-form-title" style={{ marginBottom: '5px' }}>
                                Member SignUp
                            </span>
                            <p id='error' className="login100-form-title" style={{ fontSize: '150%', color: "red", display: 'none' }}></p>
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
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" placeholder="Confirm Password" value={confirmpassword1} onChange={(a) => setConfirmPassword(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true" />
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="number" placeholder="Contact Number" value={contact} onChange={(a) => setContact(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-mobile" aria-hidden="true" />
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Full Name" value={name} onChange={(a) => setName(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true" />
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="text" placeholder="Address" value={address} onChange={(a) => setAddress(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-address-card-o" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="text" placeholder="city" value={city} onChange={(a) => setCity(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-address-card-o" aria-hidden="true" />
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="text" placeholder="state" value={state} onChange={(a) => setState(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-address-card-o" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="number" placeholder="Zip code" value={zip} onChange={(a) => setZip(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-address-card-o" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" >
                                <input className="input100" type="date" placeholder="Birth Date" value={dob} onChange={(a) => setDob(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-birthday-cake" aria-hidden="true" />
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="number" placeholder="OTP" value={otp} onChange={(a) => setOtp(a.target.value)} />
                                <span className="focus-input100" />
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true" />
                                </span>
                            </div>
                            <p id='msg' className="login100-form-title" style={{ fontSize: '150%', color: "red", display: 'none' }} ></p>

                            <div className="container-login100-form-btn">

                                <button id="otp" form="form1" value="Submit" className='login100-form-btn' style={{ marginBottom: '10px' }} onClick={Getotp}>Get OTP</button>

                                <button id="verify" form="form1" value="Submit" className='login100-form-btn' onClick={Verify} style={{ display: 'none' }}>Verify</button>
                            </div>
                            <div className="container-login100-form-btn">

                                <button form="form1" value="Submit" className='login100-form-btn' onClick={SignUp}>Sign UP</button>
                            </div>
                            <div className="text-center " style={{ marginTop: '10px', fontSize: '125%' }}>Already have account?
                                <a className="txt2" href="login" style={{ margin: '3px' }}>
                                    click here!

                                </a>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </Online><Offline>You're offline right now. Check your connection.</Offline></>

    )
}