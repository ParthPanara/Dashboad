import { useEffect, useState } from "react";
// import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import {ReactSession} from 'react-client-session'
import Table1 from "./table";
import { Offline, Online } from "react-detect-offline";
// import Table2 from "./table";

export default function Smoke(){
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);
    const arr=[]
    const actual=[]
    useEffect(
        ()=>{
            fetch("https://internshippro.000webhostapp.com/smokesensor.php")
            .then(res=>res.json())
            .then(json=>setData(json.smoke))
            .catch(setError)
        }
    ,data)
    for (let i in data[0]){
        var val=i.replace("_"," ")
        arr.push(val)
        actual.push(i)
    }
    // console.log(data)
    let x = (typeof ReactSession.get("login_id") === 'undefined') ? 'false' : 'true'
    // const ClearSession = ()=>{
    //   localStorage.clear();
    //   console.log(ReactSession.get("username"))
    // }
    console.log("data :"+data)
    console.log("actual :"+actual)
    console.log("arr :"+arr)

    return(
        <>
      <Online>
        <div className='page-container'>
        <div className="left-content">
          <div className="mother-grid-inner">
            <Navbar />
            <div className="inner-block">
              <Table1 value={data} field={arr} roww={actual} />
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