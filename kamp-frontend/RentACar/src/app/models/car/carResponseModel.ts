import { Car } from "./car";
import { ResponseModel } from "../responseModel";

//extends inheritancedır.
export interface CarResponseModel extends ResponseModel {
    data:Car[],
} 