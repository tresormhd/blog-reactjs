import React  from "react";
import { Link } from "react-router-dom"
const NotFound  =() =>  {
    
    return (
        <>
            <img src="images/404.png"
                style={{
                    width: 800, 
                    height: 500,
                    display: 'block', 
                    margin: 'auto', 
                }} 
            />
            <center style={{ marginBottom:'80px' }}>
                <Link to="/">Return to Home Page</Link>
            </center>
        </>
    );
   
}
export default NotFound