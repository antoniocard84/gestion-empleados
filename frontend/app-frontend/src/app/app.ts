import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Empleados } from './components/empleados/empleados';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Empleados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'app-frontend';
}