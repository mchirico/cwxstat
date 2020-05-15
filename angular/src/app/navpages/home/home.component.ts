import {Component, OnInit} from '@angular/core';
import {Data, DataService} from './data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  error: any;
  headers: string[];
  data: Data[];

  tmsg: string;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  populateData() {
    this.dataService.getConfig().subscribe(
      items => {
        this.data = items;
      }, // success path
      error => (this.error = error) // error path
    );
  }

  getURL() {
    this.populateData();
  }

  test() {
    this.getURL()
  }

}
