import React, { useState, useEffect } from 'react';
import Companydetailscomponent from './Companydetailscomponent';
import base_url from '../api/bootapi';
import axios from "axios";
function Companieslistcomponent() {

    const [company, setCompany] = useState([]);
    const getAllCompaniesFromServer = () => {
        axios.get(`${base_url}/companies`).then(
            (response) => {
                //success
                setCompany(response.data);
            },
            (error) => {

            }
        );
    };
    useEffect(() => {
        getAllCompaniesFromServer();
    }, []);
    return (
        <div>
            {
                company.length > 0 ? company.map((item) => <Companydetailscomponent cmp={item} />)
                    : "No Companies in the List"
            }
        </div>
    )
}

export default Companieslistcomponent
