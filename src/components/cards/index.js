import React from 'react';
import 'antd/dist/antd.css';
import './card.css';



const Card = (props) => {

    return(
        <div className="main" style={{ background:props.bg }}>
            <div className="icon">{props.icon}</div>
            <div className="caption">{props.caption}</div> 
        </div>
    )
}
export default Card;