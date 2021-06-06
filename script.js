'use strict';

//Каталог

const catalogItem = {
    render(good) {
        return `<div class = "catalog_item">
                <div>
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><img class = "product_img" src="img/${good.product_photo}" alt="product image"></div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <br>
                    <div><p>${good.description}</div>
                </div>
                <button data-id = "${good.id}" class = "buy_btn">Купить</button>
            </div>`;
    }
}

const catalog = {
    catalogListBlock: null,
    catalogItem,
    goods: [
        {
            id: 1,
            product_name: 'Ноутбук',
            product_photo: 'laptop.png',
            price: 80000,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 2,
            product_name: 'МФУ',
            product_photo: 'mfd.png',
            price: 50000,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 3,
            product_name: 'Клавиатура',
            product_photo: 'keyboard.png',
            price: 2000,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 4,
            product_name: 'Мышь',
            product_photo: 'mouse.png',
            price: 800,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 5,
            product_name: 'Видеокарта',
            product_photo: 'graphics_card.png',
            price: 215000,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 6,
            product_name: 'Планшет',
            product_photo: 'tablet.png',
            price: 35000,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 7,
            product_name: 'Геймпад',
            product_photo: 'gamepad.png',
            price: 4500,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 8,
            product_name: 'Гарнитура',
            product_photo: 'headset.png',
            price: 12000,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 9,
            product_name: 'Монитор',
            product_photo: 'monitor.png',
            price: 23000,
            quantity: 1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        }
    ],

    init() {
        this.catalogListBlock = document.querySelector('.catalog');
        this.render();
    },

    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(good));
            });
        }
    },
}

catalog.init();

//Корзина

const cartItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><img class = "product_img" src="img/${good.product_photo}" alt="product image"></div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    <button data-id = "${good.id}" class = "del_btn">Удалить</button>
                </div>`;
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartItem,
    goods: [],

    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },


    render() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций(я) стоимостью: ${this.getCartPrice()}`);
        } else {
            this.cartListBlock.innerHTML = '<p class = empty_text>Корзина пуста</p>';
        }
    },

    getCartPrice() {
        return this.goods.reduce(function (price, good) {
            return price + good.price * good.quantity;
        }, 0);
    },

    clearCart() {
        this.goods = [];
        this.render();
    },
};

cart.init();

document.onclick = (event => {
    if (event.target.classList.contains('buy_btn')) {
        const i = event.target.dataset.id - 1;
        const good = Object.assign({}, catalog.goods[i]);
        cart.goods.push(good);
        console.log(cart.goods);
        cart.init();
    }

});