import React from 'react';
import {
    SafeAreaView,
    Text,
    ScrollView
} from 'react-native';
import CellFriend from '~/components/Friend/CellFriend'

class Friends extends React.Component {
    render() {

        return (
            <ScrollView style={{ flex: 1 }} >
                <CellFriend userImage={'https://scontent-gru2-2.cdninstagram.com/vp/7c7cfc83ff276d3cc2724baec06b7b9e/5E88ED82/t51.2885-19/s150x150/75454120_760211051095283_3252919186728419328_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com'} userLogin={"marcelo_sousa"} userName="Marcelo de Sousa" />
                <CellFriend userImage={'https://scontent-gru2-2.cdninstagram.com/vp/26b6063882685b000949aca3b1ceb35c/5E743318/t51.2885-19/s150x150/67121286_964607053931510_8510395555774464000_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com'} userLogin={"celsosales"} userName="Celso Sales" />
                <CellFriend userImage={'https://scontent-gru2-2.cdninstagram.com/vp/c9640b7706f56dd9af6e2f5bfc00dd36/5E8367B8/t51.2885-19/s150x150/56398521_282003452728766_5999179756065521664_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com'} userLogin={"tiagodio_"} userName="Tiago Dionizio" />


            </ScrollView>
        );
    }
}


export default Friends;