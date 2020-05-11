import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../styles/colors'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height
    },

    
    titulo: {
        fontFamily: "Century Gothic",
        textAlign: 'center',
        fontSize: 20,
        color: "#FFFFFF"
    },

    cardView:{
        width: "100%",
        marginTop: 10, 
        height: 60,
        alignItems: 'center',
        borderColor: '#FFF',
        borderTopWidth: 0.3,
        borderBottomWidth: 0.3,
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,


    },

    cardViewDone:{
        width: "100%",
        marginTop: 10, 
        height: 60,
        alignItems: 'center',
        
        justifyContent: 'center',
        backgroundColor: Colors.green,
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,


    },

    cardText:{
        fontSize: 16,
        fontFamily: "Century Gothic",
        color: "#FFFFFF",
    },

    viewInput: {

        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

    },

    viewInputDisabled: {

        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#4D4D4D',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

    },


    iconInput: {
        padding: 10
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#4D4D4D',


    },

})