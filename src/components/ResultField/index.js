import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextInput } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { selectResult } from '../../containers/Calculator/selectors';
import styles from './style';

const ResultField = (props) => (
  <TextInput style={styles.input} editable={false} underlineColorAndroid="transparent" value={`${props.result}`} />
);

const mapStateToProps = createStructuredSelector({
  result: selectResult(),
});

ResultField.propTypes = {
  result: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ResultField);
