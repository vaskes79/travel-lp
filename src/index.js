import * as elems from './elems';
import './sass/main.scss';
class User {
    constructor(name){
        this.name = name || 'some name';
    }

    getName() {
        console.log(this.name);
    }
}

const vaskes = new User('kinev');

vaskes.getName();
