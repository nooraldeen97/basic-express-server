'use strict';

const server=require("../src/server");
const supertest=require("supertest");

const request=supertest(server.app);

describe("testing my API",()=>{
    test('test wrong route 404', async () => { 
        const response= await request.get("/nn");
        expect(response.body.massage).toEqual("Page not found");
        expect(response.status).toEqual(404);
     })

     test('test Bad method 404', async () => { 
        const response= await request.post("/");
        expect(response.body.massage).toEqual("Page not found");
        expect(response.status).toEqual(404);
     })

     test('test internal server error when i hit /person route without providing a name 500',async()=>{
        const response=await request.get("/person")
        expect(response.body.massage).toEqual("Server Error name not provided")
        expect(response.status).toEqual(500);
     })

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