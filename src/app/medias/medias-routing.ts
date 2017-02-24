import { MediaDetailsComponent } from './media-details/media-details.component';
import { MediaFormComponent } from './media-form/media-form.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediasComponent } from './medias.component';

import { Routes } from '@angular/router';

export const mediasRoutes : Routes = [
    {path: 'medias', 
    component: MediasComponent,
    children: [
        {path: 'list', component: MediaListComponent},
        {path: 'add', component: MediaFormComponent},
        {path: ':id', component: MediaDetailsComponent}
    ]
}
    
]