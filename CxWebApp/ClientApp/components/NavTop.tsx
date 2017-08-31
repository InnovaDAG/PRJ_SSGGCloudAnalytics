// TODO: The top navigation needs some research as currently it overlaps the content and makes the page
//       not good for browsing.

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavTop extends React.Component<{}, {}> {
    public render() {
        return <nav className='navbar navbar-inverse navbar-fixed-top'>
            <div className='container-fluid'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>Cloud Analytics</a>
            </div>
            <ul className='av navbar-nav'>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
                <li className='active'><a href='#'>Home</a></li>
                <li><a href='#'>Support</a></li>
                <li><a href="#"><span className='glyphicon glyphicon-log-in'></span> Login</a></li>
            </ul>
            </div>
        </nav>;

    }
}
