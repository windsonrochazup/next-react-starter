/* eslint-disable @typescript-eslint/no-var-requires */
const faker = require('faker')

const UserTestMock = [
  {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(),
  },
]

module.exports = { UserTestMock }
