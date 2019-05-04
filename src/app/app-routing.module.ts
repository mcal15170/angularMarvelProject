import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComicDetailComponent} from './page/comic-detail/comic-detail.component';
import {ComicComponent} from './page/comic/comic.component';
import { LoginComponent } from './page/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'comic', component:ComicComponent  },
  { path: 'comic-detail', component:ComicDetailComponent  },
  {path:'login',component:LoginComponent}
  // { path: '**', component:  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
