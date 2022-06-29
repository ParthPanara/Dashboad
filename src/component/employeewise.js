import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';

import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from './navbar';
// import Footer from './footer';
import Sidebar from './sidebar';
import { Offline, Online } from "react-detect-offline";
import {ReactSession} from 'react-client-session';



export default function EmployeeWise() {
    const columns = [{
        dataField: 'login_id',
        text: 'Employee Id',
        filter: textFilter()
    }, {
        dataField: 'rfid_id',
        text: 'RFID'
    }, {
        dataField: 'location',
        text: 'Location of Employee'
    }, {
        dataField: 'reading_time',
        text: 'Arriving Time'
    }, {
        dataField: 'name',
        text: 'Employee Name',
        filter: textFilter()
    }];
    const d1 = [];
    // const { SearchBar } = Search;
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    // const [data1, setdata1] = useState([]);
    



    const apiGet = () => {
        fetch('https://internshippro.000webhostapp.com/employeewise.php')
            .then(res => res.json())
            .then(json => setData(json.smoke));
    }
    const loadData = () => {
        fetch('https://internshippro.000webhostapp.com/detail.php')
            .then(res => res.json())
            .then(json => setData2(json.smoke));
    }
    useEffect(() => {
    
        apiGet();
       
        loadData();
        // const interval = setInterval(() => {
        //     apiGet();
        //     loadData();
        // }, 10000);

        // return () => clearInterval(interval);
    }, []);
   

    // data.map(
    //     (newdata,i) => {
    //         data2.map(
    //             (newdata1) => {
    //                 if (newdata.login_id == newdata1.login_id) {

    //                     data1.push(newdata)

    //                     console.log(newdata1.name)
    //                     data1[i]['name'] = newdata1.location
    //                     // data1[i]['name'] = newdata1.name
    //                 }
    //             }
    //         )
    //     }

    // )
    // console.log(data1)
    data.map(
        
        (newdata,j) => {
            
            console.log("data",newdata,j)
            data2.map(
                
                (newdata1,i) => {
                    console.log("data2",newdata1,i,j)
                    console.log("newdata",newdata.login_id,"newdata1",newdata1.login_id)
                    if (newdata.login_id === newdata1.login_id) {
                        d1.push(newdata)

                        // setTimeout(() => { d1[j-1].name = newdata1.name; }, 1000);
                        console.log(d1)
                        d1[j].name = newdata1.name;
                        // console.log(typeof d1[i])
                        
                        // d1[i].name = newdata1.name;
                    }
                }
            )

        }
    )

  
    const options = {
        custom: true,
        paginationSize: 4,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        totalSize: data.length
    };
    const contentTable = ({ paginationProps, paginationTableProps }) => (
        <div>

            <PaginationListStandalone {...paginationProps} />
            <div>
                <div>
                    <BootstrapTable
                        striped
                        hover
                        keyField="id"
                        data={d1}
                        columns={columns}
                        filter={filterFactory()}
                        {...paginationTableProps}
                    />
                </div>
            </div>
            <PaginationListStandalone {...paginationProps} />
        </div>
    );

    let x = (typeof ReactSession.get("login_id") === 'undefined') ? 'false' : 'true'
    return (
        <>
            <Online>
                <div className='page-container'>
                    <div className="left-content">
                        <div className="mother-grid-inner">
                            <Navbar />
                            <div className="inner-block">
                                {/*market updates updates*/}
                                <div className="market-updates" id='cards'>

                                    <Container>
                                        <h2>Filter according to your needs</h2>
                                        <PaginationProvider
                                            pagination={
                                                paginationFactory(options)
                                            }
                                        >
                                            {contentTable}
                                        </PaginationProvider>
                                    </Container>
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
    );
}


// {/* <>
//     <Online>
//         <div className='page-container'>
//             <div className="left-content">
//                 <div className="mother-grid-inner">
//                     <Navbar />
//                     <div className="inner-block">
//                         {/*market updates updates*/}
//                         <div className="market-updates" id='cards'>

//                             <Container>
//                                 <EmployeeWise />
//                             </Container>
//                             <div className="clearfix"> </div>
//                         </div>
//                         {/*main page chart layer2*/}
//                         <div className="clearfix"> </div>
//                     </div>
//                     {/*climate end here*/}
//                     <Footer />
//                 </div>
//             </div>

//         </div>
//         <Sidebar field='true' />

//     </Online>
//     <Offline>You're offline right now. Check your connection.</Offline>
// </> */}


