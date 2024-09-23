// src/data/products.js
const products = [
    {
        id: 1,
        name: 'Apple',
        category: 'Fruit',
        calories: 52,
        sugar: '10g',
        benefits: 'Rich in fiber and vitamin C.',
        price: 1.2,
        image: '/images/apple.jpg'
    },
    {
        id: 2,
        name: 'Banana',
        category: 'Fruit',
        calories: 96,
        sugar: '12g',
        benefits: 'High in potassium and vitamin B6.',
        price: 0.8,
        image: '/images/banana.jpg'
    },
    {
        id: 3,
        name: 'Carrot',
        category: 'Vegetable',
        calories: 41,
        sugar: '5g',
        benefits: 'Good source of beta-carotene and fiber.',
        price: 0.5,
        image: '/images/carrot.jpg'
    },
    {
        id: 4,
        name: 'Broccoli',
        category: 'Vegetable',
        calories: 34,
        sugar: '1.7g',
        benefits: 'Rich in vitamins K and C, and fiber.',
        price: 1.5,
        image: '/images/broccoli.jpg'
    },
    {
        id: 5,
        name: 'Strawberry',
        category: 'Fruit',
        calories: 32,
        sugar: '4.9g',
        benefits: 'High in antioxidants and vitamin C.',
        price: 2.0,
        image: '/images/strawberry.jpg'
    },
    {
        id: 6,
        name: 'Spinach',
        category: 'Vegetable',
        calories: 23,
        sugar: '0.4g',
        benefits: 'Rich in iron and calcium.',
        price: 1.0,
        image: '/images/spinach.jpg'
    },
    {
        id: 7,
        name: 'Orange',
        category: 'Fruit',
        calories: 47,
        sugar: '9g',
        benefits: 'High in vitamin C and antioxidants.',
        price: 1.1,
        image: '/images/orange.jpg'
    },
    {
        id: 8,
        name: 'Tomato',
        category: 'Vegetable',
        calories: 18,
        sugar: '2.6g',
        benefits: 'Rich in vitamins A, C, and K.',
        price: 0.7,
        image: '/images/tomato.jpg'
    },
    {
        id: 9,
        name: 'Blueberry',
        category: 'Fruit',
        calories: 57,
        sugar: '9.7g',
        benefits: 'High in antioxidants and vitamin C.',
        price: 3.0,
        image: '/images/blueberry.jpg'
    },
    {
        id: 10,
        name: 'Potato',
        category: 'Vegetable',
        calories: 77,
        sugar: '1.7g',
        benefits: 'Good source of vitamins C and B6.',
        price: 0.6,
        image: '/images/potato.jpg'
    },
    {
        id: 11,
        name: 'Avocado',
        category: 'Fruit',
        calories: 160,
        sugar: '0.7g',
        benefits: 'Rich in healthy fats and potassium.',
        price: 2.5,
        image: '/images/avocado.jpg'
    },
    {
        id: 12,
        name: 'Cucumber',
        category: 'Vegetable',
        calories: 16,
        sugar: '1.7g',
        benefits: 'High in water and vitamin K.',
        price: 0.8,
        image: '/images/cucumber.jpg'
    },
    {
        id: 13,
        name: 'Pineapple',
        category: 'Fruit',
        calories: 50,
        sugar: '10g',
        benefits: 'High in vitamin C and manganese.',
        price: 1.8,
        image: '/images/pineapple.jpg'
    },
    {
        id: 14,
        name: 'Lettuce',
        category: 'Vegetable',
        calories: 15,
        sugar: '0.8g',
        benefits: 'Low in calories and high in vitamins A and K.',
        price: 1.2,
        image: '/images/lettuce.jpg'
    },
    {
        id: 15,
        name: 'Mango',
        category: 'Fruit',
        calories: 60,
        sugar: '14g',
        benefits: 'High in vitamins A and C.',
        price: 1.5,
        image: '/images/mango.jpg'
    },
    {
        id: 16,
        name: 'Pepper',
        category: 'Vegetable',
        calories: 31,
        sugar: '4.2g',
        benefits: 'Rich in vitamins A, C, and B6.',
        price: 1.0,
        image: '/images/pepper.jpg'
    },
    {
        id: 17,
        name: 'Grapes',
        category: 'Fruit',
        calories: 69,
        sugar: '16g',
        benefits: 'High in vitamins C and K.',
        price: 2.3,
        image: '/images/grapes.jpg'
    },
    {
        id: 18,
        name: 'Zucchini',
        category: 'Vegetable',
        calories: 17,
        sugar: '2.5g',
        benefits: 'Rich in vitamins A and C.',
        price: 1.4,
        image: '/images/zucchini.jpg'
    },
    {
        id: 19,
        name: 'Peach',
        category: 'Fruit',
        calories: 39,
        sugar: '8g',
        benefits: 'Good source of vitamins A and C.',
        price: 1.9,
        image: '/images/peach.jpg'
    },
    {
        id: 20,
        name: 'Onion',
        category: 'Vegetable',
        calories: 40,
        sugar: '4.2g',
        benefits: 'Rich in vitamins C and B6.',
        price: 0.9,
        image: '/images/onion.jpg'
    },
    {
        id: 21,
        name: 'Kiwi',
        category: 'Fruit',
        calories: 61,
        sugar: '9g',
        benefits: 'High in vitamin C and fiber.',
        price: 1.7,
        image: '/images/kiwi.jpg'
    },
    {
        id: 22,
        name: 'Celery',
        category: 'Vegetable',
        calories: 16,
        sugar: '1.8g',
        benefits: 'High in water and fiber.',
        price: 0.7,
        image: '/images/celery.jpg'
    },
    {
        id: 23,
        name: 'Pear',
        category: 'Fruit',
        calories: 57,
        sugar: '10g',
        benefits: 'Rich in fiber and vitamin C.',
        price: 1.4,
        image: '/images/pear.jpg'
    },
    {
        id: 24,
        name: 'Cauliflower',
        category: 'Vegetable',
        calories: 25,
        sugar: '1.9g',
        benefits: 'Good source of vitamins C and K.',
        price: 1.6,
        image: '/images/cauliflower.jpg'
    },
    {
        id: 25,
        name: 'Plum',
        category: 'Fruit',
        calories: 46,
        sugar: '10g',
        benefits: 'High in vitamins C and K.',
        price: 1.3,
        image: '/images/plum.jpg'
    },
    {
        id: 26,
        name: 'Garlic',
        category: 'Vegetable',
        calories: 149,
        sugar: '1g',
        benefits: 'Rich in vitamin C and B6, and manganese.',
        price: 0.5,
        image: '/images/garlic.jpg'
    },
    {
        id: 27,
        name: 'Watermelon',
        category: 'Fruit',
        calories: 30,
        sugar: '6g',
        benefits: 'High in vitamins A and C.',
        price: 1.0,
        image: '/images/watermelon.jpg'
    },
    {
        id: 28,
        name: 'Radish',
        category: 'Vegetable',
        calories: 16,
        sugar: '1.9g',
        benefits: 'Good source of vitamin C.',
        price: 1.1,
        image: '/images/radish.jpg'
    },
    {
        id: 29,
        name: 'Blackberry',
        category: 'Fruit',
        calories: 43,
        sugar: '4.9g',
        benefits: 'High in vitamins C and K, and fiber.',
        price: 2.8,
        image: '/images/blackberry.jpg'
    },

    {
        id: 30,
        name: 'Cabbage',
        category: 'Vegetable',
        calories: 25,
        sugar: '3g',
        benefits: 'High in vitamin K and antioxidants.',
        price: 1.2,
        image: '/images/cabbage.jpg'
    },
    {
        id: 31,
        name: 'Cherry',
        category: 'Fruit',
        calories: 50,
        sugar: '8g',
        benefits: 'Rich in antioxidants and vitamin C.',
        price: 1.6,
        image: '/images/cherry.jpg'
    },
    {
        id: 32,
        name: 'Asparagus',
        category: 'Vegetable',
        calories: 20,
        sugar: '1.8g',
        benefits: 'High in fiber and folate.',
        price: 1.3,
        image: '/images/asparagus.jpg'
    },
    {
        id: 33,
        name: 'Apricot',
        category: 'Fruit',
        calories: 48,
        sugar: '9g',
        benefits: 'Rich in vitamins A and C.',
        price: 1.9,
        image: '/images/apricot.jpg'
    },
    {
        id: 34,
        name: 'Artichoke',
        category: 'Vegetable',
        calories: 47,
        sugar: '1g',
        benefits: 'High in fiber and antioxidants.',
        price: 2.2,
        image: '/images/artichoke.jpg'
    },
    {
        id: 35,
        name: 'Raspberry',
        category: 'Fruit',
        calories: 52,
        sugar: '5g',
        benefits: 'High in fiber and vitamin C.',
        price: 2.5,
        image: '/images/raspberry.jpg'
    },
    {
        id: 36,
        name: 'Brussels Sprouts',
        category: 'Vegetable',
        calories: 38,
        sugar: '3.3g',
        benefits: 'Rich in vitamins K and C.',
        price: 1.7,
        image: '/images/brussels-sprouts.jpg'
    },
    {
        id: 37,
        name: 'Pomegranate',
        category: 'Fruit',
        calories: 83,
        sugar: '16g',
        benefits: 'High in antioxidants and vitamin C.',
        price: 2.8,
        image: '/images/pomegranate.jpg'
    },
    {
        id: 38,
        name: 'Beet',
        category: 'Vegetable',
        calories: 43,
        sugar: '9.2g',
        benefits: 'Rich in antioxidants and fiber.',
        price: 1.4,
        image: '/images/beet.jpg'
    },
    {
        id: 39,
        name: 'Cantaloupe',
        category: 'Fruit',
        calories: 34,
        sugar: '8g',
        benefits: 'High in vitamin A and potassium.',
        price: 1.8,
        image: '/images/cantaloupe.jpg'
    },

    {
        id: 40,
        name: 'Eggplant',
        category: 'Vegetable',
        calories: 25,
        sugar: '3.5g',
        benefits: 'Low in calories and high in fiber.',
        price: 1.1,
        image: '/images/eggplant.jpg'
    },

];

export default products;
