import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Equal = ({ACPressHandler,EqualVal,delFromQueue}) => {
    return (
        <View style={styles.operatorContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {ACPressHandler()}} >
                    <Text style={styles.buttonText}>AC</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {EqualVal()}} >
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {delFromQueue()}} >
                    <Text style={styles.buttonText}></Text>
                </TouchableOpacity>
        </View>
    )
}

export default Equal

const styles = StyleSheet.create({
    operatorContainer:{
        flex:0.5,
        flexDirection:"row",
        flexWrap:'wrap',
        alignContent:'flex-end',
        justifyContent:"center",
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
