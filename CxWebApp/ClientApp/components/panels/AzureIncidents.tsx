import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class AzureIncidents extends React.Component<RouteComponentProps<{}>, {}> {

    // TODO: Check if constructor requires, or it's advised to add "props" as parameter. This context require a type.
    constructor() {
        super();
        this.state = {
            chartData: []
        };
    }

    componentDidMount() {
        fetch('https://authwebapipilot.azurewebsites.net/api/webapp/get')
            .then(result => result.json())
            .then(items => this.setState({ chartData: items }))
    }

    public render() {
        return <div className='content'>
            <h1>Azure Incidents</h1>
            <div className='col-sm-6'>
                <p>Placeholder for a left chart fitting in a 4 units column as defined by Bootstrap</p>
            </div>
            <div className='col-sm-6'>
                <p>Placeholder for a left chart fitting in a 4 units column as defined by Bootstrap</p>
            </div>
        </div>;
    }
}
