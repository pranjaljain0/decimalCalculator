import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Operators = ({selectOperator}) => {
    return (
        <View style={styles.operatorContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {selectOperator('+')}} >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {selectOperator('-')}} >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {selectOperator('*')}} >
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {selectOperator('/')}} >
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Operators

const styles = StyleSheet.create({
    operatorContainer:{
        flex:1,
        flexDirection:"row",
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:"center",
        padding:10,
    },
    button:{
        backgroundColor:'rgba(0,0,0,0.5)',
        height:80,
        width:80,
        margin:10,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:28,
        
    },
})
