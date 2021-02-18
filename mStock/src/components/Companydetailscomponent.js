import React from 'react'
import AuthenticationService from './AuthenticationService'
import base_url from '../api/bootapi';
import axios from "axios";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup, CardDeck
} from 'reactstrap';

function Companydetailscomponent(props) {
    let userLoggedin = AuthenticationService.isUserLoggedin()
    //let userid = AuthenticationService.getUserIdLoggedin()

    function handleClick(companyId) {
        console.log("Hiii")
        var userid = sessionStorage.getItem("AuthenticatedUser")
        console.log(userid)
        console.log(companyId)
        //let userid = sessionStorage.getItem("AuthenticatedUser")
        axios.post(`${base_url}/watchList`, { userId: userid, companyId: companyId }).then(
            (response) => {
                alert("Added to watchList")
            }
        );
    }
    return (
        <div>


            <div className="container-fluid my-4 ">
                <div class="col col-lg-4">
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h5">{props.cmp.companyName}</CardTitle>
                                <CardText>{props.cmp.description}</CardText>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{`Today's Price $${props.cmp.currentStockPrice}`}</CardSubtitle>
                                {userLoggedin && <Button color="primary" outline onClick={() => handleClick(props.cmp.companyId)}>Watch</Button>}
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    )
}

export default Companydetailscomponent
