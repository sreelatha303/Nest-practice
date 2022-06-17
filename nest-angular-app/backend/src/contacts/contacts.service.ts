import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactDocument, Contact } from './entities/contact.entity';
import { Model } from "mongoose";

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {}

  
  async create(contact: Contact): Promise<Contact> {
    console.log(contact);
    const newContact = new this.contactModel(contact);
    return newContact.save();
}

async readAll(): Promise<Contact[]> {
    return await this.contactModel.find().exec();
}

async readById(id): Promise<Contact> {
    return await this.contactModel.findById(id).exec();
}

async update(id, contact: Contact): Promise<Contact> {
    return await this.contactModel.findByIdAndUpdate(id, contact, {new: true})
}

async delete(id): Promise<any> {
    return await this.contactModel.findByIdAndRemove(id);
}
}
