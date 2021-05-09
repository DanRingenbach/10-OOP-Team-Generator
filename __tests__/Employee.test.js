const Employee = require("../lib/Employee")

test("Testing for name", () => {
    const Employee1 = new Employee("Dan", 2, "dan@email.com")
    expect(Employee1.getName()).toBe("Dan")
})

test("Testing for id", () => {
    const Employee1 = new Employee("Dan", 2, "dan@email.com")
    expect(Employee1.getId()).toBe(2)
})

test("Testing for email", () => {
    const Employee1 = new Employee("Dan", 2, "dan@email.com")
    expect(Employee1.getEmail()).toBe("dan@email.com")
})