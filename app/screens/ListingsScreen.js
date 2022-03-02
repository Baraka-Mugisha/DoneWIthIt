import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [{
  id: 1,
  title: 'Red jacket for sale',
  price: 400,
  image: require('../assets/jacket.jpg')
},
{
  id: 2,
  title: 'Couch in good condition',
  price: 100,
  image: require('../assets/couch.jpg')
}];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            price={"$" + item.price}
            image={item.image}
          />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20
  }
})

export default ListingsScreen;