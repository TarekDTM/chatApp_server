import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiveChatGateway } from './live-chat/live-chat.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LiveChatGateway],
})
export class AppModule {}
