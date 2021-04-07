// export interface Rental{
//     carId:number;
//     rentalId :number;
//     brandName :string;
//     firstName: string;
//     lastName:string;
//     rentDate: Date;
//     returnDate: Date;
// }
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