import React, { PureComponent } from 'react';
import { ScrollView } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
import style from './style';

class DriverInfo extends PureComponent {
    render() {
        return (<ScrollView>
            {this.props.drivers.map((driver, key) => {
                return (
                    <Card key={key}>
                        <CardItem header>
                            <Text>{driver.givenName} {driver.familyName}</Text>
                        </CardItem>
                        <CardItem header>
                            <Text>{driver.nationality}</Text>
                        </CardItem>
                        <CardItem header>
                            <Text>Birhday: {driver.dateOfBirth}</Text>
                        </CardItem>
                    </Card>
                );
            })}
        </ScrollView>)
    }
}

export default DriverInfo;
