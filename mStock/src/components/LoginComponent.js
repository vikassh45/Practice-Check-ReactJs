import React, { Component } from 'react'
//import CompanyListService from '../api/CompanyListService.js';
import AuthenticationService from './AuthenticationService.js'
import base_url from '../api/bootapi';
import axios from "axios";
//const qs = require('qs')
class LoginComponent extends Component {

    constructor() {
        super();
        this.state = {
            username: "vikas@crypto.com",
            upassword: ''
        }
    }

    handleClick = () => {
        let user = {
            email: this.state.username,
            password: this.state.upassword
        }
        const user1 = axios.post(`${base_url}/users`, user).then(
            (response) => {
                //success
                this.setState(response.data);
                AuthenticationService.registerSuccessfulLogin(response.data.id, this.user1);
                this.props.history.push("/companies-list")
            },
            () => {
                alert("No User Found")
            }
        );
        console.log(user1)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })
    }

    render() {
        return (
            <div className="container">
                <h1>Let's get started by</h1>
                <h1>login</h1>
                <br />
                <div className="container">
                    <div style={{ color: "red" }}>field marked with * are mandatory</div>
                    {this.state.emptyvalue && <div style={{ color: "red" }}>
                        <ul>
                            <li>Email is required</li>
                            <li>Password is required</li>
                        </ul>
                    </div>}
                    {this.state.hasloginfailed && <div style={{ color: "red" }}>Invalid credentials</div>}
                    <div className="form-group">
                        Email Address* <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        Password* <input type="password" className="form-control" name="upassword" value={this.state.upassword} onChange={this.handleChange} />
                    </div>
                    <button className="btn btn-primary btn-lg" onClick={this.handleClick}>Submit</button>
                </div>
            </div>
        )
    }
}


export default LoginComponent




























{/*import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService'
 class LoginComponent extends Component {

constructor(props) {
    super(props)

    this.state = {
        username : "vikas@crypto.com",
        upassword : ''
    }
}
handleClick=()=>{ 
    let user={
        email:this.state.username,
        password:this.state.upassword
    }
}
login(response) {
    console.log(response)
    AuthenticationService.registerSuccessfulLogin(response.data.id,response.data.email)
}
handleChange = (event) => {
    this.setState({
        [event.target.name] : event.target.value

    })
}

    render() {
        return (
            <div>
            <div className="container">
                <Form>
                    <FormGroup>
                        <h2>Let's get started by</h2>
                        <h2>login</h2><br />
                        <div style={{ color: "red" }}>Field marked with * are mandatory</div>
                        <Label for="exampleEmail">Email Address*</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Email here" className="form-control"  onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password*</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter password here" className="form-control"  onChange={this.handleChange} />
                    </FormGroup>
                    <Button color="primary" onClick={this.handleClick}>Login</Button>
                </Form>
            </div>
        </div>
        )
    }
}

export default LoginComponent



*/}


{/*import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function LoginComponent() {

    return (
        <div>
            <div className="container">
                <Form>
                    <FormGroup>
                        <h2>Let's get started by</h2>
                        <h2>login</h2><br />
                        <div style={{ color: "red" }}>Field marked with * are mandatory</div>
                        <Label for="exampleEmail">Email Address*</Label>
                        <Input type="email" name="email" id="email" placeholder="Enter Email here" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password*</Label>
                        <Input type="password" name="password" id="password" placeholder="Enter password here" />
                    </FormGroup>
                    <Button color="primary">Login</Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginComponent
*/}

