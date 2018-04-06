import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Button extends Component {
    render() {
        const { onPress, label } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={onPress}
                >
                    <Text style={styles.text}>{label}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        width: 50,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 5
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    }
})