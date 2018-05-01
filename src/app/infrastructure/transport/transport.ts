const io                = require('socket.io-client');

export class Transport {

    private socket: any = null;

    public connect(){
        this.socket = io('ws://localhost:999');

        this.socket.emit('data', 'data');
    }

}