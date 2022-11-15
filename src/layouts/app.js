import React from "react";
import Header from "../components/header/index.js";
import Sidebars from "../components/sidebar/index.js";
import Routing from "./navigation/index.js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
const App = () => {
    return (
        <Router>
            <div style={{ backgroundColor: 'white' }}>
            <Header />
            <div style={{ display: 'flex', boxSizing: 'border-box' }}>
                <div style={{width:"20%"}}>
                    <Sidebars />
                </div>
                <div style={{width:"80%"}}>
                    <Routing />
                </div>
            </div>
        </div>
        </Router>
    )
}
export default App;