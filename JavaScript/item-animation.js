class ItemAnimation {
    constructor() {
        this.items = new Array(document.getElementsByClassName('item').length);
        for (let i = 0; i < this.items.length; i ++) {
            this.items[i] = document.getElementsByClassName('item')[i]
        }
        this.actionAreaTop = document.getElementById('item-action-area-top');
        this.actionAreaBottom = document.getElementById('item-action-area-bottom');
        this.returningScrollDirection = new ReturningScrollDirection();
        this.count = 0;
        this.countMax = 100;
        this.delta = 10;
        this.isReady = false;
    }

    activate() {
        window.addEventListener('load', () => {
            this.alterStyle();
        });
        window.addEventListener('resize', () => {
            this.alterStyle();
        });
        window.addEventListener('scroll', () => {
            this.alterStyle();
        });
    }

    alterStyle() {
        this.screenMiddle = document.documentElement.clientHeight * 0.5;
        this.scrollDirection = this.returningScrollDirection.execute();
        this.execution = () => {
            if (this.scrollDirection === 'down') {
                if (this.actionAreaTop.getBoundingClientRect().top < this.screenMiddle) {
                    this.shiftUp();
                } else {
                    this.shiftDown();
                }
            } else {
                if (this.screenMiddle < this.actionAreaBottom.getBoundingClientRect().top) {
                    this.shiftDown();
                } else {
                    this.shiftUp();
                }
            }
        }
        this.preventMultipleExecutions();
    }

    shiftUp() {
        if (this.count < this.countMax) {
            this.count = this.count + this.delta;
            for (let i = 0; i < this.items.length; i ++) {
                this.items[i].style.transform = 'translate(0, -' + (this.count / this.countMax) * 100 + '%)';
            }
            window.requestAnimationFrame(this.execution);
        } else {
            ;
        }
    }

    shiftDown() {
        if (this.count > 0) {
            this.count = this.count - this.delta;
            for (let i = 0; i < this.items.length; i ++) {
                this.items[i].style.transform = 'translate(0, -' + (this.count / this.countMax) * 100 + '%)';
            }
            window.requestAnimationFrame(this.execution);
        } else {
            ;
        }
    }

    preventMultipleExecutions() {
        if (this.scrollDirection === 'down') {
            if (this.actionAreaTop.getBoundingClientRect().top < this.screenMiddle) {
                if (this.count === 0) {
                    this.isReady = true;
                } else {
                    ;
                }
            } else {
                if (this.count === this.countMax) {
                    this.isReady = true;
                } else {
                    ;
                }
            }
        } else {
            if (this.screenMiddle < this.actionAreaBottom.getBoundingClientRect().top) {
                if (this.count === this.countMax) {
                    this.isReady = true;
                } else {
                    ;
                }
            } else {
                if (this.count === 0) {
                    this.isReady = true;
                } else {
                    ;
                }
            }
        }
        if (this.isReady) {
            window.requestAnimationFrame(this.execution);
            this.isReady = false;
        } else {
            ;
        }
    }
}

const itemAnimation = new ItemAnimation();
itemAnimation.activate();