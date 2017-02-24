import { MediaItem } from './../media-item/media-item.model';
import { MediasService } from './../medias.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit {

  items = [];
  subscription: any;
  constructor(private service: MediasService) { }

  ngOnInit() {
   this.subscription = this.service.getMediaItems()
      .subscribe(ms => this.items = ms);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onMediaItemDelete(mediaItem){
    console.log(mediaItem);
    
  }
}
