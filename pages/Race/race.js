import React from 'react';
import { SafeAreaView } from 'react-navigation';
import RaceInfo from '../../components/RaceInfo';
import { Spinner, View } from "native-base";

export default class Race extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            raceResults: [],
            loading: false
        };
        
    }

    static navigationOptions = () => {
        return {
            title: 'Race',
        };
    }

    componentDidMount() {
        const race = this.props.navigation.getParam('race');
        const year = this.props.navigation.getParam('year');        

        this.getRace(race, year);
    }

    getRace(race, year) {
        fetch(`http://ergast.com/api/f1/${year}/${race}/results.json`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            this.setState({
                raceResults: data.MRData.RaceTable.Races,
                loading: true
            });
        })
    }

    render() {
        let spinner;

        if (!this.state.loading) {
            spinner = <Spinner color='b30000' />;
        };

        return (
            <SafeAreaView>
                <View>{spinner}</View>
                <RaceInfo raceResults={this.state.raceResults}></RaceInfo>
            </SafeAreaView>
        );
    }

}