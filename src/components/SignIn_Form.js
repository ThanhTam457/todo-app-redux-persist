import React from "react";
import {Form, Button} from "react-bootstrap";
import { useState } from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts"; 

const SignIn_Form = () => {
    const SignIn_user = useAppSelector((state)=>state.user);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () =>{
        if(SignIn_user.id == null){
            alert("There is no account in system, please sign up!!!")
        }
        else{
            if (email === SignIn_user.email && password === SignIn_user.password ){
                console.log("success");
                window.location.href = 'Dashboard'
            }
            else{
                console.log("failed");
                alert("Wrong email or password. Please try again!!")
            }
        }
    }


    return ( 
        <Form style={{padding: "0px 350px"}}> 
            <div class="form-floating mb-3">
                <input type="email" className="form-control" id="floatingEmail" placeholder="nguyentruongthanhtam.9a1@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label for="floatingPassword">Enter your email</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label for="floatingPassword">Enter your password</label>
            </div>
            <h4 className="mb-3"><a style={{textDecoration: "none", color: "#F700C4"}} href='SignUp'>Forget Password?</a></h4>
            <Button style={{backgroundColor: "#F700C4", height: "70px", width: "250px", textDecoration: "bold", fontSize: "25px"}} onClick={handleSignIn}>SignIn</Button>
        </Form>
     );
}
 
export default SignIn_Form;