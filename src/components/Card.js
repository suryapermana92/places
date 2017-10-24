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
        borderColor: 'orange',
        borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
        padding: 10,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5 
    }
}

export default Card;
