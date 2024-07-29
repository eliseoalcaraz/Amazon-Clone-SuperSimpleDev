import { getProduct } from '../../data/products.js';
import { loadFromStorage }from '../../data/cart.js';

describe('test suite: getProduct', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    
    loadFromStorage(); 
  });

  it('product match', () => {
    expect(getProduct('e43638ce-6aa0-4b85-b27f-e1d07eb678c6').name).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
  });
}); 