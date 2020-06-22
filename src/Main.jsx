import React, {Component} from 'react';
import {Switch, Route, withRouter,} from "react-router";
import App from "../App";
import {createBrowserHistory} from 'history';


const history = createBrowserHistory();


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: "",
            currentPathname: null
        };

        this.currentPathname = this.currentPathname.bind(this);

    }


    componentDidMount() {

        history.listen((location, action) => {
            if (action === 'PUSH' || 'POP' && location.pathname === "/page1") {
                this.setState({currentPathname: "page1"})
            }
            if (action === 'PUSH' || 'POP' && location.pathname === "/page2") {
                this.setState({currentPathname: "page2"})
            }
            if (action === 'PUSH' || 'POP' && location.pathname === "/page3") {
                this.setState({currentPathname: "page3"})
            }
            if (action === 'POP' && location.pathname === "/") {
                history.go(0)
                // alert("are you sure you want to leave the app?")
            }
            // if the user wants to move forward with a url that the server cannot understand it will reload the app.
            if (action === 'PUSH' && location.pathname === "/") {
                location.reload();
            }

        });
    }

    render() {

        const Main = {
            page1: (
                <Page1

                />
            ),
            page2: (
                <Page2

                />
            ),
            page3: (
                <Page3

                />
            )
        };

        return (

            <div className="main-content">
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path="page1">
                        <Page1/>
                    </Route>
                    <Route path="page2">
                        <Page2/>
                    </Route>
                    <Route path="page3">
                        <Page3/>
                    </Route>
                </Switch>

                <Nav
                    Page1={this.page1}
                    Page2={this.page2}
                    Page3={this.page3}
                    selectedTab={this.state.currentPathname}/>
                {mainContent[this.state.currentPathname]}
            </div>
        );
    }
}

export default withRouter(Main);

