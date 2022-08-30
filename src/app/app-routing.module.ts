import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PathComponent } from './components/path/path.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
  {
    path: '',
    component: PathComponent
  },
  { path: '**', component: NotFoundComponent } // Wildcard route for a 404 page
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
