import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { changeInput, changeOperation, clearInput, evaluateExpression } from '../Calculator/actions';
import Button from '../../components/Button';
import styles from './style';

class ButtonsGroup extends Component {

    handleInputChange = (number) => {
        this.props.changeInputAction(number);
    }

    handleOperationChange = (operation) => {
        this.props.changeOperationAction(operation);
    }

    render() {
        return (
            <View>
                <View style={styles.buttonsRow}>
                    <Button label={'7'} onPress={() => this.handleInputChange('7')} />
                    <Button label={'8'} onPress={() => this.handleInputChange('8')} />
                    <Button label={'9'} onPress={() => this.handleInputChange('9')} />
                    <Button label={'/'} onPress={() => this.handleOperationChange('/')} />
                </View>
                <View style={styles.buttonsRow}>
                    <Button label={'4'} onPress={() => this.handleInputChange('4')} />
                    <Button label={'5'} onPress={() => this.handleInputChange('5')} />
                    <Button label={'6'} onPress={() => this.handleInputChange('6')} />
                    <Button label={'*'} onPress={() => this.handleOperationChange('*')} />
                </View>
                <View style={styles.buttonsRow}>
                    <Button label={'1'} onPress={() => this.handleInputChange('1')} />
                    <Button label={'2'} onPress={() => this.handleInputChange('2')} />
                    <Button label={'3'} onPress={() => this.handleInputChange('3')} />
                    <Button label={'-'} onPress={() => this.handleOperationChange('-')} />
                </View>
                <View style={styles.buttonsRow}>
                    <Button label={'0'} onPress={() => this.handleInputChange('0')} />
                    <Button label={'.'} onPress={() => this.handleInputChange('.')} />
                    <Button label={'C'} onPress={this.props.clearInputAction} />
                    <Button label={'+'} onPress={() => this.handleOperationChange('+')} />
                </View>
                <View style={styles.buttonsRow}>
                    <Button label={'='} onPress={this.props.evaluateExpressionAction} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = {
    changeInputAction: changeInput,
    changeOperationAction: changeOperation,
    clearInputAction: clearInput,
    evaluateExpressionAction: evaluateExpression
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsGroup);