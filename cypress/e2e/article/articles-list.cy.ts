describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then(() => {
            cy.visit('/articles');
        });
    });
    it('и статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
