const faker = require('faker');
const db = require('./../lib/dbConnect.js');
const randomPuppy = require('random-puppy');

const makePerson = () => {
  return new Promise((resolve, reject) => {
    const user = {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      zip: faker.address.zipCode(),
      picture: faker.image.avatar(),
    }
    resolve(user);
  })
}
const savePerson = (userInfo) => {
  return db.one({
    name: 'save fake user',
    text: `INSERT INTO members(first, last, username, password, email, zip, picture) VALUES(
       $1, $2, $3, $4, $5, $6, $7) RETURNING members.id;`,
    values: [...Object.values(userInfo)]
  }).then((data) => data.id)
  .catch((err) => console.log(err))
}
const makeDog = (member_id) => {
  return new Promise((resolve, reject) => {
    const dog = {
      member_id,
      name: faker.name.firstName(),
      age: Math.floor(Math.random() * 20),
      weight: Math.floor(Math.random() * 60) + 5,
    }
    resolve(dog)
  }).then((dog) => {
    return randomPuppy().then((puppyUrl) => {
      dog.picture = puppyUrl;
      return dog;
    })
  })
}
const saveDog = (dogInfo) => {
  return db.one({
    name: 'save fake dog',
    text: `INSERT INTO dogs (member_id, name, age, weight, picture) VALUES(
            $1, $2, $3, $4, $5) RETURNING dogs.id;`,
    values: [...Object.values(dogInfo)]
  }).then((data) => data.id)
  .catch((err) => console.log(err))
}
const saveAttrs = (dogId, attrId) => {
  return db.none({
    name: 'save dog attributes',
    text: `INSERT INTO dog_attr_refs (dog_id, attr_id) VALUES(
            $1, $2);`,
    values: [dogId, attrId]
  })
}
const makeAttrs = (dogId, numberOfAttrs) => {
  return new Promise((resolve, reject) => {
    let attrList = [];
    for(let i = 1; i < numberOfAttrs; i++) {
      attrList.push(Math.floor(Math.random() * 21) + 1);
    }
    let attrIdArr = new Set(attrList);
    attrIdArr = [...attrIdArr];

    attrIdArr.forEach((attr_id) => {
      saveAttrs(dogId, attr_id);
    })

    resolve()
  })
}
const makeUserAndDog = () => {
  return new Promise((resolve, reject) => {
    makePerson().then((userData) => savePerson(userData))
    .then((id) => makeDog(id))
    .then((dog) => saveDog(dog))
    .then((dogId) => makeAttrs(dogId, 10))
    .then(()=> resolve())
  })
}
const generateSeeds = (numberOfSeeds) => {
  // Array(query) Array fill << do this later
  const seedPromiseArr = [];

  for(let i = 0; i < numberOfSeeds; i++) {
    seedPromiseArr.push(makeUserAndDog())
  }
  return seedPromiseArr;
}

function seedDb(req, res, next) {
  let seedArr = generateSeeds(req.params.numberOfSeeds);

  Promise.all(seedArr).then(() => next());
}

module.exports = {
  seedDb
}
