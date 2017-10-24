import React, { Component } from 'react';
import { View, Text } from 'react-native';

const CardSection = () => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
            </View>
    )
}