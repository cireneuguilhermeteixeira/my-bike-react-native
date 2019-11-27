import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Col, Grid, Row} from 'react-native-easy-grid';

export default class EventCard extends Component {
  render() {
    return (
      <Col style={{marginTop: 20}}>
        <Image
          source={{uri: this.props.eventImage}}
          style={{
            width: 500,
            height: 200,
            resizeMode: 'cover',
          }}
        />
        <Row style={{justifyContent: 'space-between', flexWrap: 'wrap'}}>
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {this.props.descEvent}
            </Text>
            <Text style={{fontSize: 13, color: '#9e9e9e'}}>
              {'Pessoas nesse evento: ' + this.props.quantPart}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                'Você entrou no evento !',
                'Encontre com seus amigos para pedalar.',
              )
            }
            style={{
              alignSelf: 'center',
              borderWidth: 1,
              marginRight: 10,
              borderRadius: 1,
              margin: 10,
            }}>
            <Text style={{fontSize: 12, padding: 5}}>ENTRAR</Text>
          </TouchableOpacity>
        </Row>
      </Col>
    );
  }
}
