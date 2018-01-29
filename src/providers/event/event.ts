import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import 'rxjs/add/operator/map';


/*
  Generated class for the EventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventProvider {

  items: any;

	eventCategories : any;



  constructor(public api: Api) {
     this.items = [{"ticketCategories":[{"description":"Full price","price":10.00,"currency":"EUR"}],"eventCategories":["ART","MUSEUM"],"name":"Parco Archeologico di Ostia Antica","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","organizationId":1,"eventUUID":"1","img":"assets/evt-img/ostia_antica.jpg"}]
	this.eventCategories =
			[
				{id:"MUSIC", title:"Music", img:"assets/img/concert.jpg"},
				{id:"ART", title:"Art", img:"assets/img/art-gallery.jpg"},
				{id:"THEATRE", title:"Theatre", img:"assets/img/THEATRE.jpg"},
				{id:"MUSEUM", title:"Museum", img:"assets/img/museum.jpg"},
				{id:"SPORT", title:"Sport", img:"assets/img/sport.jpg"}
			];


		}


	filterItems(searchTerm){
        return this.items.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

	filterItemsByCategory(selectedCategory){
        return this.items.filter((item) => {
			if(item.eventCategories)
				return item.eventCategories.indexOf(selectedCategory.toUpperCase()) > -1;
			else return [];
        });
    }



	refreshEvents()
	{
		var params=[];
		let seq = this.api.get('event/list/0', params).map(res => res.json());

		seq.subscribe(data => {
			console.log(data);
			console.log("description: " + data.length);
			this.items = data;
		}, err => {
		  console.error('ERROR', err.currentTarget);
		});

		return seq;
	}



	getEventCategoryCount(selectedCategory)
	{
		return this.items.filter((item) => {
			if(item.eventCategories)
				return item.eventCategories.indexOf(selectedCategory.toUpperCase()) > -1;
			else return [];
        }).length;
	}

	getEventByUUID(eventUUID)
  {
    return this.items.filter((item) => {
      if(item.eventUUID)
        return item.eventUUID==eventUUID;
      else return [];
    });
  }


getEventCategories(){
	return this.eventCategories;
}
}

