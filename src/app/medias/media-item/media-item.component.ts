import { MediaItem } from './media-item.model';
import {DistinctCategoriesPipe } from '../distinct-categories.pipe';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  @Input() mediaItem;
  @Output() delete = new EventEmitter<MediaItem>();
  constructor() { }

  ngOnInit() {
  }

  onDelete(){
    this.delete.emit(this.mediaItem);
  }
}
