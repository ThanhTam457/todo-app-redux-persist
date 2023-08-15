import React from "react";
import {Container} from 'react-bootstrap'
import SignIn_Form from "../components/SignIn_Form";

const SignIn = () => {
    return (  
        <div style={{backgroundColor: "#F5F5F5", height: "715px", textAlign: "center", alignItems: "center"}}>
            <Container style={{paddingTop: "100px"}}>
                <h1>Welcome back!</h1>
                <img src="/images/img3.png" alt="" className="mb-3"/>
                <SignIn_Form/>
                <p style={{fontSize: "25px"}}>Don't have an Account ?  <a href="SignUp" style={{textDecoration: "none", color: "#F700C4"}}>SignUp</a></p>
            </Container>
        </div>
    );
}
 
export default SignIn;