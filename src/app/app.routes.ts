import { Routes } from '@angular/router';
import { RoomComponent } from './components/room/room.component';
import { ReviewComponent } from './components/review/review.component';
import { FaqComponent } from './components/faq/faq.component';


export const routes: Routes = [

    {
        path: 'room',
        component: RoomComponent,
    },
    {
        path: 'review',
        component: ReviewComponent,
    },
    {
        path: 'review/:roomId',
        component: ReviewComponent,
    },
    {
        path: 'faq',
        component: FaqComponent,
    }



];
