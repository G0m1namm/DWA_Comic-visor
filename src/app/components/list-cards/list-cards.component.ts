import { Component, OnInit, Input } from '@angular/core';
import { ComicService } from 'src/app/services/comics.service';
import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.scss'],
  providers: [ComicService]
})
export class ListCardsComponent implements OnInit {
  public listComics:any = [];
  
  constructor(
    private _ComicService:ComicService,
  ) { 

  }

  ngOnInit() {
     this._ComicService.getComics()
        .subscribe((res:any)=>{
          this.listComics =  res;
          console.log(this.listComics.data.results);
        });
  }

  gestionarLike(event: any,value: boolean){
    console.dir(event.target.parentNode.childNodes[1].textContent);

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

}
