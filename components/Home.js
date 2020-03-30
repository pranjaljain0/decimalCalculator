import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native'
import Output from './Output';
import Numpad from './Numpad';
import Operators from './Operators';
import Equal from './Equal';

const Home = () => {
    const [outputQueue, setoutputQueue] = useState('0')
    const [selectedOperator, setselectedOperator] = useState('+')
    const [Numeric, setNumeric] = useState(0)

    const onPressHandler=(value)=>{
        if(outputQueue==0)
        setoutputQueue(value)
        else
        setoutputQueue([outputQueue,value].join(''))
    }

    const delFromQueue=()=>{
        setoutputQueue(outputQueue.slice(0,outputQueue.length-1))
    }

    const ACPressHandler=()=>{
        setoutputQueue(0)
    }

    const selectOperator=(val)=>{
        setNumeric(Number(outputQueue))
        setoutputQueue(0)
        setselectedOperator(val)
    }

    const EqualVal=()=>{
        if(selectedOperator=='+')
        setoutputQueue(Numeric+outputQueue)
        else if(selectedOperator=='-')
        setoutputQueue(Numeric-outputQueue)
        else if(selectedOperator=='*')
        setoutputQueue(Numeric*outputQueue)
        else if(selectedOperator=='/')
        setoutputQueue(Numeric/outputQueue)
    }

    return (
        <LinearGradient
            colors={['#FFFDE4','#005AA7',]}
            style={styles.gradView}>
            <Output
                outputQueue={outputQueue}
            />
            <Operators
                selectOperator={selectOperator}
            />
            <Numpad
                onPressHandler={onPressHandler}
            />
            <Equal
                ACPressHandler={ACPressHandler}
                EqualVal={EqualVal}
                delFromQueue={delFromQueue}
            />
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    gradView:{
        flex:1,
    },

})