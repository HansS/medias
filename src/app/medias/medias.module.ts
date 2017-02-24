import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdCard, MdCardHeader, MdCardContent, MdCardImage, MdCardTitle, MdCardFooter, MdCardActions, MaterialModule } from '@angular/material';

import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaFormComponent } from './media-form/media-form.component';
import { MediaDetailsComponent } from './media-details/media-details.component';

import { mediasRoutes } from './medias-routing';
import { RouterModule } from '@angular/router';
import { MediasService } from './medias.service';
import { MediasComponent } from './medias.component';
import { FavoriteDirective } from './favorite.directive';

import { DistinctCategoriesPipe } from './distinct-categories.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    RouterModule.forChild(mediasRoutes)
  ],
  declarations: [MediasComponent, 
                  MediaItemComponent, 
                  MediaListComponent, 
                  MediaFormComponent,
                  MediaDetailsComponent,
                  FavoriteDirective,
                  DistinctCategoriesPipe],
  exports: [RouterModule, MediasComponent],
  providers: [MediasService]
})
export class MediasModule { }
