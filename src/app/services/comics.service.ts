import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class ComicService {
    public url: string;

    constructor( private _http:HttpClient ){
        this.url = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6";
    }

    getComics() {
        return this._http.get(this.url);
    }

    searchComic(termino:string, comics:any[]){
        let comicsArr:any[] = [];
        let name = termino.toLocaleLowerCase();
    
        if(termino.length>0){
          comics.forEach(element=>{
    
            let title = element.title.toLocaleLowerCase();
    
            if(title.indexOf(termino) >=0){
              comicsArr.push(element);
            }
          })
    
          return comicsArr;
        }
        else{
          return comics;
        }
      }
}