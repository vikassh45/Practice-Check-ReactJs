import React from 'react'
import base_url from '../api/bootapi';
import axios from "axios";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardGroup, CardDeck
} from 'reactstrap';
function Watchlistdetailscomponent(props) {
    //let userLoggedin = AuthenticationService.isUserLoggedin()
    //let userid = AuthenticationService.getUserIdLoggedin()

    function handleClick(companyId) {
        console.log("Hiii")
        var userid = sessionStorage.getItem("AuthenticatedUser")
        console.log(userid)
        console.log(companyId)
        //let userid = sessionStorage.getItem("AuthenticatedUser")
        axios.delete(`${base_url}/watchList/${userid}/${companyId}`).then(
            (response) => {
                alert("Deleted from watchList")
            }
        );
    }
    return (
        <div>


            <div className="container-fluid row my-4">
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <CardBody>
                                <CardTitle tag="h5">{props.cmp.companyName}</CardTitle>
                                <CardText>{props.cmp.description}</CardText>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">{`Today's Price $${props.cmp.currentStockPrice}`}</CardSubtitle>
                                <Button color="danger" outline onClick={() => handleClick(props.cmp.companyId)}>Remove</Button>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    )
}

export default Watchlistdetailscomponent
