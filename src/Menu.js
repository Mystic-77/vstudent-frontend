import React from 'react';
import './Menu.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/home" className="item">
                Home
            </Link>
            <Link to="/forums" className="item">
                Forums
            </Link>
            <Link to="/blogs" className="item">
                Blogs
            </Link>
            <Link to="/carpools" className="item">
                Carpool
            </Link>
            <Link to="/documents" className="item">
                Documents
            </Link>

            <div className="right menu">
                <Link to="/profile" className="ui item">
                    <i className="user icon"></i>                
                </Link>
                <Link to="/logout" className="ui item">
                    <i className="sign-out icon red"></i>
                </Link>
            </div>
        </div>
    );
};

export default Menu;