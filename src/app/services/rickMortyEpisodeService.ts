import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})

export class RickMortyEpisodeService {
    env=environment.apiEndpoint;
   
    constructor(private httpClient:HttpClient){}

    getAllEpisodes(){
       return this.httpClient.get(this.env+'episode',{});
    }

    getCharactersById(url:string){
        
        return this.httpClient.get(url,{});
         
        
    }
}