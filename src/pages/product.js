import React, { Component } from 'react';
import { WebView } from 'react-native';

const Product = ({ navigation }) => (
    <WebView
        source={{ uri: navigation.state.params.product.title }}

    />
);

Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title
});



export default Product;