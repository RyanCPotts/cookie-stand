let hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// Constructor function for Store objects
function Store(name, phone, address, minCustomers, maxCustomers, avgSale) {
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgSale = avgSale;
    this.cookiesSalesArray = [];
}

// Prototype method to generate cookie sales data for a store
Store.prototype.generateCookieSales = function () {
    for (let i = 0; i < hours.length; i++) {
        let randCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
        let cookiesThisHour = Math.floor(randCustomers * this.avgSale);
        this.cookiesSalesArray.push(cookiesThisHour);
    }
};

// Create instances for each store
let seattleStore = new Store('Seattle', '123-456-7890', '2901 3rd. Ave #300, Seattle, WA 98121', 23, 65, 6.3);
let tokyoStore = new Store('Tokyo', '222-222-2222', '1 Main St. #1, Tokyo, Japan 035-894', 3, 24, 1.2);
let dubaiStore = new Store('Dubai', '333-333-3333', 'PO BOX 123, Dubai, UAE', 11, 38, 3.7);
let parisStore = new Store('Paris', '444-444-4444', 'PO Box 789, Paris, France', 20, 38, 2.3);
let limaStore = new Store('Lima', '555-555-5555', 'PO Box 311, Lima Peru', 2, 16, 4.6);

// Generate cookie sales data for each store
seattleStore.generateCookieSales();
tokyoStore.generateCookieSales();
dubaiStore.generateCookieSales();
parisStore.generateCookieSales();
limaStore.generateCookieSales();

// Function to generate the sales table HTML
function generateSalesTable() {
    let table = '<table><thead><tr><th>Location</th>'; // Start with Location header
    for (let i = 0; i < hours.length; i++) {
        table += `<th>${hours[i]}</th>`; // Add the times as headers
    }
    table += '</tr></thead><tbody>';

    // Iterate over the stores to populate the rows
    let stores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];
    for (let j = 0; j < stores.length; j++) {
        table += `<tr><td>${stores[j].name}</td>`; // Add location name in the first column
        for (let k = 0; k < hours.length; k++) {
            table += `<td>${stores[j].cookiesSalesArray[k]}</td>`; // Add sales data for each hour
        }
        table += '</tr>';
    }
    
    table += '</tbody></table>';
    return table;
}

// Get the table body element
let tableBody = document.querySelector('#sales-table tbody');

// Insert the generated sales table HTML into the table body
if (tableBody) {
    tableBody.innerHTML = generateSalesTable();
}