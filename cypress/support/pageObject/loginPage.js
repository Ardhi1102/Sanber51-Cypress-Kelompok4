<<<<<<< HEAD
class loginPage{
    usrnm = '#user-name'
    pswd = '[data-test="password"]'
    login_btn = '.submit-button.btn_action'
    err_msg = '[data-test="error"]'

    inputUsername(name){
        cy.get(this.usrnm).type(name)
    }

    inputPassword(pass){
        cy.get(this.pswd).type(pass)
    }

    clickLogin(){
        cy.get(this.login_btn).click()
    }

    verifyError(message){
        cy.verifyContain(this.err_msg,message)
        //cy.get(this.err_msg).should('contain', message)
    }

}
export default new loginPage()
=======
class loginPage  {
    email = '#email' 
    password = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
    loginbutton = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span'

}
    export default new loginPage()
>>>>>>> branch1
