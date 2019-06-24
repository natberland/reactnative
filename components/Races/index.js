import React, { PureComponent } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button, Text } from 'native-base';
import style from './style';


class RacesView extends PureComponent {
    renderListRaces() {
        let races = <View>
            {this.props.races.map((races, key) => {
                return (
                    <Button key={key} 
                        onPress={ () => this.props.handlerClick(key) }
                        style={style.button}>
                        <Text style={{width: '100%', textAlignVertical: 'center', textAlign: 'center'}}>
                            {races.Circuit.circuitName}
                        </Text>
                    </Button>
                );
            })}
        </View>;

        return races;
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={style.container}>
                        {this.renderListRaces()}
                    </View>
                </ScrollView>
                
            </SafeAreaView>
        );
    }
}

export default RacesView;