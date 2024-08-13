
describe('Realizar testes de API', () => {

    it('Realizar get simples com retorno positivo', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
        }).then((res) => {
            console.log(res)
            expect(res.status).to.equal(200)
            expect(res.status).to.exist
            })  
    })

    it('Realizar get simples com retorno negativo', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/comments',
        }).then(res => {
             console.log(res)
             expect(res.status).to.equal(401)
        })  
    })

    it('Realizar um post com retorno positivo', () =>{
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body: {
                'userId':'11',
                'id': '101',
                'title': 'testing',
                'body': 'just testing but I will delete it soon'
            }
        }).then(res =>{
            console.log(res)
            expect(res.status).to.equal(201)
        })
    })

    it.only('Realizar um post com retorno negativo', () =>{
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body: {
                'userId':'',
                'id': '',
                'title': '',
                'body': '',
            }
        }).then(res =>{
            console.log(res)
            //expect(res.status).to.equal(201)
            expect(res.status).to.not.be.empty
        })
    })
    
    
});

