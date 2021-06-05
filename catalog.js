const catalogItem = {
    render(good) {
        return `<div class = "catalog_item">
                <div><b>Наименование</b>: ${good.product_name}</div>
                <div><img class = "product_img" src="img/${good.product_photo}" alt="product image"></div>
                <div><b>Цена за шт.</b>: ${good.price}</div>
                <div><p>${good.description}</div>
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
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 2,
            product_name: 'МФУ',
            product_photo: 'mfd.png',
            price: 50000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 3,
            product_name: 'Клавиатура',
            product_photo: 'keyboard.png',
            price: 2000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 4,
            product_name: 'Мышь',
            product_photo: 'mouse.png',
            price: 800,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 5,
            product_name: 'Видеокарта',
            product_photo: 'graphics_card.png',
            price: 215000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 4,
            product_name: 'Планшет',
            product_photo: 'tablet.png',
            price: 35000,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 4,
            product_name: 'Геймпад',
            product_photo: 'gamepad.png',
            price: 4500,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla totam ex veritatis nobis laudantium maxime?'
        },

        {
            id: 4,
            product_name: 'Гарнитура',
            product_photo: 'headset.png',
            price: 12000,
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
    }
}

catalog.init();