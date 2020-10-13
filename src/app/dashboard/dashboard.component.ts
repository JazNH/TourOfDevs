import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  developers: Developer[] = [];

  constructor(private developerService: DeveloperService) { }

  ngOnInit() {
    this.getDevelopers();
  }

  getDevelopers(): void {
    this.developerService.getDevelopers()
      .subscribe(developers => this.developers = developers.slice(0, 4));
  }
}