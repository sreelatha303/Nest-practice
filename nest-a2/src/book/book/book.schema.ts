import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

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