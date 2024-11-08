import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports:[
    ClientsModule.register([
      {
        name:'TODO_CLIENT',
        transport:Transport.TCP,
        options:{
          port:3001
        }
      }
    ]),
  ],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
