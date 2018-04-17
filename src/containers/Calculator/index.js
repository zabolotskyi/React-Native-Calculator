import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import Button from '../../components/Button';
import ButtonsGroup from '../../containers/ButtonsGroup';
import ResultField from '../../components/ResultField';
import styles from './style';

export default class Calculator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <ResultField />
                    <ButtonsGroup />
                </ScrollView>
            </View>
        );
    }
}