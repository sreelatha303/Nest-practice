import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type ContactDocument = Contact & Document;
@Schema()
export class Contact {
  @Prop()
  id: number;
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  phone: string;
  @Prop()
  address: string;
}
export const ContactSchema = SchemaFactory.createForClass(Contact);
