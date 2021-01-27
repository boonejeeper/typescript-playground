import { of, interval } from "rxjs";
import { takeWhile } from "rxjs/operators";

const timer$ = interval(1000);

//emit 1,2,3,4,5
// const source = of(1, 2, 3, 4, 5);
//allow values until value from source is greater than 4, then complete
// const example = source.pipe(takeWhile(val => val <= 4));
//output: 1,2,3,4
const maxCount = 10;
var currCount = 0;
timer$
  .pipe(takeWhile(val => maxCount > currCount))
  .subscribe(val => console.log("count=>", currCount++));
