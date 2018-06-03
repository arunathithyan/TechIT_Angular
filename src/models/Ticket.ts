import { Updates } from "./Updates";

export class Ticket {
    
    
    constructor(
    
        public _id?: string,public createdForName?: string, public subject?: string,public startDate?: string
         ,public lastUpdated?: string, public status?: string,public priority?: string, public details?: string,
         public phone?: string, public createdForEmail?: string,public ticketLocation?: string,
         public description?: string,public userid?:string,public department?:string,public unit?:string, public updates?: Array<Updates> ) {}
         
  }