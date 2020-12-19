"use strict";
// abstract classes cannot be instantiated,  they are there to be inherited from
// The abstract properties/methods within an abstract class are to layout the structure and force its inheritances to provide concrete inplantations
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        // private restricted the variables' accessability to this specific class ONLY!
        // protected means the variables are available to extends classes, but not public
        this.employees = [];
        // this.id = id;
        // this.name = name;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// the static properties are detached from the instance, thus not accessible from other methods using "this."
// but using "className."
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log(`This is IT Department (${this.id}), welcome!`);
    }
}
class AccountingDepartment extends Department {
    // if want to limit the object to occur only once, then use private constructor, 
    constructor(id, reports = []) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    // get is used to export a private property to public
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No report found.");
        }
    }
    // set is used to set a private property using public inputs
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid report");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        AccountingDepartment.instance = new AccountingDepartment("A01");
        return AccountingDepartment.instance;
    }
    describe() {
        console.log("The best department - Accounting, ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "Kevin") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment("IT01", ["Kevin", "Lynn"]);
const employee1 = Department.createEmployee("Jay");
console.log(employee1, Department.fiscalYear);
it.addEmployee("Kevin");
it.addEmployee("Lynn");
it.addEmployee("Ye");
// structural.employees[3]='Jie';
it.describe();
it.printEmployeeInfo();
console.log(it);
// const accounting = new AccountingDepartment("A01");
const accounting = AccountingDepartment.getInstance();
accounting.describe();
accounting.mostRecentReport = "Report3";
accounting.addReport("Report1");
accounting.addReport("Report2");
console.log(accounting.mostRecentReport);
accounting.printReports();
accounting.addEmployee("Kevin");
accounting.addEmployee("Ye");
accounting.printEmployeeInfo();
//# sourceMappingURL=app.js.map