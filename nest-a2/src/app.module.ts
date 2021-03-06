import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book/book/book.schema';
import { BookService } from './book/book/book.service';
import { BookController } from './book/book/book.controller';
@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://nest-angular:SJDpU7QwxkHGgaYp@cluster0.1g5wf.mongodb.net/nestDatabase?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
