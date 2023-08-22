var person={
    name:'Roshni',
    age:20,
    engineer:true,
    friends:['Raj','Selva','Reshma'],
    address:{
        state:'TN',
        city:{
            name:'Karur',
            pincode:639102,
        }
    }
}
console.log(person)
//dot notation
console.log(person.name)
//bracket notation
console.log(person['age'])
console.log(person.friends[0])
console.log(person.address.city.name)
person.engineer=false
person.education=['B.Tech','M.Tech']
delete person.engineer
console.log(person)

