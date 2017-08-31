import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>SSGG Cloud Analytics</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-dashboard'></span> General Position
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/azure' } activeClassName='active'>
                                <span className='glyphicon glyphicon-stats'></span> Azure
                            </NavLink>
                            <ul>
                                <li>
                                    <NavLink to={ '/azure/overview' } exact activeClassName='active'>
                                        <span className='glyphicon glyphicon-scale'></span> Overview
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={ '/azure/environments' } exact activeClassName='active'>
                                        <span className='glyphicon glyphicon-tasks'></span> Environments
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={ '/azure/incidents' } exact activeClassName='active'>
                                        <span className='glyphicon glyphicon-ok'></span> Incidents
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={ '/aws/overview' } activeClassName='active'>
                                <span className='glyphicon glyphicon-stats'></span> AWS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/gcp/overview' } activeClassName='active'>
                                <span className='glyphicon glyphicon-stats'></span> GCP
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

                        // Links belonging to the sample pages. Kept for reference.
                        //<li>
                        //    <NavLink to={ '/counter' } activeClassName='active'>
                        //        <span className='glyphicon glyphicon-stats'></span> AWS
                        //    </NavLink>
                        //</li>
                        //<li>
                        //    <NavLink to={ '/fetchdata' } activeClassName='active'>
                        //        <span className='glyphicon glyphicon-stats'></span> GCP
                        //    </NavLink>
                        //</li>