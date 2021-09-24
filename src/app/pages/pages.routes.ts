/**********/
//*! Importaciones
    //* |-> Core de angular
    import { Routes, RouterModule } from '@angular/router';
    import { NgModule } from '@angular/core';
    //* |-> Componentes
    import { HomeComponent } from './home/home.component';
    import { FoundPageComponent } from './found-page/found-page.component';
    import { AboutComponent } from './about/about.component';
    import { ClasesComponent } from './clases/clases.component';
import { MisClasesComponent } from './mis-clases/mis-clases.component';
import { ValidAuthGuard } from '../guards/valid-auth.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ValidAdminGuard } from '../guards/valid-admin.guard';

const pages_routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'clases',
        component: ClasesComponent
    },
    {
        path: 'mis-clases',
        component: MisClasesComponent,
        canActivate: [ValidAuthGuard]
    },
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ValidAdminGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: FoundPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(pages_routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
