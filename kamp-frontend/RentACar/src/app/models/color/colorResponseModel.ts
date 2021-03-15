import { ResponseModel } from "../responseModel";
import { Color } from "./color";

//extends inheritancedır.
export interface ColorResponseModel extends ResponseModel {
    data:Color[],
}