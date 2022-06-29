import { Card, Col, Container, Row } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
// import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Offline, Online } from "react-detect-offline";
import {ReactSession} from 'react-client-session';

export default function Location() {
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
                                    <Row>
                                        <Tiles />

                                    </Row>
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
    <Offline>
    You're offline right now. Check your connection.
    </Offline>
            

        </>
    )
}


function Tiles() {
    const loaction1 = [
        { "area1": "Work Space","image1":require('../images/workspace.jpg'),'path':'../workSpace' },
        { "area1": "Cafeteria","image1":require('../images/cafeteria.jpg'),'path':'../cafeteria' },
        { "area1": "Video Conference Room","image1":require('../images/videoConference.jpg'),'path':'../videoConference' },
        { "area1": "Meeting Room","image1":require('../images/meeting.jpg'),'path':'../meetingRoom' },
        { "area1": "Library","image1":require('../images/library.jpg'),'path':'../library' },
        { "area1": "Out of Office","image1":require('../images/out.jpg'),'path':'../outOfOffice' }
    ]
    return (
        loaction1.map(
            (newdata) => {
                return (
                    <Col md="4" sm="6">
                        <Insert area={newdata.area1} image2={newdata.image1} path={newdata.path} />
                    </Col>);

            }
        )
    )

}

function Insert(props) {
   
    return (
        <Card className='cards1' style={{margin:'20px'}} >
            <Card.Img variant="top" src={props.image2} style={{width:'100%',height:'200px'}} />
            
            <Card.Body className="text-center">
                <Card.Title  style={{fontSize:"200%"}}>{props.area}</Card.Title>
            
                <Card.Link ><Link to={props.path} style={{fontSize:"150%"}}>Fetch Data</Link></Card.Link>
            </Card.Body>
        </Card>
    )
}