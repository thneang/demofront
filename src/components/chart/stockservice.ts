import { Client } from '@stomp/stompjs';

export default class StockService {
  private client: Client;
  private listeners: Function[] = [];

  constructor() {
    this.client = new Client({
      brokerURL: import.meta.env.VITE_WS_URL,
      connectHeaders: {},
      debug: (msg) => console.log(msg),
      reconnectDelay: 5000,
    });
    this.client.onConnect = (frame) => {
      console.log("Connected: " + frame);
      this.client?.subscribe("/topic/stocks", (message: any) => {
        const data = JSON.parse(message.body);
        this.listeners.forEach((listener) => listener(data));
      });
    };
    this.connect();
  }
  

  private connect() {
    this.client.activate();
  }

  addListener(listener: Function) {
    this.listeners.push(listener);
  }

  close() {
    this.client.deactivate();
  }
}
