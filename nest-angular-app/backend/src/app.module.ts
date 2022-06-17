import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { ContactsModule } from './contacts/contacts.module';
import { ContactSchema, Contact } from './contacts/entities/contact.entity';
import { ContactsService } from './contacts/contacts.service';
import { ContactsController } from './contacts/contacts.controller';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nest-test:SJDpU7QwxkHGgaYp@cluster0.1g5wf.mongodb.net/nestDatabase?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{name:Contact.name, schema: ContactSchema}]) 
  ],
  controllers: [AppController, ContactsController],
  providers: [AppService, ContactsService],
})
export class AppModule {}
