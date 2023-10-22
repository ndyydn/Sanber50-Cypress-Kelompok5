describe('Choose Products', () => {
    it('Choose Products', () => {
        cy.visit('/customer/account/login');

      cy.get('#email').type('nadyarum33@gmail.com');
      cy.get('#pass').type('Nadya123@');
      cy.get('#send2').click();

      cy.visit('/women/tops-women/jackets-women');
      
      cy.get('product-item-info').click(olivia-1-4-zip-light-jacket);
      cy.get('swatch-attribute color').click(Blue);
      cy.get('swatch-attribute size').click(M);
      cy.get('qty.input-text.qty').clear().type('2');
    });
  });