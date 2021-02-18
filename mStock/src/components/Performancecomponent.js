import React, { Component } from 'react'
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText, Table } from 'reactstrap';
import base_url from '../api/bootapi';
import axios from "axios";
class Performancecomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isClicked: false,
            companyList: [],
            list1: 1,
            list2: 1,
            date1: "",
            date2: "",
            performance: []
        }
    }

    handleClick = () => {
        console.log("Hii")
        this.setState({ isClicked: true })
        // console.log(this.state.isClicked)

        console.log(this.state)
        axios.get(`${base_url}/stocks/compare-performance`, {
            params: {
                companyCode1: this.state.list1, companyCode2: this.state.list2,
                from: this.state.date1, to: this.state.date2
            }
        }).then(
            (response) => {
                console.log(response.data)
                this.setState({
                    performance: response.data
                })
            }
        )
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidMount() {
        let companyId = []
        axios.get(`${base_url}/companies`).then(
            (response) => {
                //success
                //this.setState({companyList:response.data.companyId})
                response.data.map(
                    (company) => {
                        companyId.push(company.companyId)

                    }
                )
                this.setState({ companyList: companyId })
            },
            (error) => {

            }
        );
    }
    render() {
        return (
            <div className="container">

                <br />
                <div className="mb-2 mr-sm-2 mb-sm-0">
                    <Row form>
                        <Col md={6}>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="list1" id="exampleSelect" onChange={this.handleChange}>

                                {
                                    this.state.companyList.map(
                                        (companyid, index) => {
                                            return (
                                                <option key={index} value={companyid}>{companyid}</option>
                                            )
                                        }
                                    )
                                }
                            </Input>
                        </Col>

                        <Col md={6}>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="list2" id="exampleSelect" onChange={this.handleChange}>
                                {
                                    this.state.companyList.map(
                                        (companyid) => {
                                            return (
                                                <option value={companyid}>{companyid}</option>
                                            )
                                        }
                                    )
                                }

                            </Input>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleDate">Date</Label>
                                <Input
                                    type="date"
                                    name="date1"
                                    id="exampleDate"
                                    placeholder="date placeholder"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleDate">Date</Label>
                                <Input
                                    type="date"
                                    name="date2"
                                    id="exampleDate"
                                    placeholder="date placeholder"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button color="primary" onClick={this.handleClick}>Submit</Button>
                </div>
                <br />
                {this.state.isClicked && <div>

                    <Table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Company</th>
                                <th>Stock Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.performance.map(
                                    (perform) => {
                                        return (
                                            <tr>
                                                <th scope="row">{perform.date}</th>
                                                <td>{perform.company.companyName}</td>
                                                <td>{perform.stockPrice}</td>

                                            </tr>
                                        )
                                    }
                                )
                            }

                        </tbody>
                    </Table>

                </div>}
            </div>
        )
    }
}

export default Performancecomponent




