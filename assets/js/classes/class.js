
class Page {
    constructor(text) {
        this.text = text
    }

    Print() {
        console.log(this.text);
    }
}



class Notebook {
    constructor() {
        this.pages = [];
    }

    addPage(text) {
        let page = new Page(text)
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages) {
            console.log(page);
        }
    }

}


const mathBook = new Notebook();
mathBook.addPage('This is a new page for this notebooks');
mathBook.addPage('This is another page');
mathBook.print();