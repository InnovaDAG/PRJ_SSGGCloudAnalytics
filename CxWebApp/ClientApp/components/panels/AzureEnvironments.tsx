import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Bar } from 'nivo';
// const Bar = require('nivo');

interface OverviewData {
    month: string;
    value: number;
}

interface PanelState {
    chartData: any[];
    loading: boolean;
}

export class AzureEnvironments extends React.Component<RouteComponentProps<{}>, {}> {

    public state: PanelState;

    constructor(props: any) {
        super(props);
        this.state = { chartData: [], loading: true };
    }

    componentDidMount() {
        fetch('https://authwebapipilot.azurewebsites.net/api/webapp/get')
            .then(result => result.json())
            .then(items => this.setState({ chartData: items }))
    }

    public render() {
        return <div className='content'>
            <h1>Azure Environments</h1>
            <div className='col-sm-6'>
                <Bar data={[{ "month": "Jan", "value": 150, "val2": 100 }, { "month": "Feb", "value": 120, "val2": 100 }, { "month": "Mar", "value": 85, "val2": 85 }, { "month": "Apr", "value": 220, "val2": 120 }, { "month": "May", "value": 125, "val2": 100 }, { "month": "Jun", "value": 110, "val2": 100 }, { "month": "Jul", "value": 90, "val2": 100 }, { "month": "Aug", "value": 95, "val2": 130 }, { "month": "Sep", "value": 135, "val2": 100 }, { "month": "Oct", "value": 150, "val2": 160 }, { "month": "Nov", "value": 140, "val2": 100 }, { "month": "Dec", "value": 135, "val2": 90 }]}
                    keys={["value", "val2"]}
                    indexBy="month"
                    margin={{
                        "top": 50,
                        "right": 60,
                        "bottom": 50,
                        "left": 60
                    }}
                    groupMode="stacked"
                    width={450} height={350}
                    xPadding={0.2}
                    axisBottom={{
                        "orient": "bottom",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Month",
                        "legendPosition": "center",
                        "legendOffset": 36
                    }}
                    axisLeft={{
                        "orient": "left",
                        "tickSize": 5,
                        "tickPadding": 5,
                        "tickRotation": 0,
                        "legend": "Spend",
                        "legendPosition": "center",
                        "legendOffset": -40
                    }}
                    enableGridX={false}
                    enableGridY={true}
                    enableLabels={true}
                    labelsTextColor="inherit:darker(1.6)"
                    labelsLinkColor="inherit"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    isInteractive={true}
                />
            </div>
            <div className='col-sm-6'>
                <p>Placeholder for a left chart fitting in a 6 units column as defined by Bootstrap</p>
            </div>
        </div>;
    }
}
