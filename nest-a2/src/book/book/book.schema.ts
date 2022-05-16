import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { IsNumber, IsString } from "class-validator";


export type BookDocument = Book & Document;

@Schema()
export class Book {

    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    publishYear: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);

//dto schema for post
 export class PostRouteDto {
     @IsString()
     name: string;

     @IsString()
     author: string;

     @IsNumber()
     publishYear: number



 }