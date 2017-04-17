/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Moment from 'moment';

import DayItem from './src/day-item';

//建立一個Component
export default class weekdays extends Component {
	render() {
		return (
			<View style={styles.container}>
				{ this.days() }
			</View>
		);
	}
	days(){
		let dayItems = [];
		for(let i=0; i<7; i++){
			let day = Moment().add(i,'days').format('dddd');
			dayItems.push( <DayItem key={i} days={day} daysUntil={i}/> );
		}
		return dayItems;
	}
}

//美化Component
const styles = StyleSheet.create({
	container: {
		flex: 1, //height: 100%, width: 100%
		justifyContent: 'center',
		//justifyContent: 'flex-end',
		alignItems: 'center'
		//alignItems: 'flex-start'
	}
});

//顯示Component
AppRegistry.registerComponent('weekdays', () => weekdays);
