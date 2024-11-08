import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma:PrismaService) {}
  create(createTodoDto: CreateTodoDto) {
    return this.prisma.todo.create({data:createTodoDto})
  }

  findAll() {
    return this.prisma.todo.findMany({
    })
  }

  findOne(id: number) {
    return this.prisma.todo.findUnique({where:{
      id:id
    }})
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    // if 
    // return this.prisma.todo.update({where:{
    //   id:id
    // }})
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
