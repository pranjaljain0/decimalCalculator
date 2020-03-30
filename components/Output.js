import React from 'react'
import { StyleSheet, Text, View  } from 'react-native'

const Output = ({outputQueue}) => {
    return (
        <View style={styles.outputContainer}>
            <Text style={styles.outputText}>{outputQueue}</Text>
        </View>
    )
}

export default Output

const styles = StyleSheet.create({
    outputContainer:{
        flex:1,
        justifyContent:"center",
        padding:20,
    },
    outputText:{
        textAlign:"right",
        alignContent:'flex-end',
        fontSize:48,
    },
})
