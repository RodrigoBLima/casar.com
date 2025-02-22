import { header, content } from "../../../support/elements/home";
import { should } from "../../../support/utils/constants";

describe('Home', () => {
  describe('Elementos da página', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    context('Header', () => {
      it("Exibe o cabeçalho e o formulário de busca", () => {
        cy.get(header.container).should(should.BE_VISIBLE);
        cy.get(header.searchUserForm).should(should.BE_VISIBLE);
      });
    });

    context('Conteúdo', () => {
      it("Exibe 'Search User' quando a tela é carregada", () => {
        cy.get(content.searchUserContent).should(should.BE_VISIBLE);
      });

      it("Exibe 'Not Found' ao buscar um usuário inexistente", () => {
        cy.get(header.searchUserFormInput).type("178js{enter}");
        cy.get(content.notFoundUserContent).should(should.BE_VISIBLE);
      })
    });
  });
});
