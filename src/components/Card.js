import React, { Component } from 'react';
import { View, Text } from 'react-native';


const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
            </View>
    )

}
const styles = {
    cardStyle: {
        backgroundColor: '#f8fccf',
        height: 200,
        borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        elevation: 5
    }
}

export default Card;
