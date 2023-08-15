import React from "react";
import Header from "./Header";
import TaskList from "../components/TaskList";

const Dashboard = () => {
    return ( 
        <div style={{backgroundColor: "#F5F5F5", height: "715px", textAlign: "center", alignItems: "center"}}>
            <Header/>
            <h4 style={{textAlign: "end", paddingRight: "50px"}}>Good Evening!</h4>
            <img src="/images/img5.png" alt="" />
            <h4 style={{textAlign: "start", paddingLeft: "50px", color: "#610101"}}>Task List</h4>
            <div style={{padding: "20px 150px"}}>
                <TaskList/>
            </div>
        </div>
     );
}
 
export default Dashboard;
