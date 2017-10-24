import React, { Component } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import Card from './Card'


const PlacesDetail = (places) => {
    console.log(places.places)
    return (
        <Card key={places.id}>
            <Image 
                style={{ flex: 1 }} 
                source={{ uri: places.places.url }}>
        <View  style={styles.cardStyle}>
            <View style={styles.topStyle}>
                
            </View>
            <View style={styles.bottomStyle}>
            <Text style={styles.namaStyle}>{places.places.nama}</Text>
                </View>
            </View>
            </Image>
            </Card>
    )

}
const styles = {
    cardStyle: {
        flex: 1
    },
    topStyle: {
        
        flex: 5
    },
    namaStyle: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        alignItems: 'center'
    },
    bottomStyle: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.7
    }
}

export default PlacesDetail;
