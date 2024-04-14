describe('Agregar tareas', () => {
it('Agrega una tarea a la lista', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 1 {enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 2 {enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")
  
})

it('Marcar tarea como completada', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 1 {enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 2 {enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")

    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()

})
it('Desmarcar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("Tarea 1 {enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 2 {enter}")
    cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click() 
    cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').uncheck()
    cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').uncheck()

}) 
    
it('Editar tarea', () => {
        cy.visit('https://todomvc.com/examples/react/dist/')
        cy.get('[data-testid="text-input"]').type("Tarea 1 {enter}")
        cy.get('[data-testid="text-input"]').type("Tarea 2 {enter}")
        cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")

        cy.get(':nth-child(1) > .view > [data-testid="todo-item-label"]').dblclick().focused().clear() .type("Madre mía del amor hermoso. Tocas algo y se borra todo")
    })
        
    it('Borrar tarea', () => {
            cy.visit('https://todomvc.com/examples/react/dist/')
            cy.get('[data-testid="text-input"]').type("Tarea 1 {enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 2 {enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")
            cy.get('button').invoke('show')
            cy.get(':nth-child(1) > .view > [data-testid="todo-item-button"]').click()
        })

        it('Filtrar tareas', () => {
            cy.visit('https://todomvc.com/examples/react/dist/')
            cy.get('[data-testid="text-input"]').type("Tarea 1 {enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 2 {enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 3{enter}")
            cy.get('[data-testid="text-input"]').type("Tarea 4{enter}")
            cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
            cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click() 
            cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a') .click()
            cy.get(':nth-child(2) > a').click()
            cy.get(':nth-child(1) > a'). click()
       
        })
        })
