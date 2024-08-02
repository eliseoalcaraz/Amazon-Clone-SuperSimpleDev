import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkOutHeader.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});


/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
*/


/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();
  });
});
*/


