import { MediaFormComponent } from './media-form/media-form.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediasComponent } from './medias.component';

import { Routes } from '@angular/router';

export const mediasRoutes : Routes = [
    {path: 'medias', 
    component: MediasComponent,
    children: [
        {path: 'list', component: MediaListComponent},
        {path: ':id', component: MediaItemComponent},
        {path: 'add', component: MediaFormComponent}
    ]
}
    
]