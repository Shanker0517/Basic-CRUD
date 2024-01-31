import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoServiceService } from './todo-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TodoAppComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[TodoServiceService],
})
export class AppComponent {
  title = 'CRUD';
  announcement:string = 'Post Form';
}
