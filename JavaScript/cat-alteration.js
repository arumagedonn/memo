class CatAlteration {
    constructor() {
        this.cats = new Array(document.getElementsByClassName('cat').length);
        this.actionPoints = new Array(document.getElementsByClassName('cat').length);
        for (let i = 0; i < this.cats.length; i ++) {
            this.cats[i] = document.getElementsByClassName('cat')[i];
            this.actionPoints[i] = document.getElementsByClassName('cat-action-point')[i];
        }
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
        for (let i = 0; i < this.cats.length; i ++) {
            this.cats[i].style.visibility = 'hidden';
        }
        for (let i = 0; i < this.cats.length; i ++) {
            if (this.cats[i].getBoundingClientRect().bottom < this.actionPoints[i].getBoundingClientRect().top) {
                this.cats[i].style.visibility = 'visible';
                break;
            } else {
                ;
            }
        }
    }
}

const catAlteration = new CatAlteration();
catAlteration.activate();