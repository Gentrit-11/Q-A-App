
describe('Add and delete patient', () => {
    beforeEach(() => {
   
      cy.visit('http://127.0.0.1:8000/')
    })

    it('add-patient', () => {
   
      cy.contains('Login').should('be.visible').click();
      cy.url().should('include', '/login');
      cy.wait(1000);
      cy.get('#email').should('be.visible').type('gentritsheremetaj3@gmail.com');
      cy.get('#password').should('be.visible').type('123456789');
      cy.contains('Log in').should('be.visible').click();
      cy.url().should('include', '/Home');
      cy.contains('add patient').should('be.visible').click({force:true});
      cy.get('#name').should('be.visible').type('Gentrit');
      cy.get('#surname').should('be.visible').type('Sheremetaj');
      cy.get('#dissease').should('be.visible').type('headache');
      cy.get('#appointment_time').should('be.visible').type("2023-02-01T15:00");
      cy.get('input[type="submit"]').should('be.visible').click({force:true});
      cy.contains('Gentrit').should('be.visible');
      cy.pause();
  
    });

    it('delete patient', () => {
   
        cy.contains('Login').should('be.visible').click();
        cy.url().should('include', '/login');
        cy.get('#email').should('be.visible').type('gentritsheremetaj3@gmail.com');
        cy.get('#password').should('be.visible').type('123456789');
        cy.contains('Log in').should('be.visible').click();
        cy.url().should('include', '/Home');
        cy.contains('show Patient').should('be.visible').click({force:true});
        cy.contains('button','Delete').first().click();
    
      });

  });
  