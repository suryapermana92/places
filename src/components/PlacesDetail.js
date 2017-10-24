import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';

const PlacesDetail = (places) => {
    console.log(places.places)
    return (
        <View style={styles.cardStyle}>
            <Text style={styles.namaStyle}>{places.places.nama}</Text>
            </View>
    )

}
const styles = {
    namaStyle: {
        fontColor: 'orange',
        fontSize: 20,
        textAlign: 'bottom'
    }
}

export default PlacesDetail;
