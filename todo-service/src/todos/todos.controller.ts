import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller()
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @MessagePattern('create-todo')
  create(@Payload() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @MessagePattern('get-todos')
  findAll() {
    return this.todosService.findAll();
  }

  @MessagePattern('get-todo')
  findOne(@Payload() id: number) {
    return this.todosService.findOne(id);
  }

  @MessagePattern('update-todo')
  update(@Payload() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(updateTodoDto.id, updateTodoDto);
  }

  @MessagePattern('delete-todo')
  remove(@Payload() id: number) {
    return this.todosService.remove(id);
  }
}
