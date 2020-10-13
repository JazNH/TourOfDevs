import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeveloperService } from '../developer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-developer-detail',
  templateUrl: './developer-detail.component.html',
  styleUrls: ['./developer-detail.component.css']
})
export class DeveloperDetailComponent implements OnInit {

  developer: Developer;

  constructor(
    private route: ActivatedRoute,
    private developerService: DeveloperService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getDeveloper();
  }

  getDeveloper(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.developerService.getDeveloper(id)
      .subscribe(developer => this.developer = developer);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.developerService.updateDeveloper(this.developer)
      .subscribe(() => this.goBack());
  }
}
