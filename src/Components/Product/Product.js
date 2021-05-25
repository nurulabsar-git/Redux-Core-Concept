import React from 'react';

const Product = (props) => {
    // const {name, id} = props.product;
    const {addToCart, product} = props;

    return (
        <div>
            <h5>This is {product.name} product</h5>
            <button onClick={()=> addToCart(product.id, product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;