import React from "react";
import {Container} from "react-bootstrap";
import SignUp_Form from "../components/SignUp_Form";
import {useEffect } from "react";

const SignUp = () => {


    return ( 
        <div style={{backgroundColor: "#F5F5F5", height: "715px", textAlign: "center", alignItems: "center"}}>
            <Container style={{paddingTop: "100px"}}>
                <h1>Welcome User!</h1>
                <p style={{fontSize: "25px"}}>Lets Get Signup to add tasks</p>
                <img src="/images/img2.png" alt="" width={70} className='mb-3'/>
                <SignUp_Form/>
                <p style={{fontSize: "25px"}}>Already have an Account ?  <a href="SignIn" style={{textDecoration: "none", color: "#F700C4"}}>SignIn</a></p>
            </Container>
        </div>
     );
}
 
export default SignUp;