import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, Modal, ToastAndroid } from 'react-native';
import firebaseApp from '../../FirebaseConnection';



export default class Perfil extends Component {

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

                <TouchableOpacity onPress={()=> {this.props.navigation.navigate("ComanDash")}} style={{marginTop: 50}}>
                    <Text style={{fontSize: 24}}>COMANDASH</Text>
                </TouchableOpacity>
            </View>
        )
    }

}