/// <reference types="cypress" />
describe('From input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline Forms',() => {
        cy.get('input[placeholder="Jane Doe"]').type('Muhammad Afandi ')
        cy.get('[placeholder ="Email"][type="text"]').type('mafandi409@gmail.com')
        cy.get('.custom-checkbox').first().click()
    });

    it('Using Grid',()=> {
        cy.get('#inputEmail1').type('mafandi409@gmail.com')
        cy.get('#inputPassword2').type('kepolau')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    })

    it('Basic Form',()=> {
        cy.get('#exampleInputEmail1').type('mafandi409@gmail.com')
        cy.get('#exampleInputPassword1').type('kepolau')
        cy.get('.text').contains('Check me out').click()
    })

    it('Form Without Labels',()=>{
        cy.get('[placeholder="Recipients"]').type('Muhammad Afandi ')
        cy.get('[placeholder="Subject"]').type('Tugas PPL BlackBoxTesting')
        cy.get('[placeholder="Message"').type('Percuma Semangat')
    })

    it('Block Form',()=>{
        cy.get('#inputFirstName').type('Muhammad Afandi ')
        cy.get('#inputLastName').type('Afandi')
        cy.get('#inputEmail').type('mafandi409@gmail.com')
        cy.get('#inputWebsite').type('www.google.com')
    })

    it('Horizontal Form',()=> {
        cy.get('#inputEmail3').type('mafandi409@gmail.com')
        cy.get('#inputPassword3').type('kepolau')
        cy.get('.custom-checkbox').last().click()
    })

});