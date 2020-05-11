import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, Modal, ToastAndroid } from 'react-native';
import firebaseApp from '../../FirebaseConnection';



export default class Cozinha extends Component {

    logout() {
        firebaseApp.auth().signOut().then(() => {
            this.props.navigation.replace("Login")
        })

    }

    render(){
        return (
            <View>
                <TouchableOpacity>
                    <Text>
                        Perfil
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.logout()}>
                    <Text>
                        Sair
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

}