import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid, ImageBackground, Keyboard, ScrollView } from 'react-native';
import firebaseApp from '../../FirebaseConnection'
import styles from './Styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../styles/colors'
const backgroundImage = require("../../img/background.png")
const comandico = require("../../img/comandico.png")
import { TextInputMask } from 'react-native-masked-text'




export default class CompanyData extends Component {



    changeData = () => {
        this.setState({ editable: !this.state.editable })
        if (this.state.btnAlterar == "Alterar Dados") {
            this.setState({ btnAlterar: "Concluir" })
        } else {
            if (this.state.cnpj == "" || this.cnpjField.isValid()) {
                // let userId = firebaseApp.auth().currentUser.uid
                // firebaseApp.database().ref("Users").child(userId).update({
                //     "Name": this.state.name.trim(),
                //     "Phone": this.state.phone.trim(),
                //     "CPF": this.state.cpf.trim(),
                //     "Birth": this.state.birth.trim(),
                //     "IncompleteProfile": (this.state.name == "" || this.state.phone == "" || this.state.cpf == "" || this.state.birth == "") ? true : false
                // }).then(() => {
                //     this.setState({ btnAlterar: "Alterar Dados" })

                // })
            } else {
                ToastAndroid.show("CNPJ inválido!", ToastAndroid.LONG);
            }

        }
    }

    state = {
        btnAlterar: "Alterar Dados",
        editable: false,
        cnpj: "",
        razaoSocial: "",
        nomeFantasia: "",
        phone: "",
        city: "",
        estado: "",
        address: ""

    }

    render() {
        return (
            <ImageBackground source={backgroundImage} resizeMode="repeat" style={styles.container}>



                <View style={{ marginTop: 80, alignItems: 'center', justifyContent: 'flex-end', paddingHorizontal: 20 }}>
                    <Text style={styles.titulo}>Aqui você pode consultar e alterar os dados do estabelecimento</Text>
                </View>


                <TouchableOpacity style={this.state.editable ? styles.cardViewDone : styles.cardView}
                    onPress={() => { this.changeData() }}>

                    <Text style={styles.cardText}>
                        {this.state.btnAlterar}
                    </Text>

                    <Icon name="arrow-right" size={20} color={"#FFFFFF"}></Icon>
                </TouchableOpacity>
                <ScrollView style={{ width: '100%' }}>
                    <View style={{ flex: 10, paddingHorizontal: 20 }}>


                        <View style={this.state.editable ? styles.viewInput : styles.viewInputDisabled}>
                            <Icon style={styles.iconInput} name="account-card-details-outline" size={20} color={Colors.primary} />

                            <TextInputMask style={styles.input} type={'cnpj'} editable={this.state.editableField} value={this.state.cnpj} keyboardType="number-pad"
                                placeholder="CNPJ" ref={(ref) => this.cnpjField = ref}
                                onChangeText={cnpj => { this.setState({ cnpj }) }}
                                onSubmitEditing={() => { this.razaoSocialField.focus() }} blurOnSubmit={false} />
                        </View>

                        <View style={this.state.editable ? styles.viewInput : styles.viewInputDisabled}>
                            <Icon style={styles.iconInput} name="account-card-details-outline" size={20} color={Colors.primary} />

                            <TextInput style={styles.input} editable={this.state.editableField} value={this.state.razaoSocial}
                                placeholder="Razão Social da Empresa" ref={(ref) => this.razaoSocialField = ref}
                                onChangeText={razaoSocial => { this.setState({ razaoSocial }) }}
                                onSubmitEditing={() => { this.nomeFantasiaField.focus() }} blurOnSubmit={false} />
                        </View>

                        <View style={this.state.editable ? styles.viewInput : styles.viewInputDisabled}>
                            <Icon style={styles.iconInput} name="account-card-details-outline" size={20} color={Colors.primary} />

                            <TextInput style={styles.input} editable={this.state.editableField} value={this.state.nomeFantasia}
                                placeholder="Nome Fantasia da Empresa" ref={(ref) => this.nomeFantasiaField = ref}
                                onChangeText={nomeFantasia => { this.setState({ nomeFantasia }) }}
                                onSubmitEditing={() => { this.telefoneField.getElement().focus() }} blurOnSubmit={false} />
                        </View>

                        <View style={this.state.editable ? styles.viewInput : styles.viewInputDisabled}>
                            <Icon style={styles.iconInput} name="phone" size={20} color={Colors.primary} />

                            <TextInputMask style={styles.input} type={'cel-phone'} options={{ maskType: 'BRL', withDDD: true, dddMask: '(99) ' }}
                                editable={this.state.editableField} value={this.state.phone} keyboardType="phone-pad"
                                placeholder="Telefone" onChangeText={phone => this.setState({ phone })}
                                onSubmitEditing={() => { this.cityField.focus() }} blurOnSubmit={false} ref={(input) => { this.telefoneField = input; }} />
                        </View>

                        <View style={this.state.editable ? styles.viewInput : styles.viewInputDisabled}>
                            <Icon style={styles.iconInput} name="phone" size={20} color={Colors.primary} />

                            <TextInput style={styles.input}
                                editable={this.state.editableField} value={this.state.city}
                                placeholder="Cidade" onChangeText={city => this.setState({ city })}
                                onSubmitEditing={() => { this.estadoField.focus() }} blurOnSubmit={false} ref={(input) => { this.cityField = input; }} />
                        </View>

                        <View style={this.state.editable ? styles.viewInput : styles.viewInputDisabled}>
                            <Icon style={styles.iconInput} name="phone" size={20} color={Colors.primary} />

                            <TextInput style={styles.input}
                                editable={this.state.editableField} value={this.state.estado}
                                placeholder="Estado (UF)" onChangeText={estado => this.setState({ estado })}
                                onSubmitEditing={() => { this.addressField.focus() }} blurOnSubmit={false} ref={(input) => { this.estadoField = input; }} />
                        </View>

                        <View style={this.state.editable ? styles.viewInput : styles.viewInputDisabled}>
                            <Icon style={styles.iconInput} name="phone" size={20} color={Colors.primary} />

                            <TextInput style={styles.input}
                                editable={this.state.editableField} value={this.state.address}
                                placeholder="Endereço" onChangeText={address => this.setState({ address })}
                                onSubmitEditing={() => { this.addressNumberField.focus() }} blurOnSubmit={false} ref={(input) => { this.addressField = input; }} />
                        </View>

                        <View style={this.state.editable ? styles.viewInput : styles.viewInputDisabled}>
                            <Icon style={styles.iconInput} name="phone" size={20} color={Colors.primary} />

                            <TextInput style={styles.input}
                                editable={this.state.editableField} value={this.state.addressNumber}
                                placeholder="Número" onChangeText={addressNumber => this.setState({ addressNumber })}
                                onSubmitEditing={() => { this.cpfField.getElement().focus() }} blurOnSubmit={false} ref={(input) => { this.addressNumberField = input; }} />
                        </View>


                    </View>






                </ScrollView>


            </ImageBackground>
        )
    }

}