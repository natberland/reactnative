import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import style from './style';


class RaceInfo extends PureComponent {
    renderRace() {
        let raceResults = <View>
            {this.props.raceResults.map((race, key) => {
            return (
                <Card key={key}>
                    <CardItem header>
                        <Text># {race.round} {race.raceName}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Winner: {race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}</Text>    
                    </CardItem>
                    <CardItem>
                        <Text>Nationality: {race.Results[0].Driver.nationality}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Team: {race.Results[0].Constructor.name}</Text>
                    </CardItem>
                    <CardItem>
                        <Text>Race Time: {race.Results[0].Time.time}</Text>
                    </CardItem>
                    <CardItem footer>
                        <Text>Race Date: {race.date}</Text>
                    </CardItem>
                </Card>
            );
            })}
        </View>;

        return raceResults;
    }

    render() {
        return (
            <View>
                {this.renderRace()}
            </View>
        );
    }
}

export default RaceInfo;