

export class Product {

    constructor (public title: string, public cover: string, public author: string,
                 public price: number, public qty: number, public addedQty: number, public added: boolean
                ) {
    }

    toString () {
        return `You add the following product ${this.title} with quntity ${this.qty}.`;
    }

    setQty(qty: number) {
        this.qty = qty;
    }
    getQty() {
        return this.qty;
    }
    setPrice(price: number) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setName(title: string) {
        this.title = name;
    }
    getName() {
        return this.title;
    }
    setAdded(added: boolean) {
        this.added = added;
    }
    getAdded() {
        return this.added;
    }
    setAddedQty(qunt) {
        this.addedQty = qunt;
    }
    getAddedQty() {
        return this.addedQty;
    }
}
