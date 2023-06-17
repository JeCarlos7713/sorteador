import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaffleComponent } from './components/raffle/raffle.component';
import { HeroComponent } from './components/hero/hero.component';
import { GiftCardRulesComponent } from './components/gift-card-rules/gift-card-rules.component';

const routes: Routes = [
    {path: '',               component: HeroComponent},
    {path: 'raffle',         component: RaffleComponent},
    {path: 'gift-card-rules', component: GiftCardRulesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }