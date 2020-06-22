import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import App from "../App";
import History from "./history";



function AppRoutes() {
    return (
        <Router history={History}>
        <div className="AppRoutes">
        <Switch>
        <Route exact path="/Main">
        <App/>
        </Route>
        <Route path="/page1">
        <Page1/>
        </Route>
        <Route path="/page2">
        <Page2/>
        </Route>
        <Route path="/page3">
        <Page3/>
        </Route>
        </Switch>
        </div>

        </Router>
);
}


export default AppRoutes;