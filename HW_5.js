'use strict';

const settigns = {
    rowCounts: 8,
    colCounts: 8,
}

const game = {
    settigns,
    containerElement: null,
    cellElements: [],

    run() {
        this.init();
    },

    init() {
        this.containerElement = document.querySelector('#game');
        this.initCells();
    },

    initCells() {
        this.containerElement.innerHTML = '';
        this.cellElements = [];

        for (let row = 0; row < this.settigns.rowCounts; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let col = 0; col < this.settigns.rowCounts; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                this.cellElements.push(td);
            }
        }

        console.log(this.cellElements);
    },
}

game.run();