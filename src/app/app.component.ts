import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './service/starwars.service';
import { Observable } from 'rxjs';
import { Starwars } from './service/starwars';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //tabela!:any;
  //allStarwars: Observable<Starwars[]>;  
  allStarwars!: any;
  currentPage = 1;
  mostrar: boolean = false;

  constructor(private starwarsService: StarwarsService, private dialogRef: MatDialog) {}

  public people: any;

  ngOnInit(): void {
    //this.tabela = this.starwarsService.getTabelaStarwars();
    this.loadAllStarwars();
  }

  loadAllStarwars() {  
    this.starwarsService.getallStarwars('https://swapi.dev/api/people').subscribe(
      resposta => {
        this.people = resposta.results;
        this.allStarwars = resposta;
        console.log(resposta);
      },
      erro => {
        console.log('Erro: '+erro)
      }
    );  
  }

  nextPage() {
    if (this.allStarwars.next) {
      this.starwarsService.getallStarwars(this.allStarwars.next).subscribe(
        resposta => {
          this.people = resposta.results;
          this.allStarwars = resposta;
          console.log(resposta);
        },
        erro => {
          console.log('Erro: ' + erro);
        }
      );
    }
  }
  
  previousPage() {
    if (this.allStarwars.previous) {
      this.starwarsService.getallStarwars(this.allStarwars.previous).subscribe(
        resposta => {
          this.people = resposta.results;
          this.allStarwars = resposta;
          console.log(resposta);
        },
        erro => {
          console.log('Erro: ' + erro);
        }
      );
    }
  }

 openDialog() {
//   this.dialogRef.open(PopUpComponent, {
//     data: {
//       name: 'Samuel'
//     }
//   });
//  }
  this.starwarsService.getallStarwars('https://swapi.dev/api/people').subscribe(
      (resposta) => {
        const data = {
          eye_color: resposta.results[0].eye_color // Supondo que você queira pegar o eye_color do primeiro item da resposta
        };

        this.dialogRef.open(PopUpComponent, {
          data: data
        });
      },
      (erro) => {
        console.log('Erro: ' + erro);
      }
    );
  }
}
