import { MediaItem } from './media-item/media-item.model';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Pipe({
  name: 'distinctCategories'
})
export class DistinctCategoriesPipe implements PipeTransform {

  transform(mediaItems, args?: any): any {
        var categories = [];
        console.log('pipe:',mediaItems);        
        
        
      
        

/*
    for (let i = 0; i < mediaItems.length; i++){
      console.log(mediaItems[i]);
      
    }
*/
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });

    return categories.join(', ');
  }

}
