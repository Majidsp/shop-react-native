import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../../components/shop/ProductItem/ProductItem';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducs);
    return (
        <FlatList 
        data={products}
        renderItem={itemData => (
            <ProductItem
             image={itemData.item.imageUrl}
             title={itemData.item.title}
             price={itemData.item.price}
             onViewDetail={() => {
                props.navigation.navigate('ProductDetail', {
                    productId: itemData.item.id,
                    productTitle: itemData.item.title
                });
             }}
             onAddToCart={() => {}}
             />
             )
            }
        />
    )
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
};

export default ProductsOverviewScreen;
