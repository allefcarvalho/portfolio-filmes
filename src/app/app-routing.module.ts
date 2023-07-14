import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListRenderComponent } from './components/list-liked-movies/list-render/list-render.component';
import { MoviesRenderComponent } from './components/list-movies/movies-render/movies-render.component';

const routes: Routes = [
  {path: '', component: MoviesRenderComponent},
  {path: 'list', component: ListRenderComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
