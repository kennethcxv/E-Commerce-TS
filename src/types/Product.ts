// Interfaces are for defining types on objects

export interface Product{
    id:number;
    title:string;
    description:string;
    price:number;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    }
    quantity:number;
}

