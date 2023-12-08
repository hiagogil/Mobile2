class myStoreScreen {
    get #myStoreName () {
        return $('id:toolbar_subtitle')
    }
    get #myStoreLogo(){
        return $('~My store')
    }

    async getStoreName(){
        await this.#myStoreName.waitForExist({ timeout: 10000 })
        return await this.#myStoreName.getText()
    }
    async getStoreLogo(){
        await this.#myStoreLogo.waitForExist({ timeout: 10000 })
        return await this.#myStoreLogo.isDisplayed()
    }

}

module.exports = new myStoreScreen()