class BackgroundParallax {
    constructor() {
        this.background = document.getElementById('background');
        this.backgroundHeight = 1440;
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
        this.documentHeight = document.documentElement.scrollHeight;
        this.screenHeight = document.documentElement.clientHeight;
        this.scrollTop = document.documentElement.scrollTop;
        this.background.style.transform = 'translate(0, ' + this.scrollTop * (this.screenHeight - this.backgroundHeight) / (this.documentHeight - this.screenHeight) + 'px)';
    }
}

const backgroundParallax = new BackgroundParallax();
backgroundParallax.activate();