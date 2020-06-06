import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cards } from '../../models/Cards';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Cards;
  @Output() deleteTodo: EventEmitter<Cards> = new EventEmitter();
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
  }
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.card.completed
    };
    return classes;
  }
  isChecked() {
    return this.card.completed;
  }

  onCheck(card) {
    card.completed = !card.completed;
    this.cardsService.isCompleted(card).subscribe(a => console.log(a));
  }

  onDelete(card) {
    this.deleteTodo.emit(card);
  }
}
