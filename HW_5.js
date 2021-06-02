'use strict';

const settigns = {
    headCounts: 8,
    rowCounts: 8,
    colCounts: 8,
}

const game = {
    settigns,
    containerElement: null,
    cellElements: [],
    thName: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],

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

        for (let heading = 0; heading < this.settigns.headCounts; heading++) {
            const th = document.createElement('th');
            this.containerElement.appendChild(th);
            th.innerHTML = this.thName[heading];
        }

        for (let row = 0; row < this.settigns.rowCounts; row++) {
            const tr = document.createElement('tr');
            this.containerElement.appendChild(tr);

            for (let col = 0; col < this.settigns.rowCounts; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                this.cellElements.push(td);
            }
        }
    },
}

game.run();