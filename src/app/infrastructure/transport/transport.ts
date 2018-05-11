import {TransportConfig}        from "../../config/transport.config";
import {EventEmitter}           from "events";

const io = require('socket.io-client');

export class Transport {

    private socket: any = null;
    private eventEmitter = new EventEmitter();

    // --- SECTION [METHODS] ------------------------------------------------------------------------------------------

    public connect(){
        this.socket = io(TransportConfig.host);
        this.onIOConnection(this.socket);
    }

    public send(message: any){
        this.socket && this.socket.emit('message', message);
    }

    public onMessage(action: Function){
        this.eventEmitter.on('message', action.bind(this));
    }

    public dispose(){
        this.eventEmitter.removeAllListeners();
    }

    private onIOConnection(socket: any){
        socket.on('message', (message: any) => {
            this.eventEmitter.emit('message', message);
        })
    }

}