// import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Offline, Online } from "react-detect-offline";
import { ReactSession } from 'react-client-session'
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";


export default function AddEmployee() {
    let x = (typeof ReactSession.get("login_id") === 'undefined') ? 'false' : 'true'
    return (
        <>
            <Online ><div className='page-container'>
                <div className="left-content">
                    <div className="mother-grid-inner">
                        <Navbar />
                        <div className="inner-block">
                            {/*market updates updates*/}
                            <div className="market-updates" id='cards'>

                                <Insert />
                                <div className="clearfix"> </div>
                            </div>
                            {/*main page chart layer2*/}
                            <div className="clearfix"> </div>
                        </div>

                    </div>
                </div>

            </div>
                <Sidebar field={x} />
            </Online>
            <Offline>You're offline right now. Check your connection.</Offline>


        </>
    )
}

function Insert() {
    const [name, setName] = useState(null);
    // const [empid,setEmpid] = useState(null);
    const [data, setData] = useState([]);
    // const [loginid,setLoginid] = useState(null);
    const [address, setAddress] = useState(``);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const navigate = useNavigate();
    const [dob, setDob] = useState(null);


    const loginid = ReactSession.get("login_id");



    const SubmitData = (args) => {
        args.preventDefault();

        console.log("submit")
        fetch(`https://internshippro.000webhostapp.com/updateEmployee.php?name=${name}&loginId=${loginid}&address=${address}&dob=${dob}&city=${city}&state=${state}&zip=${zip}`)
            .then(alert("Your data has been change successfully."))
            .then(navigate('../home'))
    }




    return (
        <Container>
        <form className="needs-validation" >
            <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip01">Full name</label>
                    <input type="text" className="form-control" id="name" placeholder='Full Name' required value={name} onChange={(a) => setName(a.target.value)} />

                </div>
                <div className="col-md-8 mb-3">
                    <label htmlFor="validationTooltip03">Address</label>
                    <input type="text" className="form-control" id='address' placeholder="Address" required value={address} onChange={(a) => setAddress(a.target.value)} />
                </div>



            </div>
            <div className="form-row">

                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip03">City</label>
                    <input type="text" className="form-control" id="city" placeholder="City" required value={city} onChange={(a) => setCity(a.target.value)} />

                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip04">State</label>
                    <input type="text" className="form-control" id="state" placeholder="State" required value={state} onChange={(a) => setState(a.target.value)} />

                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="validationTooltip05">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="Zip" required value={zip} onChange={(a) => setZip(a.target.value)} />

                </div>
            </div>
            <div className="form-row">

                <div className="col-md-6 mb-3">
                    <label htmlFor="validationTooltip05">DOB</label>
                    <input type="date"
                        className="form-control" placeholder="01-01-2000" id="dob" required value={dob} onChange={(a) => setDob(a.target.value)} />
                </div>
            </div>
            <div className="text-center">
                {/* <input type='submit' class="btn btn-primary" value='change' onClick={Change} >Change Details</input> */}
                <input type='submit' class="btn btn-primary" value='submit' onClick={SubmitData} ></input>

            </div>
        </form>
        </Container>
    )
}

