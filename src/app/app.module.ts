import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CitationComponent } from './citation/citation.component';
import { BookComponent } from './dashboard/book/book.component';
import { JournalComponent } from './dashboard/journal/journal.component';
import { WebsiteComponent } from './dashboard/website/website.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CitationComponent,
    BookComponent,
    JournalComponent,
    WebsiteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
