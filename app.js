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

// Generate sales table including "Total" row
function generateSalesTable() {
    let table = '<table id="sales-table">';
    table += '<thead><tr><th>Location</th>';

    // Add hour headers
    for (let hour of hours) {
        table += `<th>${hour}</th>`;
    }

    table += '<th>Total</th></tr></thead><tbody>';

    // Iterate over the stores to populate the rows
    let stores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];
    let hourlyTotals = new Array(hours.length).fill(0); // Array to store hourly totals
    let grandTotal = 0; // Variable to store the grand total
    for (let store of stores) {
        table += `<tr><td>${store.name}</td>`; // Add location name in the first column
        let totalSales = 0;
        for (let i = 0; i < store.cookiesSalesArray.length; i++) {
            let cookiesSold = store.cookiesSalesArray[i];
            table += `<td>${cookiesSold}</td>`; // Add sales data for each hour
            totalSales += cookiesSold;
            hourlyTotals[i] += cookiesSold; // Update hourly total
        }
        table += `<td>${totalSales}</td></tr>`; // Add total sales for the location
        grandTotal += totalSales; // Update grand total
    }

    // Add "Total" row for hourly totals
    table += '<tr><td>Total</td>';
    for (let total of hourlyTotals) {
        table += `<td>${total}</td>`;
    }
    table += `<td>${grandTotal}</td></tr>`; // Add grand total cell

    table += '</tbody></table>';
    return table;
}

// Replace existing table with new sales table
let salesTable = generateSalesTable();
document.getElementById('sales-table-container').innerHTML = salesTable;