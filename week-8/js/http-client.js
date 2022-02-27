import { init } from "express/lib/application";

/*
Title: HTTP-Client Js
Author: Saw Phaung
Date: Feb 26, 2022
*/
export class HttpClient {
    async get(url, params="") {   
       url = new URL(url);
       url.search = new URLSearchParams(params);

       const res = await fetch(url.toString(),{
           method: "GET",
       });

       return res.json();
    }
    
}