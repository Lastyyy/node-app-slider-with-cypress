describe('Swiper Gallery Test', function () {

  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('https://sm-hotjar.onrender.com/');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {

  it('Checks if third slide contains "Paris"', function () {
    cy.visit('https://sm-hotjar.onrender.com/');
    cy.get('.swiper-button-next').click();
    cy.wait(700)
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(700)
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {

  it('Checks slider\'s buttons', function () {
    cy.visit('https://sm-hotjar.onrender.com/');
    cy.get('.swiper-button-next').click();
    cy.wait(700)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'London');
      cy.get('p').should('contain', 'United Kingdom');
    });
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(700)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'Rome');
      cy.get('p').should('contain', 'Italy');
    });
  });
});

describe('Swiper Gallery Test', function () {

  it('Checks all slides', function () {
    cy.visit('https://sm-hotjar.onrender.com/');
    cy.get('.swiper-button-next').click();
    cy.wait(500)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'London');
      cy.get('p').should('contain', 'United Kingdom');
    });

    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(500)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'Paris');
      cy.get('p').should('contain', 'France');
    });

    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(500)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'Rome');
      cy.get('p').should('contain', 'Italy');
    });

    cy.get('.swiper-button-next').click();
    cy.wait(500)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'London');
      cy.get('p').should('contain', 'United Kingdom');
    });
  });
});

describe('Swiper Gallery Test', function () {
  
  it('Computer-test', function () {
    cy.viewport('macbook-16'); // Otwórz stronę na komputerze
    cy.visit('https://sm-hotjar.onrender.com/');
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.get('.swiper-button-next').click();
    cy.wait(700)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'London');
      cy.get('p').should('contain', 'United Kingdom');
    });
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(700)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'Rome');
      cy.get('p').should('contain', 'Italy');
    });
  });

  it('Tablet-test', function () {
    cy.viewport('ipad-2'); 
    cy.visit('https://sm-hotjar.onrender.com/');
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.get('.swiper-button-next').click();
    cy.wait(700)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'London');
      cy.get('p').should('contain', 'United Kingdom');
    });
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(700)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'Rome');
      cy.get('p').should('contain', 'Italy');
    });
  });

  it('Phone-test', function () {
    cy.viewport('iphone-8'); 
    cy.visit('https://sm-hotjar.onrender.com/');
    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.get('.swiper-button-next').click();
    cy.wait(700)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'London');
      cy.get('p').should('contain', 'United Kingdom');
    });
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(700)
    cy.get('.swiper-slide-active').within(() => {
      cy.get('h1').should('contain', 'Rome');
      cy.get('p').should('contain', 'Italy');
    });
  });
});


describe('Swiper Gallery Test', function () {

  it('Checks visibility of main container', function () {
    cy.visit('https://sm-hotjar.onrender.com/');
    cy.get('.swiper').should('be.visible');
  });
});