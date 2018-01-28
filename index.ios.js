// Import a library to create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText='Albums' />
        <AlbumList />
    </View>
    );

// Render the Component to the Device
AppRegistry.registerComponent('albums', () => App);
