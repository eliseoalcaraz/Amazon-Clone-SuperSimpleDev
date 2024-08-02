import { getProduct, Appliance, Product, Clothing } from '../../data/products.js';
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


describe('test suite: Product', () => {
  let product;

  beforeEach(() => {
    product = new Product(
      {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
          stars: 4.5,
          count: 87
        },
        priceCents: 1090,
        keywords: [
          "socks",
          "sports",
          "apparel"
        ]
      }
    );
  });

  it('has correct properties', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(product.image).toEqual('images/products/athletic-cotton-socks-6-pairs.jpg');
    expect(product.name).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
    expect(product.rating).toEqual({
      stars: 4.5,
      count: 87
    });
    expect(product.priceCents).toEqual(1090);
  });

  it('it gets the stars url', () => {
    expect(product.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('it gets the price', () => {
    expect(product.getPrice()).toEqual('$10.90');
  });

  it('it generates the extraInfoHTML', () => {
    expect(product.extraInfoHTML()).toEqual('');
  });
});


describe('test suite: Clothing', () => {
  let clothing;

  beforeEach(() => {
    clothing = new Clothing(
      {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        rating: {
          stars: 4.5,
          count: 56
        },
        priceCents: 799,
        keywords: [
          "tshirts",
          "apparel",
          "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
      }
    );
  });

  it('has correct properties', () => {
    expect(clothing.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
    expect(clothing.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
    expect(clothing.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
    expect(clothing.rating).toEqual({
      stars: 4.5,
      count: 56
    });
    expect(clothing.priceCents).toEqual(799);
  });

  it('it gets the stars url', () => {
    expect(clothing.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('it gets the price', () => {
    expect(clothing.getPrice()).toEqual('$7.99');
  });

  it('it generates the extraInfoHTML', () => {
    expect(clothing.extraInfoHTML()).toContain(`<a href="${clothing.sizeChartLink}" target="_blank">Size Chart</a>`);
  });
});


describe('test suite: Appliance', () => {
  let appliance;

  beforeEach(() => {
    appliance = new Appliance(
      {
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        rating: {
          stars: 4.5,
          count: 56
        },
        priceCents: 799,
        keywords: [
          "tshirts",
          "apparel",
          "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
      }
    );
  });

  it('has correct properties', () => {
    expect(appliance.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
    expect(appliance.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
    expect(appliance.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
    expect(appliance.rating).toEqual({
      stars: 4.5,
      count: 56
    });
    expect(appliance.priceCents).toEqual(799);
  });

  it('it gets the stars url', () => {
    expect(appliance.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('it gets the price', () => {
    expect(appliance.getPrice()).toEqual('$7.99');
  });

  it('it generates the extraInfoHTML', () => {
    expect(appliance.extraInfoHTML()).toContain(` <a href="${appliance.instructionsLink}" target="_blank">Instructions</a> 
      <a href="${appliance.warrantyLink}" target="_blank">Warranty</a>`);
  });
});







