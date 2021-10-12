import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'painel'
  },
  {
    path:"painel",
    loadChildren:()=>import('./modules/painel/painel.module').then(r=>r.PainelModule)
  },
  { path: '**', component: EmptyRouteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
