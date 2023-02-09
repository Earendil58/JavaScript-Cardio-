const heroes = ['menem', 'cavallo', 'milei', 'mariano Grondona'];

for (let i = 0; i < 5; i++) {
    console.log(heroes[i]);

}

for (let i in heroes) {
    console.log(heroes[i]);
}


for (let i of heroes) {
    console.log(i);
}