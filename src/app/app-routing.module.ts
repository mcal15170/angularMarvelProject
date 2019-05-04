import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComicDetailComponent} from './page/comic-detail/comic-detail.component';
import {ComicComponent} from './page/comic/comic.component';
import {GoogleLoginComponent} from './page/google-login/google-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'google-login', pathMatch: 'full' },
  { path: 'comic', component:ComicComponent  },
  { path: 'comic-detail', component:ComicDetailComponent  },
  {path:'google-login',component:GoogleLoginComponent}
  // { path: '**', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
