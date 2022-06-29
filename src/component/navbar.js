import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactSession } from 'react-client-session';


import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';


export default function Navbar() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  useEffect(
    () => {
      fetch(`https://internshippro.000webhostapp.com/detail.php`)
        .then(res => res.json())
        .then(json => setData(json.smoke))
        .catch(setError)
    }
    , [])
    let image1 = {
      'a':  require('../images/a.png'),
      'b':  require('../images/b.png'),
      'c':  require('../images/c.png'),
      'd':  require('../images/d.png'),
      'e':  require('../images/e.png'),
      'f':  require('../images/f.png'),
       'g':  require('../images/g.png'),
       'h':  require('../images/h.png'),
       'i':  require('../images/i.png'),
       'j':  require('../images/j.png'),
       'k':  require('../images/k.png'),
       'l':  require('../images/l.png'),
       'm':  require('../images/m.png'),
       'n':  require('../images/n.png'),
       'o':  require('../images/0.png'),
       'p':  require('../images/p.png'),
       'q':  require('../images/q.png'),
       'r':  require('../images/r.png'),
       's': require('../images/s.png'),
       't': require('../images/t.png'),
       'u': require('../images/u.png'),
       'v': require('../images/v.png'),
       'w': require('../images/w.png'),
       'x': require('../images/x.png'),
       'y': require('../images/y.png'),
       'z': require('../images/z.png')
  }
  
  let image2;
  let name1;
  const login_id = ReactSession.get("login_id");
  // console.log(login_id)
  // const login_id="2";
  // localStorage.clear();
  // console.log(ReactSession.get("username"))
  data.map(
    (newdata) => {
      // console.log(newdata.login_id)
      if (login_id === newdata.login_id) {
        // console.log(newdata.name[0])
        image2=image1[newdata.name[0].toLowerCase()]
        name1 = newdata.name;
      }
    }
  )
  const ClearSession = ()=>{
      localStorage.clear();
      return navigate("/");
      // console.log(ReactSession.get("username"))
    }
  let x=(typeof ReactSession.get("login_id")==='undefined') ? null : ReactSession.get("login_id")
  if(x ===null){
    return (
      <div className="header-main">
        <div className="header-left">
          <div className="logo-name">
            <Link to='../home' style={{ textDecoration: 'none' }}>
              <h1>Project</h1>
  
            </Link>
          </div>
  
          <div className="clearfix"> </div>
        </div>
        <div className="header-right">
          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                
                <button><Link to='../login' style={{textDecoration:'none', marginRight:'10px'}}>Login</Link></button>
                <button><Link to='../signup' style={{textDecoration:'none'}}>SignUp</Link></button>
  
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    )
  }
  else{
    return (
      <div className="header-main">
        <div className="header-left">
          <div className="logo-name">
            <Link to='../home' style={{ textDecoration: 'none' }}>
              <h1>Project</h1>
  
            </Link>
          </div>
  
          <div className="clearfix"> </div>
        </div>
        <div className="header-right">
          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                <span><img src={image2} alt="" style={{ width: '55px', height: '55px', borderRadius: '50%' , marginRight: '5px' }} /><span style={{fontSize: '200%'}}>{name1}</span>
                  <NavDropdown title="" id="basic-nav-dropdown" className='float-right'>'
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#"><Link to='../add_employee' style={{textDecoration:'none'}}>Change Profile Details</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={ClearSession}>Log Out</NavDropdown.Item>
                  </NavDropdown>
                </span>
  
              </li>
            </ul>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="clearfix"> </div>
      </div>
    )
  }
  
}