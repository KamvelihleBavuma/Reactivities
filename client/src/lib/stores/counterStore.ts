import { makeAutoObservable } from "mobx";

export default class CounterStore {
    title = 'Counter store';
    counter = 42;
    events: string[] = [
        `Inialized count is at ${this.counter}`
    ]

    constructor() {
        makeAutoObservable(this)
    }

    increment = (amount = 1) => {
        this.counter += amount;
        this.events.push(`Incremented by ${amount} - counter is now ${this.counter}`);
    }

    decrement = (amount = 1) => {
        this.counter -= amount;
        this.events.push(`Decremented by ${amount} - counter is now ${this.counter}`);
    }

    get eventCount() {
        return this.events.length;
    }
}