import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Slideshow from 'react-native-slideshow';


class MeuSlide extends React.Component {
    render(){
     
        return(
            <Slideshow
            dataSource={[
                { url:'http://placeimg.com/640/480/any' },
                { url:'http://placeimg.com/640/480/any' },
                { url:'http://placeimg.com/640/480/any' }
            ]}            
            />
        );
    }
}


export default MeuSlide;