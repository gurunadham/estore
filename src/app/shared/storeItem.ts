import { signal, Signal } from "@angular/core";

export class StoreItem<T> {
  private readonly _state = signal<T>(null as unknown as T);

    protected constructor(initialState: T) {
        this._state.set(initialState);
    }

    protected setValue(newValue: T) : void {
        this._state.set(newValue);
    }

    protected getValue() : T {
        return this._state();
    }

    protected get Value$() : Signal<T> {
        return this._state;
    }

}