import React from 'react';
import { AppRegistry, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: '',
                    forecast: {
                      main: '-',
                      description: '-',
                      temp: 0
                    }
                  };
  }

  render() {
    return (
    <View style={styles.containerMain}>
      <Text style={styles.textHeader}>Prakiraan Cuaca</Text>

      <View style={styles.box1}>
        <View style={styles.box2}>
          <Text style={styles.textMain}>Masukkan nama kota</Text>
            <View style={styles.boxInput}>
            <TextInput
              style={{ textAlign: 'center', color: 'black', height: 20 }}
              //placeholder="Masukkan Kota"
              onChangeText={(city) => this.setState({ city })}
            />
            </View>

            <Button
              onPress={() => this.state({
                //BelumTahu!
              })}
              title="Lihat"
              accessbilityLabel="Klik untuk melihat"
            />

        </View>

        <View style={styles.box3}>
          <Text style={{ fontSize: 20, color: 'green' }}>
            <Text style={{ fontSize: 30, color: 'blue' }}> {this.state.city}{'\n'}</Text>
            <Text>Suhu{'\t'}{'\t'}{'\t'}: {'\n'}</Text>
            <Text>Cuaca{'\t'}{'\t'}{'\t'}: {'\n'}</Text>
            <Text>Deskripsi{'\t'}: {'\n'}</Text>
          </Text>
        </View>
      </View>

      <Text style={styles.textFooter}>Copyright @deksudiana</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 20
  },
  textMain: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  textFooter: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    padding: 10
  },
  containerMain: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center'
  },
  box1: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'space-around'
  },
  box2: {
    flex: 1.5,
    margin: 10,
    backgroundColor: 'green',
  },
  boxInput: {
    flex: 0.5,
    margin: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around'
  },
  box3: {
    flex: 3,
    backgroundColor: 'lightgreen',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  }
});
