export interface SRSItem {
    id: String,
    last: Date,
    next: Date,
    front: String,
    back: String,
    level: number,

    correct: () => void,
    incorrect: () => void,
};

export function NewDefaultSRSItem(): SRSItem {
    return new SRSItemCl();
}

export function SRSItemFromJson(json: string): SRSItemCl {
    const obj = JSON.parse(json);
    return Object.assign(new SRSItemCl, obj);
}

export class SRSItemCl {
    id: string = '';
    last_millis: number = 0;
    next_millis: number = 0;
    front: string = 'front';
    back: string = 'back';
    level: number = 0;

    get['last']() {
        return new Date(this.last_millis);
    }

    get['next']() {
        return new Date(this.next_millis);
    }

    correct() {
        this.last_millis = new Date().getTime();
        this.next_millis = this.last_millis + (24 * 60 * 60 * 1000);
        this.level += 1;
    }

    incorrect() {
        this.last_millis = new Date().getTime();
        this.next_millis = this.last_millis + (24 * 60 * 60 * 1000);
        if (this.level > 1) {
            this.level -= 1;
        }
    }
};