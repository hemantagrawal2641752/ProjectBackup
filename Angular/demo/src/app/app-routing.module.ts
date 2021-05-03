import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContectsComponent } from './contects/contects.component';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path : '',component: HomeComponent},
  { path : 'about',component: AboutComponent},
  { path : 'contects',component: ContectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
