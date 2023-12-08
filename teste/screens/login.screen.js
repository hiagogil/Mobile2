class LoginScreen {
    get #enterStoreAddress () { return $('android.widget.EditText') }
    
    get #continue() { return $('id:bottom_button') }

    get #continueWithStoreCredentials(){ return $('id:login_site_creds') }

    get #username() { return $('android=new UiSelector().text("Username")') }

    get #password() { return $('android=new UiSelector().text("Password")') }

    get #buttomPassword() { return $('id:login_enter_password')}

    async setStoreAddress(url) { this.#enterStoreAddress.setValue(url) }
    
    async continue() { 
        await this.#continue.waitForExist({ timeout: 15000 })
        await this.#continue.click() }

    async continueWithStoreCredentials() { 
        await this.#continueWithStoreCredentials.waitForExist({ timeout: 15000 })
        await this.#continueWithStoreCredentials.click() 
    }

    async login(username, password){ 
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.waitForExist({ timeout: 15000 })
        await this.#continue.click()
    }

    async buttomPassword() { 
        await this.#buttomPassword.waitForExist({ timeout: 15000 })
        await this.#buttomPassword.click() }

    async twoFactorLogin(password) { 
        await this.#password.waitForExist({ timeout: 15000 })
        await this.#password.setValue(password)
        await this.#continue.click()
    }

}

module.exports = new LoginScreen()