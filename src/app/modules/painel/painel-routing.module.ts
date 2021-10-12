import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelComponent } from './painel.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'rotas'
},
{
  path:'rotas',
  component:PainelComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
