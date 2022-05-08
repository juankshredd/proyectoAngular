import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ProductsComponent } from './pages/products/products.component';

const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent},
    { path: 'about', component: AboutComponent},
    {path: 'products', component: ProductsComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes,{useHash: true})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}