import React, {Component} from 'react';
import { Image, View, Text} from 'react-native';





class Avatar extends React.Component {
   
      render() {

        return (
            <View style={{height:120, marginLeft:20}}>
                <View style={{flex:2}}>
                    <Image
                    source={this.props.imageUri}
                    style={{flex:1, width:null, borderRadius:50, height: null, resizeMode: 'cover'}}
                    />
                </View>
                <View style={{flex:1, paddingLeft:10,paddingTop:10}}>
                    <Text style={{paddingLeft:-10}}>{this.props.name}</Text>
                </View>
            </View>
            
           );
      }
}



export default Avatar;