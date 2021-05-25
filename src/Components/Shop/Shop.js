import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Action/CartAction';
import Product from '../Product/Product';

const Shop = (props) => {
// console.log(props)
const {products, addToCart} = props;
// const products = [
//     // {
//     //     name: 'Lenovo Laptop',
//     //     id: 1
//     // },
//     // {
//     //     name: 'Asus Laptop',
//     //     id: 2
//     // },
//     // {
//     //     name: 'Dell Laptop',
//     //     id: 3
//     // },
//     // {
//     //     name: 'HP Laptop',
//     //     id: 4
//     // },
//     // {
//     //     name: 'Toshiba Laptop',
//     //     id: 5
//     // },
// ]



    return (
        <div>
            <h4>This is shop</h4>
            {
                products.map(each => <Product key={each.id} addToCart={addToCart} product={each}></Product>)
            }
        </div>
    );
};



const mapStateToProps = state => {
    return {
        // cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}



// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connectToStore(Shop);
// connect(mapStateToProps, map)(Shop);
export default connect(mapStateToProps, mapDispatchToProps)(Shop);