import { Component, OnInit } from '@angular/core';
import { Car } from '../models/Car';
import { Cliente } from '../models/Client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

  constructor(protected _ClientService: ClientsService) {
    this.edicion = false;
    this.carModel = "";
    this.carMarca = "";
   }
  clients:any;
  clienteSelected?: any;
  autosCliente?: any;
  carSelected: any;
  edicion: boolean;
  actualClient?: number;

  carModel: string;
  carMarca: string;
  ngOnInit(): void {
    this._ClientService.getClients().subscribe(res =>{
      this.clients = res['content'];
    })
  }

  onChange(obj: any){
    this.actualClient = obj;
    this._ClientService.getClient(obj).subscribe(res =>{
      console.log(res);
      this.clienteSelected = res;
      this.autosCliente = this.clienteSelected.cars;
      console.log(this.autosCliente);
    });
  }

  carChange(obj: any){
    this.carSelected = obj;
    this.carModel = this.carSelected.model_car;
    this.carMarca = this.carSelected.marca
  }

  addCar(){
    this.carModel = "";
    this.carMarca = "";
    this.edicion = true;
  }

  delCar(){
    this.carModel = "";
    this.carMarca = "";
    this.edicion = false;
  }

  saveCar(){
    let car: Car;
    car = {
      model_car: this.carModel,
      marca: this.carMarca,
      client_id: this.actualClient
    }
    this._ClientService.addCar(car).subscribe(res => {
      console.log(res);
    });
  }

}
