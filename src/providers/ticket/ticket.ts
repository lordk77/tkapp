import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import 'rxjs/add/operator/map';
import {NavController} from "ionic-angular";


/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TicketProvider {

  tickets: any;

  constructor(public api: Api) {
     this.tickets = [{"name":"test","description":"test","ticketUUID":1}]
		}


  getTickets(){
    return this.tickets;
  }

	refreshTickets()
	{
		var params=[];
		let seq = this.api.get('event/list/0', params).map(res => res.json());

		seq.subscribe(data => {
			console.log(data);
			console.log("description: " + data.length);
			this.tickets = data;
		}, err => {
		  console.error('ERROR', err.currentTarget);
		});

		return seq;
	}

	buyTicket(eventUUID)
  {
    this.tickets[this.tickets.lengh] = {"name":"test","description":"test","ticketUUID":eventUUID,"eventUUID":eventUUID};
  }




}

