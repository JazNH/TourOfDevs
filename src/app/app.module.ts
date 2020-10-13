import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DevelopersComponent } from './developers/developers.component';
import { FormsModule } from '@angular/forms';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';// the NgModel lives here from the developers.component.html file
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { DeveloperSearchComponent } from './developer-search/developer-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DevelopersComponent,
    DeveloperDetailComponent,
    MessagesComponent,
    DashboardComponent,
    DeveloperSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // and adding the forms module here too 
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
