import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class ResultField extends Component {
    render() {
        return (
            <TextInput style={styles.input} editable={false} underlineColorAndroid='transparent' />
        );
    }
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'right',
        marginTop: 50,
        marginBottom: 25,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'green',
        color: 'black',
        fontSize: 20
    }
});