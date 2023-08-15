import React from "react";
import { Button } from 'react-bootstrap';

const Main = () => {
    return ( 
        <div style={{textAlign: "center", alignItems: "center", paddingTop: "70px", paddingLeft: "300px", paddingRight: "300px"}}>
            <img src="/images/background.png" alt="" style={{width: "400px"}} />
            <h1>Get Things Done With TODO </h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere neque recusandae harum quos culpa, temporibus ratione consequuntur quas, porro, quam fugiat accusamus corporis voluptatibus hic omnis ad mollitia quidem sit!</h4>
            <Button style={{backgroundColor: "#F700C4", height: "100px", width: "500px", textDecoration: "bold", fontSize: "50px"}} href="SignUp">Get Started</Button>
        </div>
     );
}
 
export default Main;