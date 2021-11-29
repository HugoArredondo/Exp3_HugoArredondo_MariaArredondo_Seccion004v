import {browser, element, by } from 'protractor';
 
describe('Pruebas', ()=>{
    //configuración del bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //Prueba 1
    it("El page root es el login", ()=>{
        expect(element(by.css(".titulo-nav ion-title")).getText()).toContain("Inicio de Sesión");
    });  

    //Prueba 2
    it("Se puede acceder al page tipo", ()=>{
        expect(element(by.css(".subtitulo h1")).getText()).toContain("Jardines y Sala Cuna");
    }); 

});


 















