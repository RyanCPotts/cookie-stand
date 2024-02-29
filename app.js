let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"]

let seattleObject = {
    name: 'Seattle',
    phone: '123-456-7890',
    address: '2901 3rd. Ave #300, Seattle, WA 98121',
    minCustomers: 23,
    maxCustomers: 65,
    avgSale: 6.3,
    cookiesSalesArray: [],
    generateCookieSales: function () {
        for (let i=0; i < hours.length; i++) {

        let randCustomers= Math.floor( Math.random() * (this.maxCustomers-this.minCustomers+1) + this.minCustomers);
        
        let cookiesThisHour = Math.floor( randCustomers * this.avgSale);
    
        this.cookiesSalesArray.push(cookiesThisHour)
    
        this.console.log(seattleObject.cookiesSalesArray)
    }
    


let tokyoObject = {
    name: Tokyo,
    phone: 222-222-2222,
    address: '1 Main St. #1, Tokyo, Japan 035-894',
    minCustomers: 3,
    maxCustomers: 24,
    avgSale: 1.2,
    cookiesSalesArray: [],
    generateCookieSales: function () {
        for (let i=0; i < hours.length; i++) {

        let randCustomers= Math.floor( Math.random() * (this.maxCustomers-this.minCustomers+1) + this.minCustomers);
        
        let cookiesThisHour = Math.floor( randCustomers * this.avgSale);
    
        this.cookiesSalesArray.push(cookiesThisHour)
    
        this.console.log(tokyoObject.cookiesSalesArray)
    }
    

// }

let dubaiObject = {
    name: Dubai,
    phone: 333-333-3333,
    address: 'PO BOX 123, Dubai, UAE',
    minCustomers: 11,
    maxCustomers: 38,
    avgSale: 3.7,
    cookiesSalesArray: [],
    generateCookieSales: function () {
        for (let i=0; i < hours.length; i++) {

        let randCustomers= Math.floor( Math.random() * (this.maxCustomers-this.minCustomers+1) + this.minCustomers);
        
        let cookiesThisHour = Math.floor( randCustomers * this.avgSale);
    
        this.cookiesSalesArray.push(cookiesThisHour)
    
        this.console.log(dubaiObject.cookiesSalesArray)
    }

let parisObject = {
    name: Paris,
    phone: 444-444-4444,
    address: 'PO Box 789, Paris, France',
    minCustomers: 20,
    maxCustomers: 38,
    avgSale: 2.3,
    cookiesSalesArray: [],
    generateCookieSales: function () {
        for (let i=0; i < hours.length; i++) {

        let randCustomers= Math.floor( Math.random() * (this.maxCustomers-this.minCustomers+1) + this.minCustomers);
        
        let cookiesThisHour = Math.floor( randCustomers * this.avgSale);
    
        this.cookiesSalesArray.push(cookiesThisHour)
    
        this.console.log(parisObject.cookiesSalesArray)
    }

let limaObject = {
    name: Lima,
    phone: 555-555-5555,
    address: 'PO Box 311, Lima Peru',
    minCustomers: 2,
    maxCustomers: 16,
    avgSale: 4.6,
    cookiesSalesArray: [],
    generateCookieSales: function () {
        for (let i=0; i < hours.length; i++) {

        let randCustomers= Math.floor( Math.random() * (this.maxCustomers-this.minCustomers+1) + this.minCustomers);
        
        let cookiesThisHour = Math.floor( randCustomers * this.avgSale);
    
        this.cookiesSalesArray.push(cookiesThisHour)
    
        this.console.log(tokyoObject.cookiesSalesArray)
    }


seattleObject.generateCookieSales()
console.log(seattleObject.cookiesSalesArray)
tokyoObject.generateCookieSales()
console.log(tokyoObject.cookiesSalesArray)
dubaiObject.generateCookieSales()
console.log(dubaiObject.cookiesSalesArray)
parisObject.generateCookieSales()
console.log(parisObject.cookiesSalesArray)
limaObject.generateCookieSales()
console.log(limaObject.cookiesSalesArray)