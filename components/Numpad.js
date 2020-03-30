import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Numpad = ({onPressHandler}) => {
    return (
        <View style={styles.numpadContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(1)}} >
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(2)}} >
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(3)}} >
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(4)}} >
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(5)}} >
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(6)}} >
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(7)}} >
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(8)}} >
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onPressHandler(9)}} >
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Numpad

const styles = StyleSheet.create({
    numpadContainer:{
        flex:2,
        flexDirection:"row",
        flexWrap:'wrap',
        alignContent:'center',
        justifyContent:"center",
        padding:10,
    },
    button:{
        backgroundColor:'rgba(0,0,0,0.5)',
        height:90,
        width:90,
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
