import { Component, OnInit, Input } from '@angular/core';
import { ComicService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
  providers: [ComicService]
})


export class ListCardsComponent implements OnInit {
  public listComics:any[] = [];
  public listChecked:any[] = [];

  @Input() userFilter: any;
  
  constructor(
    private _ComicService:ComicService,
  ) { 
  }

  ngOnInit() {
     this._ComicService.getComics()
        .subscribe((res:any)=>{
          this.listComics =  res['data']['results'];
          this.listChecked =  res['data']['results'];
          // console.log(this.listComics);
        });
  }

  gestionarLike(event: any,value: boolean){

    if(value){
      let like = parseInt(event.target.parentNode.childNodes[1].textContent);
      like++;
      event.target.parentNode.childNodes[1].textContent = like;
    }else{
      let dislike = parseInt(event.target.parentNode.childNodes[3].textContent);
      dislike++;
      event.target.parentNode.childNodes[3].textContent = dislike;
    }
  }

  searchComic(word){
    this.listChecked = this._ComicService.searchComic(word,this.listComics);
    //  console.log(this.comics);
  }

}
