class ReturningScrollDirection {
    constructor() {
        this.screenBeforeTop = 0;
    }

    execute() {
        this.screenTop = document.documentElement.scrollTop;
        if (this.screenTop < this.screenBeforeTop) {
            this.scrollDirection = 'up';
        } else {
            this.scrollDirection = 'down';
        }
        this.screenBeforeTop = this.screenTop;
        return this.scrollDirection;
    }
}