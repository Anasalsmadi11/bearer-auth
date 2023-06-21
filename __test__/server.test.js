const supertest= require('supertest')
const userModel = require('../src/models/user.model');
const app  = require('../src/server');
const mockServerMethods = supertest(app);
// const bcrypt = require('bcrypt');
// const sequelize= require('sequelize')

// beforeAll(async () => {
//   // Connect to the database before running the tests
//   await db.authenticate();
// });


describe('userModel Routes', () => {

    const anas= {
        username:"sds",
        password:"test1213"
    }
    it('should create a new user and return 201 status code', async () => {


      const response = await mockServerMethods.post('/signup').send(anas);
      expect(response.status).toBe(201);
    //   expect(response.body.username).toBe(username);

      let record= await userModel.destroy({where:{username:anas.username}})

    });
    });