import { mediasRoutes } from './medias-routing';
import { RouterModule } from '@angular/router';
import { MediasService } from './medias.service';
import { MediasComponent } from './medias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaFormComponent } from './media-form/media-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mediasRoutes)
  ],
  declarations: [MediasComponent, MediaItemComponent, MediaListComponent, MediaFormComponent],
  exports: [RouterModule, MediasComponent],
  providers: [MediasService]
})
export class MediasModule { }
