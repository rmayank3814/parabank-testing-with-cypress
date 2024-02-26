/// <reference types="cypress">
describe('Login Functionality',()=>{
    it("login Test Case",()=>{
        cy.log('Launch the application ParaBank')
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.log('visit login page successfully')
        cy.log('Enter User Name')
        cy.get('input[name="username"]').type("Kajaltes")
        cy.log(' Re enter password')
        cy.get('input[name="password"]').type("test123")
        cy.log('enter submit button')
        cy.get('div:nth-child(1) div:nth-child(2) form:nth-child(1) div.login:nth-child(5) > input.button').click()
        cy.log('LOGIN PAGE SUCCESSFULLY LOGIN')   
    })
})