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

  constructor(public api: Api) {
     this.items = [{"ticketCategories":[{"description":"test","price":123.00,"currency":"EUR"}],"eventCategories":["ART","THEATRE","MUSIC"],"name":"test","description":"test","organizationId":1}]
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
		  console.error('ERROR', err);
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

}
