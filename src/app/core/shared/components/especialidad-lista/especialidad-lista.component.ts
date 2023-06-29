import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Especialidad } from 'src/app/models/especialidad';

@Component({
  selector: 'app-especialidad-lista',
  templateUrl: './especialidad-lista.component.html',
  styleUrls: ['./especialidad-lista.component.css'],
})
export class EspecialidadListaComponent implements OnInit {
  @Output() especialidadSeleccionado: EventEmitter<any> =
    new EventEmitter<any>();
  @Input() lista: Especialidad[] = [];
  // usuario!: Especialidad;

  constructor() {
    console.log("listescppp",this.lista)

  }

  ngOnInit(): void {
    console.log("listescppp",this.lista)
    //this.cargarUsuarios()
  }

  enviarEspecialidad(item: any) {
    this.especialidadSeleccionado.emit(item);
  }
}
