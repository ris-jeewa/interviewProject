import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    
    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
