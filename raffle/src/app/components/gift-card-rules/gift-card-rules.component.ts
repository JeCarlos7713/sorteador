import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-card-rules',
  templateUrl: './gift-card-rules.component.html',
  styleUrls: ['./gift-card-rules.component.css']
})
export class GiftCardRulesComponent {

  arrMessages = [
    {
      id : 1,
      message: "A pessoa recebe o cartão virtual com validade de 12 meses"
    },
    {
      id : 2,
      message: "Escolhe o seu restaurante Outback favorito"
    },
    {
      id : 3,
      message: "Apresenta o cartão pra curtir um #MomentoOutback*"
    }
  ]
}
