import { CarDetail } from "./carDetail";
import { ResponseModel } from "../responseModel";

//extends inheritancedır.
export interface CarDetailResponseModel extends ResponseModel {
    data:CarDetail[],
}