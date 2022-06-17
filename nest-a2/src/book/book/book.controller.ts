import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Book, PostRouteDto } from "src/book/book/book.schema";
import { BookService } from "src/book/book/book.service";
import { ParseIntPipe } from "@nestjs/common"

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService){}

    @Post()
    async createBook(@Res() response, @Body() book: PostRouteDto) {
        const newBook = await this.bookService.create(book);
        return response.status(HttpStatus.CREATED).json({
            newBook
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const books = await this.bookService.readAll();
        return response.status(HttpStatus.OK).json({
            books
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id: string) {
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        // To override status code and error message
        // throw new HttpException({
        //     status: 100,
        //     error: "This is custome error message"
        // }, HttpStatus.FORBIDDEN);
        const book = await this.bookService.readById(id);
        console.log("type of id", typeof id);
        return response.status(HttpStatus.OK).json({
            book
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() book: Book) {
        const updatedBook = await this.bookService.update(id, book);
        return response.status(HttpStatus.OK).json({
            updatedBook
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedBook = await this.bookService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedBook
        })
    }
}