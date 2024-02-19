import { Module } from '@nestjs/common';
import { LiveChatGateway } from './live-chat.gateway';
@Module({
  providers: [LiveChatGateway],
})
export class ChatModule {}
