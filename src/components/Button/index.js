import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

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