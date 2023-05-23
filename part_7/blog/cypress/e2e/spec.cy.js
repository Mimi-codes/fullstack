describe('Blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
		cy.visit('http://localhost:3000')

		const user = {
      name: 'Mariam',
      username: 'mimi',
      password: 'confidential'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)

	})
	

  describe('Login',function() {
    it('succeeds with correct credentials', function() {
			// ...
			cy.get('#username').type('Mimi')
			cy.get('#password').type('confidential')
			cy.get('#login-button').click()
			cy.contains('mimi logged-in')
    })

    it('fails with wrong credentials', function() {
			// ...
			cy.get('#username').type('mimi')
			cy.get('#password').type('confident')
			cy.get('#login-button').click()
			cy.get('.error').contains('Wrong credentials')
    })
	})

	describe.only('When logged in', function() {
    beforeEach(function() {
			// log in user here
			cy.login({ username: 'mimi', password: 'confidential' })
			cy.contains('mimi logged-in')
		})
		
		it('A blog can be created -> like -> delete the blog,', function() {
			cy.contains('new note').click()
			cy.get('#title').type('some title')
      cy.get('#author').type('Mariam')
			cy.get('#url').type('www.mimi.com')
			cy.get('#create-btn').click()
			cy.contains('view').click()
			cy.contains('like').click()
      // cy.contains('21')
      cy.contains('remove').click()
		})

    it('order by like', function() {

			cy.createBlog('title1','author1', 'www.url.com', 2)
			cy.createBlog('first','author1', 'www.url.com', 1)
			cy.createBlog('title2','author1', 'www.url.com', 7)

		})
  })

})
