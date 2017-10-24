import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const PlacesDetail = (places) => {
    console.log(places.places)
    return (
        <View  style={styles.cardStyle}>
        <View style={styles.topStyle}>
            
            </View>
            <View style={styles.bottomStyle}>
            <Text style={styles.namaStyle}>{places.places.nama}</Text>
                </View>
            </View>
    )

}
const styles = {
    cardStyle: {
    },
    topStyle: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flex: 5
    },
    namaStyle: {
        color: 'white',
        fontSize: 20
    },
    bottomStyle: {
        flex: 1,
        backgroundColor: 'black'
    }
}

export default PlacesDetail;
