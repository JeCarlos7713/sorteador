import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaffleComponent } from './components/raffle/raffle.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
    {path: '', component: HeroComponent},
    {path: 'raffle', component: RaffleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }