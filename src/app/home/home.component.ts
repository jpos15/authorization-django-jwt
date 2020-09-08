import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getAll()
      .subscribe((retorno: any) => {
        this.users = retorno.results;
      })
  }

}
