import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

//extends inheritancedır.
export interface brandResponseModel extends ResponseModel {
    data:Brand[],
}