import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { ComicService } from './services/comics.service';
import { ComicImagesPipe } from './pipes/comic-images.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListCardsComponent,
    ComicImagesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
