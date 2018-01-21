import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/rock'},
    { path: 'rock', component: PageComponent },
    { path: 'paper', component: PageComponent },
    { path: 'scissor', component: PageComponent }
]; 

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule {

}