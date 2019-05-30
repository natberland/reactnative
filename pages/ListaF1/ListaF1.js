import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Card, CardItem, CardSwiper } from 'native-base';

import { SafeAreaView } from 'react-navigation';

export default class ListaF1 extends React.Component {

  state = {

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

  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data.MRData.RaceTable.Races });
      });
  }

  render() {
    const data = this.state.data;
    const loading = this.state.loading;
    if (loading === true) {
      return (<Spinner color='red' />)
    } else {

      let elements = [];
      const qtdItems = data.length;

      for (let i = 0; i < qtdItems; i++) {
        const key = 'indice' + i;
        elements.push(
          <Card key={key}  >
            <CardItem >
              <Text>Rodada: {data[i].round}, </Text>
              <Text>{data[i].raceName}, </Text>

            </CardItem>
            <CardItem>
              <Text>Data: {data[i].date} </Text>

            </CardItem>
            <CardItem>
              <Text>{data[i].Circuit.Location.country} - </Text>
              <Text>{data[i].Circuit.Location.locality}</Text>

            </CardItem>



          </Card>
        );
      }


      return (
        <SafeAreaView style={styles.container}>
          <List>
            {elements}
          </List>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  Card: {
    backgroundColor: '#FF4500',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00FFFF'

  }

});
