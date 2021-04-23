class Course {
  #price;

  get price() {
    return '$' + this.#price;
  }

  set price(price) {
    if (price <= 0) {
      this.#price = 1;
      return;
    }
    this.#price = parseInt(price);
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  getValue() {
    return (this.length / this.#price).toFixed(2);
  }

  printSummary() {
    console.log(
      `For buying our ${
        this.title
      } you will get ${this.getValue()} value from ${this.length} and ${
        this.price
      }`
    );
  }
}

const js = new Course('JS', 24, 20);
const react = new Course('React', 12, 14);

console.log(js, react);
console.log(js.printSummary());
console.log(react.printSummary());

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercise) {
    super(title, length, price, numOfExercise);
    this.numOfExercise = numOfExercise;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    console.log('Its publishing');
  }
}

const practice = new PracticalCourse('Angular', 30, 18, 34);
const theoreticalCourse = new TheoreticalCourse('NextJs', 20, 11, 33);

practice.printSummary();
theoreticalCourse.printSummary();
console.log(practice.numOfExercise);
console.log(theoreticalCourse.publish());

theoreticalCourse.price = -10;
theoreticalCourse.printSummary();
