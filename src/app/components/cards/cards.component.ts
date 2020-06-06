import { Component, OnInit } from '@angular/core';
import { Cards } from '../../models/Cards';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  todos: Cards[];
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.getTodos().subscribe(cards => {
      this.todos = cards;
    });
  }

  deleteTodo(todo: Cards) {
    this.todos = this.todos.filter(card => card.id !== todo.id);
    this.cardsService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Cards) {
    this.cardsService.addTodo(todo).subscribe(card => {
      this.todos.push(card);
      console.log(card);
    });
  }

}
