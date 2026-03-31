import { Component, OnInit, signal } from '@angular/core';
import { PokeService } from '../pokemon-service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-component',
  standalone: false,
  templateUrl: './pokemon-component.html',
  styleUrl: './pokemon-component.css',
})

export class PokemonComponent implements OnInit{

  pokemon = signal<Pokemon[]>([]);

  constructor(private service: PokeService) {}

  
  ngOnInit(): void {
      this.service.getPokemons().subscribe(
          {
              next: json => this.pokemon.set(json)
          }
      );
  }
}
