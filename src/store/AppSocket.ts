export class AppSocket {
    socket: WebSocket;

    constructor() {
        this.socket = new WebSocket('ws://localhost:3000');

        this.socket.addEventListener('open', () => {
            console.log('WebSocket连接已建立');
        });

        this.socket.addEventListener('close', (event) => {
            console.log('WebSocket连接已关闭', event);
        });

        this.socket.addEventListener('error', (event) => {
            console.error('WebSocket报错', event);
            
        });
    }
};