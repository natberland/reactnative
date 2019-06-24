import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';


class DriverDetails extends PureComponent {
    renderListDrivers() {
        let drivers = <View>
            {this.props.drivers.map((driver, key) => {
                return (
                    <Button key={key}
                        onPress={() => this.props.handlerClick(driver.driverId)}
                        style={style.button}>
                        <Text>
                            {driver.familyName}
                        </Text>
                    </Button>
                );
            })}
        </View>;

        return drivers;
    }

    render() {
        return (
            <View>
                {this.renderDriver()}
            </View>
        );
    }
}

export default DriverDetails;