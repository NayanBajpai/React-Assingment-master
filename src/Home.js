import React from "react";
import { Link } from "react-router-dom";

function LandingPageButton() {
    return(
        <>
        <Link to="/Register" class="nav-link">
        <button class="btn btn-primary" > 
            <span style={{"font-size": "24px", color:"Black"}}>
                Register For Free!
            </span>
        </button>
    </Link>
    
    
    <Link to="/Login" class="nav-link">
        <button class="btn btn-info" > 
            <span style={{"font-size": "24px", color:"black"}}>
                 Login!
            </span>
        </button>
    </Link>
    </>
    );
    
    
    
}
function LandingFrameMessage() {
    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white"
    }
    return <div style={style}>
        
        <div style={{"font-size": "60px" , color:"black"}}>
        Order Management System
        </div>
        
        <div style={{"font-size": "20px", color:"black"}}>
        It's designed to facilitate and automate the order fulfillment process, reducing the time in the order-to-cash cycle and improving order processing efficiency for suppliers and wholesalers.
        </div>
        <br />
        <LandingPageButton />
    </div>
}

function LandingFrame() {
    const style = {
        "background-image": `url("https://petersomervell.files.wordpress.com/2020/06/modern-city-skyline-background_77417-791.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%"
    }
    return <div style={style}>
        <LandingFrameMessage/>
    </div>
}
function Home() {
    return <div>
        <LandingFrame />
    </div>
}
export default Home