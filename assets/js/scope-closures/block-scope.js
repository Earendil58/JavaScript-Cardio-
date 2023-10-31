function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Banana'; //block scope
        const fruit3 = 'Orange'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}


fruits();