describe('Websearch demo with Cypress', () => {
    beforeEach(() => {
        cy.visit('');
        // accept cookie tracking. There is no chance to do conditional (try/catch) testing with Cypress,
        // so I will assume it is always there.
        cy.get('#L2AGLb').click();
    })
    
    it('can screencap wikipedia', () => {
        // find searchbox, input query and submit (enter)
        cy.get('input[name="q"]').type('automatización{enter}');
        // find and click relevant result
        cy.get('#rso > div').filter(':has(a[href="https://es.wikipedia.org/wiki/Automatizaci%C3%B3n"])').find('a').first().click();
        // we move to a different domain
        cy.origin('https://es.wikipedia.org/wiki/Automatizaci%C3%B3n', () => {
            // no cy.visit is needed as the button click brought us here
            // first, let's do an intermediate assert to check whether we are in the right place
            cy.url().should('eq', 'https://es.wikipedia.org/wiki/Automatizaci%C3%B3n');
            // let's assert the visibility of the information about automation history
            cy.get('#Historia').should('be.visible');
            // and let's take a screenshot of it
            cy.get('#Historia').scrollIntoView();
            cy.screenshot('firstAutomation',{capture: 'viewport' });
        });
    });
});