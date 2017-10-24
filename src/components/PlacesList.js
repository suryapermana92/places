import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import PlacesDetail from './PlacesDetail'
import Card from './Card'


class PlacesList extends Component {
    state = { database: []}
    
      componentWillMount() {
        const url = 'https://59ed5226ff7d5d00128e0857.mockapi.io/api/places'
        axios.get(url)
        .then(response => this.setState({ database: response.data }))
        }
      renderList() {
          if(this.state.database.length > 0) {
              return this.state.database.map(places => {
                  return (
                      <PlacesDetail key={places.id}  
                        places={places}
                      />
                  )
              })
          }
    
      }
    render() {
        console.log(this.state.database)
        return(
            <View>
                {this.renderList()}
                </View>
        )
    }
}

export default PlacesList;