import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { createStructuredSelector } from 'reselect';
import Button from '../../components/Button';
import ButtonsGroup from '../../containers/ButtonsGroup';
import ResultField from '../../components/ResultField';

class Calculator extends Component {
    render() {
        return (
            <ScrollView>
               <ResultField />
               <ButtonsGroup />
            </ScrollView>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    
});

export default connect(mapStateToProps)(Calculator);