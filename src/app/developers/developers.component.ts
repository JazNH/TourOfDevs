import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DeveloperService } from '../developer.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-developers',//this is what is used to connect to the app.component.html
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
//always export the component class so you can import it elsewhere
export class DevelopersComponent implements OnInit {

  //selectedDeveloper: Developer;

  developers: Developer[];
  
  constructor(
    private developerService: DeveloperService
    //private messageService: MessageService
    ) { }

  //calls this after creating a component 
  ngOnInit() {
    this.getDevelopers();
  }

  // onSelect(developer: Developer): void {
  //   this.selectedDeveloper = developer;
  //   this.messageService.add('DevelopersComponent: Selected developer id=${developer.id}');
  // }

  getDevelopers(): void {
    this.developerService.getDevelopers()
    .subscribe(developers => this.developers = developers);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.developerService.updateDeveloper({ name } as Developer)
      .subscribe(developer => {
        this.developers.push(developer)
    })
  }

  delete(developer: Developer): void {
    this.developers = this.developers.filter(h => h !== developer);
    this.developerService.deleteDeveloper(developer).subscribe();
  }
}
