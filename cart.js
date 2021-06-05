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
    goods: [
        {
            id: 1,
            product_name: 'Ноутбук',
            product_photo: 'laptop.png',
            price: 80000,
            quantity: 1
        },

        {
            id: 2,
            product_name: 'МФУ',
            product_photo: 'mfd.png',
            price: 50000,
            quantity: 2
        },

        {
            id: 3,
            product_name: 'Клавиатура',
            product_photo: 'keyboard.png',
            price: 2000,
            quantity: 7
        },

        {
            id: 4,
            product_name: 'Мышь',
            product_photo: 'mouse.png',
            price: 800,
            quantity: 7
        }
    ],

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