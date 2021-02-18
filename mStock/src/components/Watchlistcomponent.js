import React, { Component } from 'react'
import Watchlistdetailscomponent from './Watchlistdetailscomponent';
import base_url from '../api/bootapi';
import axios from "axios";
import AuthenticationService from './AuthenticationService.js'
class Watchlistcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            watchList: []
        }
    }
    componentDidMount() {
        let watch1 = []
        let userid = sessionStorage.getItem("AuthenticatedUser")
        axios.get(`${base_url}/watchList/${userid}`).then(
            (response) => {
                //success
                response.data.map(
                    (watch) => {
                        watch1.push(watch.company)
                    }
                )
                this.setState({ watchList: watch1 });
                console.log(this.state.watchList)
            },
            () => {

            }
        );
    }

    render() {



        return (

            <div>
                {
                    this.state.watchList.length > 0 ? this.state.watchList.map((item) => <Watchlistdetailscomponent cmp={item} />)
                        : "No Companies in the List"
                }
            </div>
        )
    }
}

export default Watchlistcomponent










{/*
import React, { useState, useEffect } from 'react'
import Watchlistdetailscomponent from './Watchlistdetailscomponent';
import base_url from '../api/bootapi';
import axios from "axios";

function Watchlistcomponent() {
    const [company, setCompany] = useState([]);
    const getWatchlistFromServer = () => {
        axios.get(`${base_url}/watchList`).then(
            (response) => {
                //success
                setCompany(response.data);
                //console.log(response)
            },
            (error) => {
                    console.log(error)
            }
        );
    };
    useEffect(() => {
        getWatchlistFromServer();
    }, []);
    return (
        <div>
            {
                company.length > 0 ? company.map((item) => <Watchlistdetailscomponent cmp={item} />)
                    : "No Companies in the List"
            }
        </div>
    )
}

export default Watchlistcomponent
*/}