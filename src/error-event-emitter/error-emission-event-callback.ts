import { ErrorEventEmitter } from "./error-event-emitter";

export function errorEmissionEventCallback(cb: any) {
    const errorEventEmitter = new ErrorEventEmitter();
    errorEventEmitter.on('errorEmission', cb)
}