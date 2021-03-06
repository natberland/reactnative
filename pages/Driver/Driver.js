import React from 'react';
import { SafeAreaView } from 'react-navigation';
import DriverDetails from '../../components/Driver';
import { Spinner, View } from "native-base";

export default class Driver extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drivers: [],
            loading: false
        };
        
    }

    static navigationOptions = () => {
        return {
            title: 'Driver',
        };
    }

    componentDidMount() {
        const driver = this.props.navigation.getParam('driver');
        const year = this.props.navigation.getParam('year');        

        this.getDriver(driver, year);
    }

    getDriver(driver, year) {
        fetch(`http://ergast.com/api/f1/drivers/${driver}.json`)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                drivers: data.MRData.DriverTable.Drivers,
                loading: true
            });
        })
    }

    render() {
        let spinner;

        if (!this.state.loading) {
            spinner = <Spinner color='bf0000' />;
        };

        return (
            <SafeAreaView>
                <View>{spinner}</View>
                <DriverDetails drivers={this.state.drivers}></DriverDetails>
            </SafeAreaView>
        );
    }

}