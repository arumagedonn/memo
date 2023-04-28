class HeaderAnimation {
    constructor() {
        this.header = document.getElementById('header');
        this.actionAreaTop = document.getElementById('header-action-area-top');
        this.actionAreaBottom = document.getElementById('header-action-area-bottom');
        this.returningScrollDirection = new ReturningScrollDirection();
        this.count = 0;
        this.countMax = 100;
        this.delta = 5;
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
        this.scrollDirection = this.returningScrollDirection.execute();
        this.execution = () => {
            if (this.scrollDirection === 'down') {
                if (this.actionAreaTop.getBoundingClientRect().top < 0) {
                    this.fadeIn();
                } else {
                    this.fadeOut();
                }
            } else {
                if (0 < this.actionAreaBottom.getBoundingClientRect().top) {
                    this.fadeOut();
                } else {
                    this.fadeIn();
                }
            }
        }
        this.preventMultipleExecutions();
    }

    fadeIn() {
        if (this.count < this.countMax) {
            this.count = this.count + this.delta;
            this.header.style.transform = 'translate(0, -' + (1 - (this.count / this.countMax)) * 100 + '%)';
            window.requestAnimationFrame(this.execution);
        } else {
            ;
        }
    }

    fadeOut() {
        if (this.count > 0) {
            this.count = this.count - this.delta;
            this.header.style.transform = 'translate(0, -' + (1 - (this.count / this.countMax)) * 100 + '%)';
            window.requestAnimationFrame(this.execution);
        } else {
            ;
        }
    }

    preventMultipleExecutions() {
        if (this.scrollDirection === 'down') {
            if (this.actionAreaTop.getBoundingClientRect().top < 0) {
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
            if (0 < this.actionAreaBottom.getBoundingClientRect().top) {
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

const headerAnimation = new HeaderAnimation();
headerAnimation.activate();