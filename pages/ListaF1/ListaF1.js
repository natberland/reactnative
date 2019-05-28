import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem } from 'native-base';

import { SafeAreaView } from 'react-navigation';

export default class ListaF1 extends React.Component {
  
    state = {
        loading : true,
        data: [],
    };
  
    static navigationOptions = () => {
        return {
            title: 'Temporadas',
        };
    }

  componentDidMount() {
      const season = this.props.navigation.getParam('season');
      this.getData(season);
  }

  getData(seasons) {
    fetch(`http://ergast.com/api/f1/${seasons}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.MRData.RaceTable.Races });
      });
  }
  

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
              <Text>oi</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
