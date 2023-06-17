import { Component } from '@angular/core';
import { count, interval } from 'rxjs';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.css']
})
export class RaffleComponent {

  raffle: string = '?'
  countNumber: number = 1
  index : number = 0
  titleWinner : string = 'O número vencedor é:'
  showGiftCardsRules : boolean = false
  modalRaffle : boolean = false

  numbersRaffle = [
    {
      name    : "Wellington",
      numbers : [1, 93, 129]
    },
    {
      name    : "Vaelma",
      numbers : [2, 29]
    },
    {
      name    : "Kim",
      numbers : [3, 25, 28, 44]
    },
    {
      name    : "Brenda",
      numbers : [4]
    },
    {
      name    : "Irlene",
      numbers : [5, 13, 14, 15, 26, 30]
    },
    {
      name    : "Luiz",
      numbers : [6, 18, 43]
    },
    {
      name    : "Erick",
      numbers : [7, 10, 23, 99, 115]
    },
    {
      name    : "Bruno",
      numbers : [8]
    },
    {
      name    : "Mirian",
      numbers : [9, 16, 39, 41]
    },
    {
      name    : "Patricia",
      numbers : [11, 33]
    },
    {
      name    : "Guilherme",
      numbers : [12]
    },
    {
      name    : "Luiz - Eudes",
      numbers : [17, 60]
    },
    {
      name    : "Ana Alves",
      numbers : [19, 58]
    },
    {
      name    : "Márcia",
      numbers : [20, 36, 45, 47, 59, 64, 65, 87, 146, 147]
    },
    {
      name    : "Samira",
      numbers : [21, 42]
    },
    {
      name    : "Anderson",
      numbers : [22]
    },
    {
      name    : "Marta",
      numbers : [ 24, 27, 31, 32, 34, 38, 40, 46, 48, 50, 51, 53, 54, 55, 61, 66, 69, 70, 71,
                  72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 89, 90, 105, 106, 
                  107, 108, 110, 111, 112, 116, 117, 118, 119, 120, 121, 122, 123, 126, 127,
                  128, 130, 131, 132, 133, 144, 145, 148]
    },
    {
      name    : "Raquel",
      numbers : [ 35, 67, 94 ]
    },
    {
      name    : "Paula",
      numbers : [ 37, 81 ]
    },
    {
      name    : "Izaias",
      numbers : [ 57 ]
    },
    {
      name    : "Vinicius",
      numbers : [ 62, 68 ]
    },
    {
      name    : "Adão",
      numbers : [ 88 ]
    },
    {
      name    : "Leandro",
      numbers : [ 92, 104 ]
    },
    {
      name    : "Mara",
      numbers : [ 91 ]
    },
    {
      name    : "Davi Cedro",
      numbers : [ 95 ]
    },
    {
      name    : "Yuri",
      numbers : [ 96 ]
    },
    {
      name    : "Marianne",
      numbers : [ 97, 98, 102, 103 ]
    },
    {
      name    : "Jennifer",
      numbers : [ 109 ]
    },
    {
      name    : "Madrina - Sara",
      numbers : [ 49, 100, 113 ]
    },
    {
      name    : "Rafaela",
      numbers : [ 101 ]
    },
    {
      name    : "Becker",
      numbers : [ 114 ]
    },
    {
      name    : "Mary - Frei",
      numbers : [ 124, 125 ]
    },
    {
      name    : "Conde",
      numbers : [ 134, 135, 136, 137, 138, 139, 140, 141, 142, 143 ]
    },
    {
      name    : "Michele",
      numbers : [ 149, 150 ]
    },
    {
      name    : "Diná",
      numbers : [ 63 ]
    }
  ]
  
  constructor() {
  }

  playRaffle() {

    const interval = setInterval(() => {
      this.countNumber++
      this.index = Math.floor(Math.random() * 150)
      this.raffle = String(this.index)

      if (this.countNumber === 90) {
        clearInterval(interval);
        const winner = this.numbersRaffle.filter(numberRafle => numberRafle.numbers.includes(this.index))
        
        if (winner.length > 0) {
          this.titleWinner = 'Meus parabéns ' + winner[0].name + "!"
          this.countNumber = 1
          this.showGiftCardsRules = true
          this.modalRaffle = true
        } else {
          this.titleWinner = 'Número não encontrado, por favor, contate a equipe de TI.'
          this.countNumber = 1
        }
      }
    }, 100)
  }
}
