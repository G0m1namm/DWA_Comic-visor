import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comicImages'
})
export class ComicImagesPipe implements PipeTransform {

  transform(img: any): any {
    
    if(!img){
      return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
    }

    if(img.length > 0){      
      return `${img[0].path}.${img[0].extension}`;
    }else{
      return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
    }
  }

}
