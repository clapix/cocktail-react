import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";

class Header extends React.Component {

    render() {

        let displayAgeConfirm = this.props;

        return (
            <Router>
                <header className="page-header">
                    <a href="/">
                        <img
                            src="../../assets/logo-header.png"
                            alt="mixologic-logo" />
                    </a>

                    <nav className="header-nav">
                        <ul className="header-ul">
                            <li><a className="header-link" 
                            href="/cocktails">
                            Browse Cocktails</a></li>
                        </ul>
                    </nav>
                    
                </header>
            </Router>)

    };
}

export default Header;