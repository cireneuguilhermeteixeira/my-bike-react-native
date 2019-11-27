import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import EventCard from '~/components/Events/EventCard/EventCard';
class Events extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#35495e',
            justifyContent: 'flex-end',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: '#fff',
              fontWeight: 'bold',
              padding: 4,
            }}>
            {' '}
            Eventos{' '}
          </Text>
        </View>
        <View style={{height: 5, backgroundColor: '#347474'}} />
        <ScrollView style={{flex: 8, padding: 10}}>
          <EventCard
            eventImage={
              'https://avozdaserra.com.br/sites/default/files/noticias/foto-3-route-mtb_0.jpg'
            }
            descEvent={'Bike do Leão'}
            quantPart={'20'}
          />
          <EventCard
            eventImage={
              'https://avozdaserra.com.br/sites/default/files/galeria/foto-4-calendario-ciclismo.jpg'
            }
            descEvent={'A maior corrida de todas.'}
            quantPart={'100'}
          />

          <EventCard
            eventImage={
              'https://avozdaserra.com.br/sites/default/files/noticias/foto-3-route-mtb_0.jpg'
            }
            descEvent={'Vamos em busca de um corpo saudável. '}
            quantPart={'20'}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Events;
