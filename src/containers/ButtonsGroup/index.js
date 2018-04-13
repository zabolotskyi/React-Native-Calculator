import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { addNumber, changeInput } from '../Calculator/actions';
import Button from '../../components/Button';
import styles from './style';

class ButtonsGroup extends Component {

    handleInputChange = (number) => {
        this.props.onChangeInput(number);
    }

    render() {
        return (
            <View>
                <View style={styles.buttonRow}>
                    <Button label={'7'} onClick={this.handleInputChange('7')} />
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
    onAdd: addNumber,
    onChangeInput: changeInput
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsGroup);