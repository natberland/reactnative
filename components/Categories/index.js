import React, {  PureComponent } from 'react';
import { View } from 'react-native';
import { Button, Text, Image } from 'native-base';
import style from './style';

class Categories extends PureComponent {
    render() {
        const year = this.props.navigation.getParam('year');
        return <View style={style.container}>
            <Button block onPress={() => this.props.navigation.navigate("Races", { year })} style={style.button}>
                <Text>
                    Races
                </Text>
            </Button>
            <Button block onPress={() => this.props.navigation.navigate("Drivers", { year })} style={style.button}>
                <Text>
                    Drivers
                </Text>
            </Button>
        </View>;
    }
}

export default Categories;