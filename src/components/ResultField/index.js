import React from 'react';
import { connect } from 'react-redux';
import { TextInput } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { selectResult } from '../../containers/Calculator/selectors';
import styles from './style';

const ResultField = () => {
  const { result } = this.props;
  return (
    <TextInput style={styles.input} editable={false} underlineColorAndroid="transparent" value={`${result}`} />
  );
};

const mapStateToProps = createStructuredSelector({
  result: selectResult(),
});

export default connect(mapStateToProps)(ResultField);
