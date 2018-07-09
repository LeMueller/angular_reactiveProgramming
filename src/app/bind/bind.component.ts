import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, filter, catchError, debounceTime} from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})

export class BindComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  constructor() {
   from([1, 2, 3, 4]).pipe(
     filter( e => e % 2 == 0),
     map( e => e * e),
     catchError(err => of('error found')),
   ).subscribe(
    //  处理信息
    e => console.log(e),
    //  处理异常，可选
    err => console.log(err),
    //  结束方法， 可选
    () => console.log('finish'),
   )

   this.searchInput.valueChanges.pipe(
     debounceTime(500),
   ).subscribe(
      stockCode => this.getStockInfo(stockCode),
    );
  }

  ngOnInit() {
  }

  onKey(event){
  // 直接从element中取value
  // onKey(event){
    console.log(event.target.value);
    // 直接从element中取value
    // console.log(event.target.value);
  }

  // 直接从element中取value
  onKeyValue(value: string){
    // 直接从element中取value
    console.log(value);
  }

  getStockInfo(value){
    console.log(value);
  }
  
}
