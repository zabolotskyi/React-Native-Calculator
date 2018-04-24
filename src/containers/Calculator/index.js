import React from 'react';
import { ScrollView, View } from 'react-native';
import ButtonsGroup from '../../containers/ButtonsGroup';
import ResultField from '../../components/ResultField';
import styles from './style';

export default () => (
  <ScrollView contentContainerStyle={styles.contentContainer}>
    <View style={styles.resultField} >
      <ResultField />
    </View>
    <View style={styles.buttonsGroup}>
      <ButtonsGroup />
    </View>
  </ScrollView>
);
