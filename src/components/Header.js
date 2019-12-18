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
                    <nav className="burger-menu">
                    
                    </nav>
                    <nav className="header-nav">
                        <ul className="header-ul">
                            <li><a className="header-link" href="/cocktails">
                                </a></li>
                        </ul>
                    </nav>
                </header>
            </Router>)

    };
}

export default Header;