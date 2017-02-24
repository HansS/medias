import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MediaItem } from './../media-item/media-item.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css']
})
export class MediaFormComponent implements OnInit {

  mediaForm:FormGroup;
  mediaItem: MediaItem;
  mediaTypes = ['Book','Video','Course','Tutorial'];

  constructor(private formBuilder: FormBuilder) { 
    //this.mediaItem = new MediaItem(5,"New Media Item","Book","Angular 2");
  }

  ngOnInit() {
    this.mediaForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      mediaType: new FormControl(),
      category: new FormControl()
    });

    /*
    this.formBuilder.group({
      id: this.formBuilder.control('id'),
      title: this.formBuilder.control('title'),
      mediaType: this.formBuilder.control('mediaType'),
      category: this.formBuilder.control('category')
    })
    */
  }

  submitForm(value){
    console.log(value);
    
  }
}
