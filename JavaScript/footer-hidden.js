class FooterHidden {
    constructor() {
        this.footer = document.getElementById('footer');
        this.actionPoint = document.getElementById('footer-action-point');
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
        this.screenBottom = document.documentElement.clientHeight;
        if (this.screenBottom < this.actionPoint.getBoundingClientRect().top) {
            this.footer.style.visibility = 'hidden';
        } else {
            this.footer.style.visibility = 'visible';
        }
    }
}

const footerHidden = new FooterHidden();
footerHidden.activate();