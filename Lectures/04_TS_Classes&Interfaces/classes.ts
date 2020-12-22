// abstract classes cannot be instantiated,  they are there to be inherited from
// The abstract properties/methods within an abstract class are to layout the structure and force its inheritances to provide concrete inplantations

abstract class Department {
  // the static properties are detached from the instance, thus not accessible from other methods using "this."
  // but using "className."
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  // private restricted the variables' accessability to this specific class ONLY!
  // protected means the variables are available to extends classes, but not public
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // describe(this: Department) {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`This is IT Department (${this.id}), welcome!`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  // get is used to export a private property to public
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No report found.");
    }
  }

  // set is used to set a private property using public inputs
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid report");
    }
    this.addReport(value);
  }

  // if want to limit the object to occur only once, then use private constructor, 
  private constructor(id: string, public reports: string[] = []) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

  addEmployee(name: string) {
    if (name === "Kevin") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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
