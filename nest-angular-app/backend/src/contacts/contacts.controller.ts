import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, HttpStatus } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  // @Get()
  //   read(): Promise<Contact[]> {
  //     return this.contactsService.readAll();
  //   }
  @Get()
  async fetchAll(@Res() response) {
    const contacts = await this.contactsService.readAll();
    return response.status(HttpStatus.OK).json({
      contacts
    })
}
@Get('/:id')
async findById(@Res() response, @Param('id') id: string) {
    const contact = await this.contactsService.readById(id);
    return response.status(HttpStatus.OK).json({
      contact
    })
}

    
    // @Post('create')
    // async create(@Body() contact: Contact) {
    //   console.log(contact)
    //   return this.contactsService.create(contact);
    // }  
    @Post('/create')
    async createBook(@Res() response, @Body() contact: any) {
      console.log(contact);
        const newContact = await this.contactsService.create(contact);
        return response.status(HttpStatus.CREATED).json({
          newContact
        })
    }
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() contact: Contact): Promise<any> {
        contact.id = Number(id);
        return this.contactsService.update(id, contact);
    }  
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.contactsService.delete(id);
    }
}
