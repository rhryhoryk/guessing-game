class GuessingGame {
    constructor() {}

    setRange(min, max) {

        // this.numbersArr = [];
        // do {
        //     this.numbersArr.push(min);
        //     min++
        // } while (min <= max);
       
        // this.lowIndex = 0;
        // this.highIndex = this.numbersArr.length;
        // this.midIndex = Math.floor((this.lowIndex + this.highIndex) / 2);

        // console.log(min);
        // console.log(max);
        // console.log(this.lowIndex);
        // console.log(this.highIndex);
        // console.log(this.midIndex);

        // число и есть индекс!!!!

        this.min = min;
        this.max = max;
    }

    guess() {
        this.mid = Math.ceil((this.min + this.max) / 2);
        // console.log(this.mid);
        return this.mid
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
