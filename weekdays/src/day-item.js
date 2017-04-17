import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//建立一個Component, 並export出去
export default class DayItem extends Component {
    render(){
        let {days} = this.props;
        return(
            <Text style={styles.day}>
                {days}
            </Text>
        );
    }
}

//美化Component
const styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#87CEFA',
  }
});