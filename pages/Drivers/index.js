import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, CardSwiper, Spinner } from 'native-base';
import DriverInfo from '../../components/DriverInfo'

import { SafeAreaView } from 'react-native';

export default class Drivers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drivers: [],
            loading: false
        };

        this.navigateTo = this.navigateTo.bind(this);
    }

    static navigationOptions = () => {
        return {
            title: 'Drivers',
        };
    }

    componentDidMount() {
        console.log('getInfoF1ByYear')
        const year = this.props.navigation.getParam('year');
        this.getInfoF1ByYear(year);
    }

    getInfoF1ByYear(year) {
        let urls = [
            `http://ergast.com/api/f1/${year}.json`,
            `http://ergast.com/api/f1/${year}/drivers.json`
        ]

        Promise.all(urls.map(url => fetch(url)))
            .then(responses =>
                Promise.all(responses.map(res => res.json()))
            ).then(data => {
                console.log(data)
                this.setState({
                    drivers: data[1].MRData.DriverTable.Drivers,
                    loading: true
                })
            })
    }

    navigateTo(driver) {
        const year = this.props.navigation.getParam('year');

        this.props.navigation.navigate('Driver', {
            driver,
            year
        });
    }

    render() {
        let spinner;

        if (!this.state.loading) {
            spinner = <Spinner color='bf0000' />;
        };
        return (
            <SafeAreaView>
                {spinner}
                <DriverInfo drivers={this.state.drivers} handlerClick={this.navigateTo}></DriverInfo>
            </SafeAreaView>
        );
    }

}
