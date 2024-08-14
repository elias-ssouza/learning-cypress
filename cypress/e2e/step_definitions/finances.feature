Feature: Cadastro

  Scenario: Cadastrar uma nova entrada
    Given que eu estou na página de cadastro
    When eu preencho os dados do cliente
    And eu salvo o cadastro
    Then eu vejo a mensagem de sucesso ao armazenar os dados

  Scenario: Excluir uma entrada
    Given que eu estou na página de cadastro
    When eu pesquiso por um cliente existente
    And eu excluo o cliente
    Then eu vejo a mensagem de sucesso ao excluir os dados