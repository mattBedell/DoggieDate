const fetch = require('node-fetch');
const faker = require('faker');

const db = require('../utils/db-connect');


function getAttrs() {
  return db.many('SELECT * FROM dog_attrs;')
    .then(results => results.map(attr => attr.id))
    .then(ids => {
      return function (number) {
        attributeIds = [];
        for(let i = 0; i < number; i++) {
          attributeIds.push(ids[Math.floor(Math.random() * ids.length)]);
        };
        return attributeIds;
      };
  })
}

function makeMembers(num) {
  return [...Array(parseInt(num))].map(() => {
    return {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      zip: faker.address.zipCode(),
      picture: faker.image.avatar(),
    };
  })
}

function makeDogs(memberIdArr, dogAmount) {
  let dogs = [];
  memberIdArr.forEach(member_id => {
    for(let i = 0; i < Math.floor(Math.random() * dogAmount) + 1; i++) {
      dogs.push({
        member_id,
        name: faker.name.firstName(),
        age: Math.floor(Math.random() * 20),
        weight: Math.floor(Math.random() * 60) + 5,
      })
    };
  })
  return dogs;
}

function makeDogsWithPictures(memberIds, dogAmount) {

  return Promise.all(makeDogs(memberIds, dogAmount).map(dog => fetch('https://dog.ceo/api/breeds/image/random')
  .then(r => r.json())
  .then(r => Object.assign({}, dog, { picture: r.message }))));
}

function saveEntity(entityArr, table, rtrnIds = true) {
  let keys = Object.keys(entityArr[0]);
  let queryColumns = `${keys.reduce((str, next) => `${str}, ${next}`)}`;
  let queryValues = `${keys.reduce((str, next) => `${str}/, $/${next}`)}`;
  let returnQuery = rtrnIds ? 'RETURNING id' : '';

  return db.task(task => {
    let inserts = entityArr.map(insertObj => task.oneOrNone(`INSERT INTO ${table}(${queryColumns}) VALUES($/${queryValues}/) ${returnQuery};`, insertObj));
    return task.batch(inserts);
  })
  .then(result => result.filter(entity => entity).map(entity => entity.id))
}

function makeAttrRefs(ids, attrFunc) {
  refs = [];
  ids.forEach(dog_id => {
    new Set(attrFunc(8)).forEach(attr_id => refs.push({
      dog_id,
      attr_id,
    }))
  })
  return refs;
}

async function generate(req, res, next) {
  let makeAttrs = await getAttrs();
  let memberIds = await saveEntity(makeMembers(req.params.number), 'members');
  let dogs= await makeDogsWithPictures(memberIds, 3);
  let dogIds = await saveEntity(dogs, 'dogs');
  let dogAttrRefs = makeAttrRefs(dogIds, makeAttrs);
  await saveEntity(dogAttrRefs, 'dog_attr_refs', false);
  
  res.seedCount = {
    members: memberIds.length,
    dogs: dogIds.length
  };
  next();
}

module.exports = {
  generate
}