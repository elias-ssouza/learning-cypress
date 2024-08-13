
describe('Realizar testes de API', () => {

    afterEach(() => {
        cy.screenshot()
    })

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
            url: 'https://jsonplaceholder.typicode.com/comments/501',
            failOnStatusCode: false,
        }).then(res => {
             console.log(res)
             expect(res.status).to.equal(404)
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

    it('Realizar um put com retorno positivo', () =>{
        cy.request({
            method: 'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/100',
            body: {
                'title': 'testing',
                'body': 'just testing but I will delete it soon'
            }
        }).then(res =>{
            console.log(res)
            expect(res.status).to.equal(200)
            //expect(res.status).to.not.be.empty
        })
    })

    it('Realizar um delete com retorno positivo', () =>{
        cy.request({
            method: 'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/100',
        }).then(res =>{
            console.log(res)
            expect(res.status).to.equal(200)
            //expect(res.status).to.not.be.empty
        })
    })
})

