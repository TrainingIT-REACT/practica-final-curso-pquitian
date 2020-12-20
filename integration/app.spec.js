describe("App", () => {
    beforeEach(async() => {
        await page.goto('http://localhost:3000/')
    });

    it("should display title", async() => {
        await expect(page).toMatchElement('h1', 
        { text: '¡Hola'})
    })
});