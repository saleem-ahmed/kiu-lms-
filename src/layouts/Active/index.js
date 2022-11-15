import React from "react";
import FAQ from "../../components/faq";


const Active = () => {
    return (
        <div style={{width:'100%'}}>
            <div style={{ 
                backgroundColor: 'blue',
                margin: '0 25px',
                padding:'10px 25px'  
                }}>
                <h2 style={{color:'white'}}>Active Courses</h2>
            </div>
            <br/>
            <br/>
            <div>
                <FAQ/>
            </div>
        </div>
    )
}
export default Active;