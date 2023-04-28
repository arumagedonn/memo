class AboveTheFoldAnimation {
    constructor() {
        this.body = document.getElementById('body');
        this.loader = document.getElementById( 'loader');
        this.mainTitle = document.getElementById('main-title');
        this.subTitle = document.getElementById('sub-title');
        this.count = 0;
        this.countMax = 100;
        this.delta = 10;
        this.phase = 0;
    }

    activate() {
        window.addEventListener('load', () => {
            this.alterStyle();
        });
    }

    alterStyle() {
        this.execution = () => {
            if (this.phase === 0) {
                if (this.count < this.countMax) {
                    this.count = this.count + (this.delta * 2);
                } else {
                    this.phase = 1;
                    this.count = 0;
                    this.body.style.position = 'static'; //'fixed' to 'static'
                }
                window.requestAnimationFrame(this.execution);
            } else if (this.phase === 1) {
                if (this.count < this.countMax) {
                    this.count = this.count + (this.delta * 0.5);
                    this.loader.style.opacity = 1 - (this.count / this.countMax); //1 to 0
                } else {
                    this.phase = 2;
                    this.count = 0;
                    this.loader.style.display = 'none'; //'block' to 'none'
                }
                window.requestAnimationFrame(this.execution);
            } else if (this.phase === 2) {
                if (this.count < this.countMax) {
                    this.count = this.count + (this.delta * 0.5);
                    this.mainTitle.style.opacity = (this.count / this.countMax) * 0.5; //0 to 0.5
                } else {
                    this.phase = 3;
                    this.count = 0;
                }
                window.requestAnimationFrame(this.execution);
            } else if (this.phase === 3) {
                if (this.count < this.countMax) {
                    this.count = this.count + (this.delta * 0.5);
                    this.mainTitle.style.opacity = (this.count / this.countMax) * 0.5 + 0.5; //0.5 to 1
                    this.subTitle.style.opacity = (this.count / this.countMax) * 0.5; //0 to 0.5
                } else {
                    this.phase = 4;
                    this.count = 0;
                }
                window.requestAnimationFrame(this.execution);
            } else if (this.phase === 4) {
                if (this.count < this.countMax) {
                    this.count = this.count + (this.delta * 0.5);
                    this.subTitle.style.opacity = (this.count / this.countMax) * 0.5 + 0.5; //0.5 to 1
                } else {
                    this.phase = null;
                }
                window.requestAnimationFrame(this.execution);
            } else {
                ;
            }
        };
        window.requestAnimationFrame(this.execution);
    }
}

const aboveTheFoldAnimation = new AboveTheFoldAnimation();
aboveTheFoldAnimation.activate();