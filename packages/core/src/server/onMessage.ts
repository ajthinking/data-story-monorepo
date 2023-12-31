import WebSocket from 'ws';
import { describe, open, run, save } from './messageHandlers'
import { MessageHandler } from './MessageHandler';
import { Container } from '../Container';

export const onMessage = async (
  ws: WebSocket,
  message: string,
  app: Container,
) => {
  const parsed: { type: string } = JSON.parse(message.toString())

  const handlers: Record<string, MessageHandler<any>> = {
    describe,
    open,
    save,
    run,
  }

  const handler = handlers[parsed.type];
  if(!handler) throw("Unknown message type: " + parsed.type)

  await handler(ws, parsed, app)
}