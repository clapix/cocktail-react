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
                        <h1 className="page-header">Mixologic</h1>
                    </Link>

                </header>
            </Router>)

    };
}

export default Header;