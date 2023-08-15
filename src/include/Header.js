import React from "react";
import { Button } from "react-bootstrap";


const Header = () => {
    const handleLogout = () =>{
        window.location.href = 'SignUp'
    }

    return ( 
        <div style={{backgroundImage : "url(/images/img4.png)", height: "200px", textAlign: "center"}}>
            <h2 style={{paddingTop: "100px"}}>Welcome Thanh Tam</h2>
            <Button onClick={handleLogout}>Log out</Button>
        </div>
     );
}
 
export default Header;