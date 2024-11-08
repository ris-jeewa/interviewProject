import { Injectable,Inject } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TodosService {
  constructor(@Inject('TODO_CLIENT') private readonly todoClient:ClientProxy){}

  create(createTodoDto: CreateTodoDto) {
    return this.todoClient.send('create-todo',createTodoDto);
  }

  findAll() {
    return this.todoClient.send('get-todos',{});
  }

  findOne(id: number) {
    return this.todoClient.send('get-todo',id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoClient.send('update-todo',{id,...updateTodoDto});
  }

  remove(id: number) {
    return this.todoClient.send('delete-todo',id);
  }
}
