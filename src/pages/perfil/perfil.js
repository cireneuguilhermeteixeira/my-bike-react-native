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
import MeuSlide from '~/pages/perfil/slide/meu-slide';
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
            <ScrollView>
                <View style={{alignItems:'center', height:50, backgroundColor: "#347474"}}>
                    <Text style={{marginTop:10, color:'#fff',fontSize:20 }}>My Bike</Text>
                </View>
                <View style={{height:120}}>
                    <Grid>
                        <Col style={{marginTop:20}}>
                            <Image
                            source={require("../../assets/imgs/eu.png")}
                            style={{width:70, height:70, borderRadius:50,  resizeMode: 'cover'}}
                            />
                            <Text style={{marginLeft:10, fontSize:13, fontWeight:'bold'}}>Cireneu Guilherme</Text>
                        </Col>

                        <Col style={{marginTop:40, marginLeft:10}}>
                            <Icon style={{marginLeft:25}} name="ios-stopwatch" color={'gray'} size={24}/>
                            <Text style={{fontSize:10}}>Quilometragem</Text>
                        </Col>

                        <Col style={{marginTop:40, marginLeft:20}}>
                            <Icon style={{marginLeft:5}} name="ios-people" color={'gray'} size={24}/>
                            <Text style={{fontSize:10}}>Amigos</Text>
                        </Col>

                        <Col style={{marginTop:40, marginLeft:10}}>
                            <Icon style={{marginLeft:8}} name="ios-calendar" color={'gray'} size={24}/>
                            <Text style={{fontSize:10}}>Eventos</Text>
                        </Col>

                        <Col style={{marginTop:40, marginLeft:10}}>
                            <Icon style={{marginLeft:15}} name="ios-medal" color={'gray'} size={24}/>
                            <Text style={{fontSize:10}}>Conquistas</Text>
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
                    <Text style={{margin:5}}>Minhas Conquistas</Text>
                    <Divider style={{ backgroundColor: '#979797' }} />
                    <ListItem
                        style = {{marginTop: 5}}
                        leftIcon={{ name: "check" }}
                        title="Pedalador Experiente"
                        subtitle="Pedale 100 km"
                    />

                    <ListItem
                        style = {{marginTop: 5}}
                        leftIcon={{ name: "check" }}
                        title="Nascido pra competir"
                        subtitle="Participe de pelo menos 10 eventos"
                    />
               
                </View>

            </ScrollView>
        );
    }
}


export default Perfil;