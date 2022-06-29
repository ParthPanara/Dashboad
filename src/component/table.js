import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table } from 'react-bootstrap';
// import { Search } from 'react-bootstrap-table2-toolkit';



// export default function Pagination1(props) {

//     const { SearchBar } = Search;
//     let columns = [];
//     console.log(props.roww)
//     props.roww.map(
//         (newdata, i) => {
//             console.log("inside roww")
//             columns[i] = { 'dataField': newdata, 'text': newdata }

//         }
//     )
//     console.log(columns)
//     props.field.map(
//         (newdata, i) => {
//             columns[i]['text'] = newdata;
//         }
//     )
//     console.log(columns)


//     return (
//         <>

//             <Container>
//                 <h3>Table</h3>
//                 <ToolkitProvider
//                     keyField="id"
//                     data={props.value}
//                     columns={columns}
//                     search
//                 >
//                     {
//                         props => (
//                             <div>
//                                 <h3>Input something at below input field:</h3>
//                                 <SearchBar {...props.searchProps} />
//                                 <hr />
//                                 <BootstrapTable
//                                     {...props.baseProps}
//                                     pagination={paginationFactory({ sizePerPage: 10 })}
//                                 />
//                             </div>
//                         )
//                     }
//                 </ToolkitProvider>
//             </Container>
            

//         </>
//     );
// }
export default function Table1(props) {

    var len = props.field;
    len = len.length;
    // console.log(len)
    if (len == 4) {
        return (
            <>
                <Table striped bordered hover variant="dark" >
                    <thead>
                        <tr>
                            {
                                props.field.map(
                                    (newdata, i) => {
                                        return (
                                            <th key={i}>{newdata}</th>
                                        )
                                    }
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.value.map(
                                (newdata, i) => {
                                    return (
                                        <tr key={i}>

                                            <td>{
                                                newdata[props.roww[0]]
                                            }</td>
                                            <td>{newdata[props.roww[1]]}</td>
                                            <td>{newdata[props.roww[2]]}</td>
                                            <td>{newdata[props.roww[3]]}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </Table>
            </>

        )
    }
    else {
        return (
            <>
                <Table striped bordered hover variant='dark'>
                    <thead>
                        <tr>
                            {
                                props.field.map(
                                    (newdata, i) => {
                                        return (
                                            <th key={i}>{newdata}</th>
                                        )
                                    }
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.value.map(
                                (newdata, i) => {
                                    return (
                                        <tr key={i}>

                                            <td>{
                                                newdata[props.roww[0]]
                                            }</td>
                                            <td>{newdata[props.roww[1]]}</td>
                                            <td>{newdata[props.roww[2]]}</td>
                                            <td>{newdata[props.roww[3]]}</td>
                                            <td>{newdata[props.roww[4]]}</td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </Table>
            </>
        )
    }
}

