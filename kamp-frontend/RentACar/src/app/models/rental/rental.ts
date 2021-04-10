
export interface Rental{
    rentalId?:number;
    carId:number;
    brandName : string;
    colorName:string;
    carDailyPrice : number;
    customerId : number;
    rentDate : Date;
    returnDate:Date;
}