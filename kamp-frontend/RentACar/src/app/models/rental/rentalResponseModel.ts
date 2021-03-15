import { Rental } from "./rental";
import { ResponseModel } from "../responseModel";

//extends inheritancedır.
export interface RentalResponseModel extends ResponseModel {
    data:Rental[],
}