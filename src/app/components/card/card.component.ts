import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() movie?: Movie[];
  @Output() newItemEvent = new EventEmitter<Movie>();

  addNewItem(movie: Movie) {
    this.newItemEvent.emit(movie);
  }
}
