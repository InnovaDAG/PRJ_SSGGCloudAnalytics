import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
// Routes excluded from live site, but kept for illustration proposes.
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
import { AzureOverview } from './components/panels/AzureOverview';
import { AzureEnvironments } from './components/panels/AzureEnvironments';
import { AzureIncidents } from './components/panels/AzureIncidents';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/azure/overview' component={ AzureOverview } />
    <Route path='/azure/environments' component={ AzureEnvironments } />
    <Route path='/azure/incidents' component={ AzureIncidents } />
</Layout>;

    // Routes excluded from live site, but kept for illustration proposes.
    //<Route path='/counter' component={ Counter } />
    //<Route path='/fetchdata' component={ FetchData } />