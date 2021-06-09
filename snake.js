"use strict";

const settings = {
    rowsCount: 21,
    colsCount: 21,
    speed: 4,
    winFoodCount: 5,
    obstacles: 5,
};

const config = {
    settings,

    init(userSettings) {
        Object.assign(this.settings, userSettings);
    },

    getRowsCount() {
        return this.settings.rowsCount;
    },

    getColsCount() {
        return this.settings.colsCount;
    },

    getSpeed() {
        return this.settings.speed;
    },

    getWinFoodCount() {
        return this.settings.winFoodCount;
    },

    getObstacles() {
        return this.settings.obstacles;
    },


    validate() {
        const result = {
            isValid: true,
            errors: [],
        };

        if (this.getRowsCount() < 10 || this.getRowsCount() > 30) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение rowsCount должно быть в диапазоне [10, 30].');
        }

        if (this.getColsCount() < 10 || this.getColsCount() > 30) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение colsCount должно быть в диапазоне [10, 30].');
        }

        if (this.getSpeed() < 1 || this.getSpeed() > 10) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение speed должно быть в диапазоне [1, 10].');
        }

        if (this.getWinFoodCount() < 5 || this.getWinFoodCount() > 50) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение winFoodCount должно быть в диапазоне [5, 50].');
        }

        if (this.getObstacles() < 0 || this.getObstacles() > 10) {
            result.isValid = false;
            result.errors.push('Неверные настройки, значение obstacles должно быть в диапазоне [0, 10].');
        }

        return result;
    },
};

const map = {
    cells: {},
    usedCells: [],

    init(rowsCount, colsCount) {
        const table = document.getElementById('game');
        table.innerHTML = '';

        this.cells = {};
        this.usedCells= [];

        for (let row = 0; row < rowsCount; row++) {
            const tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

            for (let col = 0; col < colsCount; col++) {
                const td = document.createElement('td');
                td.classList.add('cell');
                tr.appendChild(td);

                this.cells[`x${col}_y${row}`] = td;
            }
        }
    },

    render(snakePointsArray, foodPoint, obstaclePoint) {
        for (const cell of this.usedCells) {
            cell.className = 'cell';
        }

        this.usedCells = [];

        snakePointsArray.forEach((point, index) => {
            const snakeCell = this.cells[`x${point.x}_y${point.y}`];
            snakeCell.classList.add(index === 0 ? 'snakeHead' : 'snakeBody');
            this.usedCells.push(snakeCell);
        });

        const foodCell = this.cells[`x${foodPoint.x}_y${foodPoint.y}`];
        foodCell.classList.add('food');
        this.usedCells.push(foodCell);

        const obstacleCell = this.cells[`x${obstaclePoint.x}_y${obstaclePoint.y}`];
        obstacleCell.classList.add('obstacle');
        this.usedCells.push(obstacleCell);
    },
};

const snake = {
    body: [],
    direction: null,
    lastStepDirection: null,

    init(startBody, direction) {
        this.body = startBody;
        this.direction = direction;
        this.lastStepDirection = direction;
    },

    getBody() {
        return this.body;
    },

    getLastStepDirection() {
        return this.lastStepDirection;
    },

    setDirection(direction) {
        this.direction = direction;
    },

    isOnPoint(point) {
        return this.getBody().some(snakePoint => snakePoint.x === point.x && snakePoint.y === point.y);
    },

    makeStep() {
        this.lastStepDirection = this.direction;
        this.getBody().unshift(this.getNextStepHeadPoint());
        this.getBody().pop();
    },

    growUp() {
        const lastBodyIndex = this.getBody().length - 1;
        const lastBodyPoint = this.getBody()[lastBodyIndex];
        const lastBodyPointClone = Object.assign({}, lastBodyPoint);

        this.getBody().push(lastBodyPointClone);
    },

    getNextStepHeadPoint() {
        const firstPoint = this.getBody()[0];

        switch(this.direction) {
            case 'up':
                return {x: firstPoint.x, y: firstPoint.y - 1};
            case 'right':
                return {x: firstPoint.x + 1, y: firstPoint.y};
            case 'down':
                return {x: firstPoint.x, y: firstPoint.y + 1};
            case 'left':
                return {x: firstPoint.x - 1, y: firstPoint.y};
        }
    },
};

const food = {
    x: null,
    y: null,

    getCoordinates() {
        return {
            x: this.x,
            y: this.y,
        };
    },

    setCoordinates(point) {
        this.x = point.x;
        this.y = point.y;
    },

    isOnPoint(point) {
        return this.x === point.x && this.y === point.y;
    },
};

const obstacle = {
    x: null,
    y: null,

    getCoordinates() {
        return {
            x: this.x,
            y: this.y,
        };
    },

    setCoordinates(point) {
        this.x = point.x;
        this.y = point.y;
    },

    isOnPoint(point) {
        return this.x === point.x && this.y === point.y;
    },
}

const status = {
    condition: null,

    setPlaying() {
        this.condition = 'playing';
    },

    setStopped() {
        this.condition = 'stopped';
    },

    setFinished() {
        this.condition = 'finished';
    },

    isPlaying() {
        return this.condition === 'playing';
    },

    isStopped() {
        return this.condition === 'stopped';
    },
};

const game = {
    config,
    map,
    snake,
    food,
    obstacle,
    status,
    tickInterval: null,
    score: null,
    obstacleInterval: null,

    init(userSettings = {}) {
        this.config.init(userSettings);
        const validation = this.config.validate();

        if (!validation.isValid) {
            for (const err of validation.errors) {
                console.log(err);
            }
            return;
        }

        this.map.init(this.config.getRowsCount(), this.config.getColsCount());
        this.score = document.querySelector('.score');

        this.setEventHandlers();
        this.reset();
    },

    setEventHandlers() {
        document.querySelector('#playButton').addEventListener('click', () => {
            this.playClickHandler();
        });
        document.querySelector('#newGameButton').addEventListener('click', () => {
            this.newGameClickHandler();
        });
        document.addEventListener('keydown', (event) => this.keyDownHandler(event));
    },

    playClickHandler() {
        if (this.status.isPlaying()) {
            this.stop();
        } else if (this.status.isStopped()) {
            this.play();
        }
    },

    newGameClickHandler() {
        this.reset();
    },

    keyDownHandler(event) {
        if (!this.status.isPlaying()) return;

        const direction = this.getDirectionByCode(event.code);

        if (this.canSetDirection(direction)) this.snake.setDirection(direction);
    },

    getDirectionByCode(code) {
        switch (code) {
            case 'KeyW':
            case 'ArrowUp':
                return 'up';
            case 'KeyD':
            case 'ArrowRight':
                return 'right';
            case 'KeyS':
            case 'ArrowDown':
                return 'down';
            case 'KeyA':
            case 'ArrowLeft':
                return 'left';
        }
    },

    canSetDirection(direction) {
        const lastStepDirection = this.snake.getLastStepDirection();

        return direction === 'up' && lastStepDirection !== 'down' ||
            direction === 'right' && lastStepDirection !== 'left' ||
            direction === 'down' && lastStepDirection !== 'up' ||
            direction === 'left' && lastStepDirection !== 'right';
    },

    reset() {
        this.stop();
        this.snake.init(this.getStartSnakeBody(), 'up');
        this.food.setCoordinates(this.getRandomFreeCoordinates());
        this.obstacle.setCoordinates(this.getRandomFreeCoordinates());


        this.render();
    },

    getStartSnakeBody() {
        return [
            {
                x: Math.floor(this.config.getColsCount() / 2),
                y: Math.floor(this.config.getRowsCount() / 2),
            },
        ];
    },

    getRandomFreeCoordinates() {
        const exclude = [this.food.getCoordinates(), this.obstacle.getCoordinates(), ...this.snake.getBody()];

        while (true) {
            const rndPoint = {
                x: Math.floor(Math.random() * this.config.getColsCount()),
                y: Math.floor(Math.random() * this.config.getRowsCount()),
            };

            if (!exclude.some((exPoint) => rndPoint.x === exPoint.x && rndPoint.y === exPoint.y)) return rndPoint;
        }
    },

    render() {
        this.map.render(this.snake.getBody(), this.food.getCoordinates(), this.obstacle.getCoordinates());
        this.score.innerHTML = `Score: ${this.snake.getBody().length - 1}`;
    },

    play() {
        this.status.setPlaying();
        this.tickInterval = setInterval(() => {
            this.tickHandler();
        }, 1000 / this.config.getSpeed());
        this.setPlayButton('Стоп');

        this.obstacleInterval = setInterval(() => {this.tickObstacle()}, 5000);
    },

    stop() {
        this.status.setStopped();
        clearInterval(this.tickInterval);
        this.setPlayButton('Старт');
    },

    finish() {
        this.status.setFinished();
        clearInterval(this.tickInterval);
        this.setPlayButton('Игра закончена', true);
    },

    setPlayButton(text, isDisabled) {
        const playButton = document.querySelector('#playButton');

        playButton.textContent = text;

        isDisabled
            ? playButton.classList.add('disabled')
            : playButton.classList.remove('disabled');
    },

    tickHandler() {
        if (!this.canMakeStep()) return this.finish();
        if (this.obstacle.isOnPoint(this.snake.getNextStepHeadPoint())) return this.finish();
        if (this.food.isOnPoint(this.snake.getNextStepHeadPoint())) {
            this.snake.growUp();
            this.food.setCoordinates(this.getRandomFreeCoordinates());

            if (this.isGameWon()) this.finish();

        }

        this.snake.makeStep();
        this.render();
    },

    tickObstacle() {
        this.obstacle.setCoordinates(this.getRandomFreeCoordinates());
    },

    canMakeStep() {
        const nextHeadPoint = this.snake.getNextStepHeadPoint();

        return !this.snake.isOnPoint(nextHeadPoint) &&
            nextHeadPoint.x < this.config.getColsCount() &&
            nextHeadPoint.y < this.config.getRowsCount() &&
            nextHeadPoint.x >= 0 &&
            nextHeadPoint.y >= 0;
    },

    isGameWon() {
        return this.snake.getBody().length > this.config.getWinFoodCount();
    },

};

game.init();
