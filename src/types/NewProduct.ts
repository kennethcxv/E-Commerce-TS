export interface NewProduct {
    category:{
        createdAt:string;
        id:number;
        name:string;
        slug:string;
        updatedAt:string;
    },
    creationAt:string;
    description:string;
    id:number;
    images:string[];
    price:number;
    slug:string;
    title:string;
    updatedAt:string;    
}