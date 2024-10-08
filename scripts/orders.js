import { getProduct, loadProductsFetch } from '../data/products.js';
import { orders } from '../data/orders.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { formatCurrency } from './utils/money.js';
import { addToCart } from '../data/cart.js';

async function loadPage() {
  await loadProductsFetch();

  let ordersHTML = '';

  console.log(orders);
  orders.forEach((order) => {
    const orderTimeString = dayjs(order.orderTime).format('MMMM D');


    ordersHTML += `
      <div class="order-container">
          
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${orderTimeString}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${formatCurrency(order.totalCostCents)}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>

          <div class="order-details-grid">
          ${productsListHTML(order)}
          </div>
        </div>
    `;

    function productsListHTML(order) {
      let productsListHTML = '';
      
      order.products.forEach((product) => {

        const productDetails = getProduct(product.productId);
        
        const deliveryTimeString = dayjs(product.estimatedDeliveryTime).format('MMMM D');

        //console.log(product);
        //console.log(productDetails);
        
        productsListHTML += `
            <div class="product-image-container">
              <img src=${productDetails.image}>
            </div>

            <div class="product-details">
              <div class="product-name">
                ${productDetails.name}
              </div>
              <div class="product-delivery-date">
                ${deliveryTimeString}
              </div>
              <div class="product-quantity">
                ${product.quantity}
              </div>
              <button class="buy-again-button button-primary js-buy-again" data-product-id="${product.id}">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
        `;
      });

      return productsListHTML
    }

  });

  document.querySelector('.js-orders-grid').innerHTML = ordersHTML;

  // document.querySelectorAll('.js-buy-again').forEach((button) => {
  //   button.addEventListener('click', () => {
  //     addToCart(button.dataset.productId, 1);

  //     button.innerHTML = 'Added';
  //     setTimeout(() => {
  //       button.innerHTML = `
  //         <img class="buy-again-icon" src="images/icons/buy-again.png">
  //         <span class="buy-again-message">Buy it again</span>
  //       `;
  //     }, 1000);
  //   })
  // });


}

loadPage();