// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annie', 'Sarah', 'bobby']

function findMatching(drivers,name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string);
}