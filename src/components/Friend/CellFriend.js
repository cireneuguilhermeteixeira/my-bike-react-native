import React, { Component } from 'react'
import { Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import { Col, Grid, Row } from "react-native-easy-grid";

export default class CellFriend extends Component {
  render() {
    return (

      <Row style={{ alignItems: 'center', marginLeft: 10, marginTop: 30, justifyContent: 'space-between' }}>
        <Row>
          <Image
            source={{ uri: this.props.userImage }}
            style={{ width: 50, height: 50, borderRadius: 30, resizeMode: 'cover' }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.props.userLogin}</Text>

            <Text style={{ fontSize: 13, color: '#9e9e9e' }}>{this.props.userName}</Text>
          </View>
        </Row>
        <TouchableOpacity style={{ alignSelf: 'center', borderWidth: 1, marginRight: 10, borderRadius: 1 }}>
          <Text style={{ fontSize: 12, padding: 5 }}>SEGUIR</Text>
        </TouchableOpacity>


      </Row>


    )
  }
}
