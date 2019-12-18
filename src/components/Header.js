import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <Router>
                <header className="page-header">
                    <Link to="/">
                        <img 
                            src="assets/logo-header.png" 
                            alt="mixologic-logo"/>
                    </Link>
                </header>
            </Router>)

    };
}

export default Header;