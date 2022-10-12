let dogs = [
    {
        name: 'Latte',
        breed: 'Golden retriver half',
        color: 'Brown',
        age: 6,
        weight: 26,
        talk() {
            console.log(this.name + 'หงิง หงิง');

        }
    },
    {
        name: 'Mommam',
        breed: 'Golden retriver half',
        color: 'Black and Brown',
        age: 5,
        weight: 28
    },
    {
        name: 'Sugar',
        breed: 'Golden retriver half',
        color: 'Brown',
        age: 5,
        weight: 24
    },
    {
        name: 'Capuchino',
        breed: 'Golden retriver half',
        color: 'Brown and Black',
        age: 6,
        weight: 27
    },
    {
        name: 'Moccha',
        breed: 'Golden retriver half',
        color: 'Brown and Black',
        age: 6,
        weight: 27
    },

];

dogs.forEach((dog) => {
    console.log(dog.name + ' ,' + dog.breed + ' ,' + dog.color + ' ,' + dog.age + ' ,' + dog.weight);
    document.getElementById("conTent4").innerHTML =(dog.name + ' ,' + dog.breed + ' ,' + dog.color + ' ,' + dog.age + ' ,' + dog.weight);
});


