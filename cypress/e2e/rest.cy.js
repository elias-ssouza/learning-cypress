
describe('Realizar testes de API', () => {

    it('Realizar get simples com retorno positivo', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20',
        }).then(res => {
            console.log(res)
        })  
    })

    it('Realizar get simples com retorno negativo', () => {
        cy.request({
            method: 'GET',
            url: 'https://developer.marvel.com/get/v1/public/characters',
        }).then(res => {
             console.log(res)
        })  
    })

    
    
});

