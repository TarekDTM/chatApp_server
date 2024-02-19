import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(3004, { namespace: 'chats' })
export class LiveChatGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log(client);
    console.log(payload);
    return 'Hello world!';
  }
}
