class adicProdutosScreen {
    get #getProductTitle() { return $('id=editText') }
    get #getDescribeProduct() { return $('~Edit product') }
    get #descriptionProduct() { return $('id=visualEditor') }
    get #voltarMenu() { return $('~Navigate up') }
    get #textDescri() { return $('id:textPropertyValue') }
    get #addPriceProduct() { return $('android= new UiSelector().className("android.view.ViewGroup").index(0).instance(8)') }
    get #textRegularPrice() { return $('android=new UiSelector().text("Regular price").className("android.widget.EditText")') }
    get #textSalePrice() { return $('android=new UiSelector().text("Sale price").className("android.widget.EditText")') }
    get #typePriceProduct() { return $('android=new UiSelector().text("0").className("android.widget.EditText")') }
    get #goInventory() { return $('android= new UiSelector().className("android.view.ViewGroup").index(2)') }
    get #typeSKU() { return $('android=new UiSelector().className("android.widget.EditText").text("SKU")') }
    get #numberSku() { return $('android= new UiSelector().className("android.widget.TextView").index(2).instance(1)') }
    get #btnPublish() { return $('id=menu_publish') }
    get #msgPublish() { return $('id=snackbar_text') }


    async cadastroProduto(nome, descricao) {
        await this.#getProductTitle.waitForExist({ timeout: 20000 })
        await this.#getProductTitle.setValue(nome)
        await this.#getDescribeProduct.waitForExist({ timeout: 20000 })
        await this.#getDescribeProduct.click()
        await this.#descriptionProduct.waitForExist({ timeout: 30000 })
        await this.#descriptionProduct.setValue(descricao)
        await this.#voltarMenu.waitForExist({ timeout: 30000 })
        await this.#voltarMenu.click()
    }

    async typePrice(valor, valor2) {
        await this.#addPriceProduct.waitForExist({ timeout: 20000 })
        await this.#addPriceProduct.click()
        await this.#typePriceProduct.clearValue()
        await this.#textRegularPrice.setValue(valor)
        await this.#typePriceProduct.clearValue()
        await this.#textSalePrice.setValue(valor2)
        await this.#voltarMenu.waitForExist({ timeout: 30000 })
        await this.#voltarMenu.click()
    }

    async clickInventory(sku) {
        await this.#goInventory.waitForExist({ timeout: 20000 })
        await this.#goInventory.click()
        await this.#typeSKU.waitForExist({ timeout: 30000 })
        await this.#typeSKU.setValue(sku)
        await this.#voltarMenu.waitForExist({ timeout: 30000 })
        return await this.#voltarMenu.click()
    }

    async clickPublish() {
        await this.#btnPublish.waitForExist({ timeout: 20000 })
        return await this.#btnPublish.click()
    }

   

    // Teste de Validação de aprodutos

    async getProductName() {
        await this.#getProductTitle.waitForExist({ timeout: 20000 })
        return await this.#getProductTitle.getText()
    }

    async getDescriptionProduct() {
        await this.#textDescri.waitForExist({ timeout: 30000 })
        return await this.#textDescri.getText()
    }
    async getNumeSKU() {
        await this.#numberSku.waitForExist({ timeout: 20000 })
        return await this.#numberSku.getText()
    }
    async msgProductPubli() {
      await this.#msgPublish.waitForExist({ timeout: 20000 })
       return await this.#msgPublish.getText()
    }


}



module.exports = new adicProdutosScreen
