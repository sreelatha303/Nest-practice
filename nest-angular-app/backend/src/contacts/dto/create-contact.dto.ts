
import { IsNumber, IsString } from "class-validator";


export class CreateContactDto {
    @IsNumber()
    id: number;
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsString()
    address: string;

}
