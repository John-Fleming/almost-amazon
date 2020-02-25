import util from '../helpers/util.js';
import bookData from '../helpers/data/bookData.js';
import cart from './cart.js';


const addToCartEvent = () => {
    const book = bookData.getBook();
    cart.addToCart(book);
};

const makeStore = () => {
    const book = bookData.getBook();
    let domString = '';
    domString += `<h2>${book.name}</h2>`;
    domString += `<button id="add-to-cart-btn" class="btn btn-dark">Add to Cart</button>`;
    util.printToDom('store-container', domString);
    document.getElementById('add-to-cart-btn').addEventListener('click', addToCartEvent);
};

const test = () => {
    console.log('did it work?');
};

export default { makeStore };