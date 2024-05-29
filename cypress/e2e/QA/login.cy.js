/// <reference types="cypress" />



describe('login', () => {
  beforeEach(() => {
 
    cy.visit('http://127.0.0.1:8000/')
  })


  it('login with invalid credencials', () => {
 
    cy.contains('Login').should('be.visible').click();
    cy.url().should('include', '/login');
    cy.get('#email').should('be.visible').type('gentritsheremetaj3@gmail.com');
    cy.get('#password').should('be.visible').type('1234567899');
    cy.contains('Log in').should('be.visible').click();
    cy.contains('These credentials do not match our records.').should('be.visible');
    cy.pause();

  })

  it('login with valid credencials', () => {
 
    cy.contains('Login').should('be.visible').click();
    cy.url().should('include', '/login');
    cy.get('#email').should('be.visible').type('gentritsheremetaj3@gmail.com');
    cy.get('#password').should('be.visible').type('123456789');
    cy.contains('Log in').should('be.visible').click();
    cy.url().should('include', '/Home');

  })
})
