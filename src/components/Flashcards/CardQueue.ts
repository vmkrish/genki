import type { SRSItem } from "./SRSItem";

export interface StorageRef {
    key: string;

    get: () => any;
    set: (value: string) => void;
}

export function Get(key: string) {
    return new LSRef(key).get();
}

export function Set(key: string, value: string) {
    return new LSRef(key).set(value);
}

class LSRef implements StorageRef{
    key: string;

    constructor(key: string = '') {
        this.key = key;
    }

    get() {
        return localStorage.getItem(this.key);
    }

    set(value: string) {
        localStorage.setItem(this.key, value);
    }
}

class SRSItemQueue {
    id: string = '';
    queue: SRSItem[] = [];
}

class Session {
    queue: SRSItemQueue = new SRSItemQueue;
    index: number = 0;
}