import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino:string =''; 
  heroes: Heroe[]=[];
  heroeSeleccionado!: Heroe;  
  hayHeroes: boolean=false;
  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }
  buscando(){
    this.heroesService.getSugerencias(this.termino.trim()).subscribe(heroes => {
      if(heroes.length >0){
        this.heroes = heroes; 
        this.hayHeroes=false; 
      } else{
        this.hayHeroes=true;
      }
    });
  }


  opcioneSelect(event: MatAutocompleteSelectedEvent){
    //xd
    const heroe:
    Heroe = event.option.value;
    if (!heroe){
      this.hayHeroes=false; 
      return; 
    } 
    this.termino = heroe.superhero;  

    this.heroesService.getHeroeID(heroe.id!)
    .subscribe(heroe => this.heroeSeleccionado = heroe);
  }

}
