import * as events from "events";

export class ErrorEventEmitter extends events.EventEmitter {
    on(event: string | symbol, listener: (...args: any[]) => void): this {
        return super.on(event, listener);
    }

    emit(event: string | symbol, ...args: any): boolean {
        return super.emit(event, args);
    }
}