import { Car } from "./car";
import { ResponseModel } from "./responseModel";

//extends inheritancedır.
export interface carResponseModel extends ResponseModel {
    data:Car[],

}