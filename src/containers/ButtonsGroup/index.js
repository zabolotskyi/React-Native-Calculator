import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { changeInput, changeOperation, clearInput, evaluateExpression } from '../Calculator/actions';
import Button from '../../components/Button';
import styles from './style';

const ButtonsGroup = ({ changeInputAction, changeOperationAction, clearInputAction, evaluateExpressionAction }) => {
  const handleInputChange = (number) => () => changeInputAction(number);

  const handleOperationChange = (operation) => () => changeOperationAction(operation);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsRow}>
        <Button label={'7'} onPress={handleInputChange('7')} />
        <Button label={'8'} onPress={handleInputChange('8')} />
        <Button label={'9'} onPress={handleInputChange('9')} />
        <Button label={'/'} onPress={handleOperationChange('/')} />
      </View>
      <View style={styles.buttonsRow}>
        <Button label={'4'} onPress={handleInputChange('4')} />
        <Button label={'5'} onPress={handleInputChange('5')} />
        <Button label={'6'} onPress={handleInputChange('6')} />
        <Button label={'*'} onPress={handleOperationChange('*')} />
      </View>
      <View style={styles.buttonsRow}>
        <Button label={'1'} onPress={handleInputChange('1')} />
        <Button label={'2'} onPress={handleInputChange('2')} />
        <Button label={'3'} onPress={handleInputChange('3')} />
        <Button label={'-'} onPress={handleOperationChange('-')} />
      </View>
      <View style={styles.buttonsRow}>
        <Button label={'0'} onPress={handleInputChange('0')} />
        <Button label={'.'} onPress={handleInputChange('.')} />
        <Button label={'C'} onPress={clearInputAction} />
        <Button label={'+'} onPress={handleOperationChange('+')} />
      </View>
      <View style={styles.buttonsRow}>
        <Button label={'='} onPress={evaluateExpressionAction} />
      </View>
    </View>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  changeInputAction: changeInput,
  changeOperationAction: changeOperation,
  clearInputAction: clearInput,
  evaluateExpressionAction: evaluateExpression,
};

ButtonsGroup.propTypes = {
  changeInputAction: PropTypes.func.isRequired,
  changeOperationAction: PropTypes.func.isRequired,
  clearInputAction: PropTypes.func.isRequired,
  evaluateExpressionAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsGroup);
