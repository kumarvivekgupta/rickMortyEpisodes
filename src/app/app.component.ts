import { Component, OnInit } from '@angular/core';
import { RickMortyEpisodeService } from './services/rickMortyEpisodeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rickMortyEpisodes';
  data: any;
  characters = new Map<number, any>();
  constructor(private rickMortyService: RickMortyEpisodeService) {}

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.rickMortyService.getAllEpisodes().subscribe((res) => {

      this.data = res;

      this.data.results[0].characters.forEach(
        async (character: any, index: number) => {
          this.rickMortyService
            .getCharactersById(character)
            .subscribe((res) => {
              this.data.results[0].characters[index] = res;
            });
        }
      );
      console.log('Updated Object',this.data);
      
    });
  }
}
