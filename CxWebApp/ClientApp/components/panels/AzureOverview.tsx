import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { VictoryChart, VictoryBar, VictoryPie, VictoryAxis, VictoryTheme } from 'victory';

interface OverviewData {
    month: string;
    value: number;
}

interface AzureOverviewState {
    chartData: OverviewData[];
    loading: boolean;
}

export class AzureOverview extends React.Component<RouteComponentProps<{}>, {}> {

    public state: AzureOverviewState;

    // TODO: Check if constructor requires, or it's advised to add "props" as parameter. This context require a type.
    constructor(props: any) {
        super(props);
        this.state = { chartData: [], loading: true };
    }

    componentDidMount() {
        fetch('https://authwebapipilot.azurewebsites.net/api/webapp/get')
            .then(result => result.json()  as Promise<OverviewData[]>)
            .then(items => this.setState({ chartData: items, loading: false }))
    }

    public render() {
        // TODO: Solve problem when assigning this.state.chartData

        return <div className='content'>
            <h1>Azure Overview</h1>
            <div className='col-sm-6'>
                <VictoryChart domainPadding={20} theme={VictoryTheme.material} width={500} height={350} >
                    <VictoryAxis />
                    <VictoryAxis dependentAxis tickFormat={(x) => (`$${x}`)} />
                    <VictoryBar data={ this.state.chartData } x="month" y="value" />
                </VictoryChart>
            </div>
            <div className='col-sm-6'>
                    <VictoryPie data={ this.state.chartData }
                     theme={VictoryTheme.material} 
                     width={250} height={250}
                     labels={(d) => d.x } 
                     labelRadius={50}
                     style={{ labels: { fill: "black", fontSize: 8  } }}
                     y="value" x="month" />
            </div>
            <div className='col-sm-6'>
                    <VictoryPie data={ this.state.chartData }
                     theme={VictoryTheme.material} 
                     width={250} height={250}
                     labels={(d) => d.x } 
                     labelRadius={50}
                     style={{ labels: { fill: "black", fontSize: 8  } }}
                     y="value" x="month" />
            </div>
            <div className='col-sm-6'>
                <VictoryChart domainPadding={20} theme={VictoryTheme.material} width={500} height={350} >
                    <VictoryAxis />
                    <VictoryAxis dependentAxis tickFormat={(x) => (`$${x}`)} />
                    <VictoryBar data={ this.state.chartData } x="month" y="value" />
                </VictoryChart>
            </div>
        </div>;
    }
}
