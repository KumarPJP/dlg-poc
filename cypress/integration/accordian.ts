describe('My First Test', () => {
    it('check for number of accordian items on the page', () => {
        cy.visit('/');
        cy.get('.accordion-item').should('have.length', 5)
    })
    it('check for second expand icon and click', () => {
        cy.visit('/');
        cy.get('.accordion-item').eq(1).click();
    })

    it('check for text match after clicking second expand', () => {
        cy.contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum')
    })

    it('check for second expand icon and click', () => {
        cy.get('.accordion-item').eq(1).click();
        cy.get('.accordion-item').eq(1).get('.accordian-icon-div div svg').should('have.class', 'panelClose')
    })
    it('Click on third accordian item and check for class', () => {
        cy.get('.accordion-item').eq(2).click();
        cy.get('.accordion-item').eq(1).get('.accordian-icon-div div svg').should('have.class', 'panelOpen')
    })
})
