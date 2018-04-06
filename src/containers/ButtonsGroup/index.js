import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { addNumber } from '../Calculator/actions';
import Button from '../../components/Button';

class ButtonsGroup extends Component {

    constructor() {
        super();
        this.state = {
            needSecondNumber: true
        }
    }

    handleInputChange = (number) => {
        this.props.onChangeInput(number);
    }

    render() {
        return (
            <View>
                <View style={styles.buttonRow}>
                    <Button label={'7'} onPress={this.handleInputChange('7')} />
                    <Button label={'8'} />
                    <Button label={'9'} />
                    <Button label={'/'} />
                </View>
                <View style={styles.buttonRow}>
                    <Button label={'4'} />
                    <Button label={'5'} />
                    <Button label={'6'} />
                    <Button label={'*'} />
                </View>
                <View style={styles.buttonRow}>
                    <Button label={'1'} />
                    <Button label={'2'} />
                    <Button label={'3'} />
                    <Button label={'-'} />
                </View>
                <View style={styles.buttonRow}>
                    <Button label={'0'} />
                    <Button label={'.'} />
                    <Button label={'C'} />
                    <Button label={'+'} />
                </View>
                <View style={styles.buttonRow}>
                    <Button label={'='} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = {
    onAdd: addNumber
};

const styles = StyleSheet.create({
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsGroup);