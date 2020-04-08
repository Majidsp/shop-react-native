import PRODUCTS from '../../data/dummy-data';

const INITIAL_STATE = {
    availableProducs: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

const productsReducer = (state = INITIAL_STATE, action) => {    
    return state;
};

export default productsReducer;