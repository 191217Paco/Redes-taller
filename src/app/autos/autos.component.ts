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
    this.isClientSelected = false;
    this.carModel = "";
    this.carMarca = "";
   }
  isClientSelected: boolean;
  clients:any;
  clienteSelected?: any;
  autosCliente?: Car[];
  carSelected?: Car;
  edicion: boolean;
  actualClient?: number;
  actualCar?: number;
  carEdit?: Car;
  carModel: string;
  carMarca: string;
  ngOnInit(): void {
    this._ClientService.getClients().subscribe(res =>{
     const content = res;
     this.clients = content.content;
    })
  }

  onChange(obj: any){
    this.actualClient = obj;
    this._ClientService.getClient(obj).subscribe(res =>{
      const content = res;
      this.autosCliente = content.content.cars;
    });
    this.isClientSelected = true;
  }

  carChange(obj: number){
    this.actualCar = obj;
    this._ClientService.getCar(this.actualCar).subscribe(res=>{
      const content = res;
      this.carEdit = content.content;
      this.carModel = content.content.model_car;
      this.carMarca = content.content.marca;
    })
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
      window.location.reload();
    });
  }

  edit(){
    this._ClientService.deleteCar(this.actualCar).subscribe( res => {
      console.log(res);
      window.location.reload();
    })
  }

}
