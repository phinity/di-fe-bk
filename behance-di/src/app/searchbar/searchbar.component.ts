import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})

export class SearchbarComponent implements OnInit {

  @Output() data: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(/*private http: HttpClientModule*/) { }

  ngOnInit(): void {
    /*this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });*/
  }

  onSearchChange() {
    console.log('onSearchChange');
  }

}
