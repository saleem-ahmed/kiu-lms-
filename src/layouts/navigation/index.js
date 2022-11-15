import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Dashoard from "../dashboard/index.js";
import Noticeboard from '../Noticeboard/index.js'
import Active from '../Active/index.js';
import Finnal from '../finnal/index.js';
import Arrange from '../Arrange/index.js';
import Main from '../Main/index.js';
import Notification from '../Notification/index.js';
import GenerateChallan from "../Generate Challan/index.js";
import UploadChallan from "../upload Challan/index.js";
import FeeHistory from "../Fee history/index.js";
import PaymentSummary from '../Payment Summary/index.js'
import PrintChallan from '../Print Challan/index.js'
import Transcript from '../Transcript/index.js'
import Graduating from '../Graduating Student/index.js'
import Complaints from '../complaints/index.js'

const Routing = () => {

    return (
        <Switch>
            <Route exact path="/Dashboard" component={Dashoard} />
            <Route path="/noticeboard" component={Noticeboard} />
            <Route path="/active" component={Active} />
            <Route path="/finnal" component={Finnal} />
            <Route path="/arrange" component={Arrange} />
            <Route path="/main" component={Main} />
            <Route path="/notification" component={Notification} />
            <Route path="/generateChallan" component={GenerateChallan} />
            <Route path="/uploadChallan" component={UploadChallan} />
            <Route path="/feeHistory" component={FeeHistory} />
            <Route path="/paymentSummary" component={PaymentSummary} />
            <Route path="/printChallan" component={PrintChallan} />
            <Route path="/transcript" component={Transcript} />
            <Route path="/graduating" component={Graduating} />
            <Route path="/complaints" component={Complaints} />

            <Redirect to="/Dashboard" />
        </Switch>
    )

}
export default Routing;