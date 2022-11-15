import React from "react";
import Pic2 from "../../Assests/HeaderLogoPNG.PNG";
import 'antd/dist/antd.css';

import './header.css';
import Popup from "../popup";
const Header = () => {
    return (
        <div className="mainContent">
            <div className="left">
                <div className="icon">
                    <img src={Pic2} alt="kiu-logo"/>
                </div>
                <div className="text">
                    <h2>Learning Management System (LMS)</h2>
                    <button>spring2021</button>
                </div>
            </div>
            <div className="Right">
                <div className="Dicon" >
                    <Popup />
                 </div>
            </div>
        </div>
    )
}
export default Header;