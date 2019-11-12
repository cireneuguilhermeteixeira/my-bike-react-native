import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider,ListItem } from 'react-native-elements'
import { Col, Grid } from "react-native-easy-grid";

import Avatar from '~/pages/perfil/avatar/avatar';
import Slideshow from 'react-native-slideshow';


class Perfil extends React.Component {


    componentWillMount() {
        this.setState({
        interval: setInterval(() => {
            this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
        }, 5000)
        });
    }
        
    
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    constructor() {
    
        super();
        this.state = {
            position: 1,

            interval: null,
            dataSource: [
            {
                title: 'Nome evento 1',
                caption: 'local endereço 1',
                url: 'https://avozdaserra.com.br/sites/default/files/noticias/foto-3-route-mtb_0.jpg',
            }, {
                title: 'Nome evento 2',
                caption: 'local endereço 2',
                url: 'https://avozdaserra.com.br/sites/default/files/galeria/foto-4-calendario-ciclismo.jpg',
            }, {
                title: 'Nome evento 3',
                caption: 'local endereço 3',
                url: 'https://cdn.ticketagora.com.br/ticketagora/images/LQTEPJVC7VKNFDR6ANV129N8IXGGHCG37Q2EFM3J3APX3ZRS30.png',
            },
            ],
        };
    
    }

    render(){

    
    

        
        return(
            <View>
                <View style={{height:120}}>
                    <Grid>
                        <Col style={{marginTop:20}}>
                            <Text style={{fontSize:13, fontWeight:'bold'}}>Cireneu Guilherme</Text>
                            <Image
                            source={require("../../assets/imgs/eu.png")}
                            style={{width:70, height:70, borderRadius:50,  resizeMode: 'cover'}}
                            />
                        </Col>

                        <Col style={{marginTop:50, marginLeft:10}}>
                            <Icon name="ios-settings" color={'gray'} size={24}/>
                            <Text>Quilometragem</Text>
                        </Col>

                        <Col style={{marginTop:50, marginLeft:10}}>
                            <Icon name="ios-settings" color={'gray'} size={24}/>
                            <Text>Amigos</Text>
                        </Col>

                        <Col style={{marginTop:50, marginLeft:10}}>
                            <Icon name="ios-settings" color={'gray'} size={24}/>
                            <Text>Eventos</Text>
                        </Col>

                        <Col style={{marginTop:50, marginLeft:10}}>
                            <Icon name="ios-settings" color={'gray'} size={24}/>
                            <Text>Conquistas</Text>
                        </Col>
                    </Grid>
                </View>
                <View>
                    <View style={{height: 150, marginTop: 20, margin: 10}}>
                        <Text>Meus Amigos</Text>
                        <Divider style={{ backgroundColor: '#979797' }} />
                        <ScrollView
                            style={{marginTop:10}}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                    
                           <Avatar
                           imageUri={require("../../assets/imgs/avatar.jpg")}
                           name="Usuário 1"
                           />
                            <Avatar
                           imageUri={require("../../assets/imgs/avatar.jpg")}
                           name="Usuário 2"
                           />
                            <Avatar
                           imageUri={require("../../assets/imgs/avatar.jpg")}
                           name="Usuário 3"
                           />
                            <Avatar
                           imageUri={require("../../assets/imgs/avatar.jpg")}
                           name="Usuário 4"
                           />
                            <Avatar
                           imageUri={require("../../assets/imgs/avatar.jpg")}
                           name="Usuário 5"
                           />
                            <Avatar
                           imageUri={require("../../assets/imgs/avatar.jpg")}
                           name="Usuário 6"
                           />
                        
                            
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={{margin:5}}>Meus Eventos</Text>
                        <Divider style={{ backgroundColor: '#979797' }} />
                        <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position =>   this.setState({ position })}
                        />
                    </View>
                </View>            
                
                <View style={{marginTop:20, height:300}}>
                    <ListItem
                        style = {{marginTop: 5}}
                        roundAvatar
                        title="Calorias"
                        rightTitle="3450 KCAL"
                    />
                <ListItem
                        style = {{marginTop: 5}}
                        roundAvatar
                        title="Carboidratos"
                        rightTitle="100 g"
                    />
                <ListItem
                        style = {{marginTop: 5}}
                        roundAvatar
                        title="Proteína"
                        rightTitle="150 g"
                    />
                    <ListItem
                        style = {{marginTop: 5}}
                        roundAvatar
                        title="Gorduras"
                        rightTitle="80 g"
                    />    
                </View>

            </View>
        );
    }
}


export default Perfil;