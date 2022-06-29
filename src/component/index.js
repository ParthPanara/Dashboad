import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Home } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Smoke from './component/smoke';
import Flame from './component/flame';
import Ir from './component/ir';
import Ldr from './component/ldr';
import Pir from './component/pir';
import Soil from './component/soil';
import Temp from './component/temp';
import Ul from './component/ultrasonic';
import EmployeeList from './component/employeeList';
import AddEmployee from './component/addEmployee';
import Login from './component/login';
import Signup from './component/signup';
import Location from './component/employee_location';
import Search1 from './component/cafeteria';
import Library from './component/library';
import Meeting from './component/meetingroom';
import VideoConference from './component/videoconferenceroom';
import Out from './component/outofoffice';
import Workspace from './component/workspace';
import Employee from './component/employeewise';


ReactDOM.render(
  <BrowserRouter >
    <Routes>
      
    <Route exact path='/' element={<Home />}></Route>
      <Route exact path='home' element={<Home />}></Route>
      <Route exact path='smoke' element={<Smoke />}></Route>
      <Route exact path='flame' element={<Flame />}></Route>
      <Route exact path='ir' element={<Ir />}></Route>
      <Route exact path='ldr' element={<Ldr />}></Route>
      <Route exact path='pir' element={<Pir />}></Route>
      <Route exact path='soil' element={<Soil />}></Route>
      <Route exact path='temp' element={<Temp />}></Route>
      <Route exact path='employee_list' element={<EmployeeList />}></Route>
      <Route exact path='add_employee' element={<AddEmployee />}></Route>
      <Route exact path='ultrasonic' element={<Ul />}></Route>
      <Route exact path='login' element={<Login />}></Route>
      <Route exact path='signup' element={<Signup />}></Route>
      <Route exact path='location_areawise' element={<Location />}></Route>
      <Route exact path='location_employee' element={<Employee />}></Route>
      <Route exact path='cafeteria' element={<Search1 />}></Route>
      <Route exact path='library' element={<Library />}></Route>
      <Route exact path='meetingRoom' element={<Meeting />}></Route>
      <Route exact path='videoConference' element={<VideoConference />}></Route>
      <Route exact path='outOfOffice' element={<Out />}></Route>
      <Route exact path='workSpace' element={<Workspace />}></Route>
      
      
      
      
      
    </Routes>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
