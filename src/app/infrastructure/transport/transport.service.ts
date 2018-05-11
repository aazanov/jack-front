import {Transport}                  from "./transport";
import {Utils}                      from "../../../helpers/utils/utils";

class DialogUnit {
    constructor(
        public uuid: string,
        public promise: {
            resolve: Function,
            reject: Function
        }
    ){}

    public timestamp = new Date();
}

// --------------------------------------------------------------------------------------------------------------------

export class TransportService {
    constructor(){
        this.transport.connect();
        this.transport.onMessage(this.transportMessageHandler.bind(this));
    }

    // --- SECTION [MEMBERS] ------------------------------------------------------------------------------------------
    private transport           : Transport = new Transport();
    private dialogQueue         : DialogUnit[] = [];

    private static instance     : TransportService = new TransportService();

    private transportMessageHandler(message: any){
        let dialogUnit = this.dialogQueue.find((needle: DialogUnit) => needle.uuid === message.uuid);
        if (dialogUnit){
            delete message.uuid;
            this.dialogQueue.splice(this.dialogQueue.indexOf(dialogUnit), 1);
            dialogUnit.promise.resolve(message);
        }
    }

    // --- SECTION [METHODS] ------------------------------------------------------------------------------------------

    // --- SECTION [METHODS STATIC] -----------------------------------------------------------------------------------

    private static getInstance(){
        return this.instance || (this.instance = new TransportService());
    }

    static dispose(){
        this.instance && this.instance.transport.dispose();
        this.instance = null;
    }

    static send(message: any){
        this.getInstance().transport.send(message);
    }

    static async dialog(message: any): Promise<any> {
        message.uuid = Utils.createUUID();
        return await new Promise((resolve, reject)=>{
            this.getInstance().dialogQueue.push(
                new DialogUnit(
                    message.uuid,
                    {
                        resolve: resolve,
                        reject: reject
                    }
                )
            );
            this.send(message);
        })
    }

}