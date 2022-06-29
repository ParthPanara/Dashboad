import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from './navbar';
// import Footer from './footer';
import Sidebar from './sidebar';
import { Offline, Online } from "react-detect-offline";



export default function Out() {
    const columns = [{
        dataField: 'login_id',
        text: 'Employee Id'
    }, {
        dataField: 'rfid_id',
        text: 'RFID'
    }, {
        dataField: 'location',
        text: 'Location of Employee'
    }, {
        dataField: 'reading_time',
        text: 'Arriving Time'
    }];
    const data1 = [];
    const { SearchBar } = Search;
    const [data, setData] = useState([]);
    // const [data1, setdata1] = useState([]);




    const apiGet = () => {
        fetch('https://internshippro.000webhostapp.com/location.php')
            .then(res => res.json())
            .then(json => setData(json.smoke));
    }
    useEffect(() => {
        apiGet();
        const interval = setInterval(() => {
            apiGet();
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    data.map(
        (newdata) => {
            if (newdata.location.toLowerCase() == "out of office") {
                data1.push(newdata)
            }
        }
    )

    console.log(data1)
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
                                        <h3>Table</h3>
                                        <ToolkitProvider
                                            keyField="id"
                                            data={data1}
                                            columns={columns}
                                            search
                                        >
                                            {
                                                props => (
                                                    <div>
                                                        <h3>Input something at below input field:</h3>
                                                        <SearchBar {...props.searchProps} />
                                                        <hr />
                                                        <BootstrapTable
                                                            {...props.baseProps}
                                                            pagination={paginationFactory({ sizePerPage: 10 })}
                                                        />
                                                    </div>
                                                )
                                            }
                                        </ToolkitProvider>
                                    </Container>
                                    <div className="clearfix"> </div>
                                </div>
                                {/*main page chart layer2*/}
                                <div className="clearfix"> </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <Sidebar field='true' />

            </Online>
            <Offline>You're offline right now. Check your connection.</Offline>

        </>
    );
}

