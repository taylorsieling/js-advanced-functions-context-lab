/* Your Code Here */


function createEmployeeRecord(array) {
    let employeeRecord = {
        firstName: `${array[0]}`,
        familyName: `${array[1]}`,
        title: `${array[2]}`,
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
    return employeeRecord;
}

function createEmployeeRecords(array) {
    return array.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    let timeIn = {
        type: 'TimeIn',
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0],
    };
    this.timeInEvents.push(timeIn);
    return this;
}

function createTimeOutEvent(dateStamp) {
    let timeOut = {
        type: 'TimeOut',
        hour: parseInt(dateStamp.split(" ")[1]),
        date: dateStamp.split(" ")[0],
    };
    this.timeOutEvents.push(timeOut);
    return this;
}


function hoursWorkedOnDate(date) {
    // find timeIn and timeOut and substract to get difference
    let timeIn = this.timeInEvents.find((event) => event.date === date).hour
    let timeOut = this.timeOutEvents.find((event) => event.date === date).hour

    return (timeOut - timeIn) / 100
}


function wagesEarnedOnDate(date) {
    // find hours worked on a date and multiply by hourly rate
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(employeeRecord, firstName) {
    return employeeRecord.find((name) => name.firstName === firstName);
}

function calculatePayroll(srcArray) {
    // map over all employees and return total wages
    // combine together and reduce for total
    let allEmployeeWages = srcArray.map((emp) => allWagesFor.call(emp));
    return allEmployeeWages.reduce(function (wages, e) {
        return (wages + e);
    });
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}