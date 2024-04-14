describe('Agrega tarea', () => {
    it('Agrega una tarea a la lista', () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('.new-todo').type('Tarea 1 {enter}')
        cy.get('.new-todo').type('contains {enter}')

})
})
