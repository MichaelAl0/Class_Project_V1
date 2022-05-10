import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitationComponent } from './citation/citation.component';
import { HomeComponent } from './home/home.component';
import { PublishedComponent } from './published/published.component';



const routes: Routes = [
{path:'',
component: HomeComponent
},
{path:'citation',
component: CitationComponent

},
{
  path:'published',
  component:PublishedComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
