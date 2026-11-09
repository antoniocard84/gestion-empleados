import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado';
import { NgForm, FormsModule } from '@angular/forms';
import { Empleado } from '../../models/empleado';

declare var M: any;

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
  providers: [EmpleadoService]
})
export class Empleados implements OnInit {
  constructor(public empleadoService: EmpleadoService) {}

  ngOnInit(): void {}

  agregarEmpleado(form?: NgForm) {
    if (form) {
      this.empleadoService.postEmpleado(form.value)
        .subscribe((res: any) => {
          this.resetForm(form);
          M.toast({ html: 'Guardado satisfactoriamente' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
}