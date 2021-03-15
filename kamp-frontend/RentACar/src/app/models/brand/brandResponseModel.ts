import { Brand } from "./brand";
import { ResponseModel } from "../responseModel";

//extends inheritancedır.
export interface BrandResponseModel extends ResponseModel {
    data:Brand[],
} 