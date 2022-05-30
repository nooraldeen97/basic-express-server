'use strict';

const server=require("../src/server");
const supertest=require("supertest");

const request=supertest(server.app);

describe("testing my API",()=>{
  
     test('test if the name is string 200',async()=>{
        const response=await request.get("/person?name=noor")
        expect(response.body.name).toEqual("noor")
        expect(response.status).toEqual(200);
     })

     test('test if the name is string 200',async()=>{
        const response=await request.get("/person?name=noor")
        expect(response.body).toEqual({"name" : "noor"})
     })
})