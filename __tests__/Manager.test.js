const Manager = require("../lib/Manager")

test("Testing for name", () => {
    const Manager1 = new Manager("Dan", 2, "dan@email.com")
    expect(Manager1.getName()).toBe("Dan")
})

test("Testing for id", () => {
    const Manager1 = new Manager("Dan", 2, "dan@email.com")
    expect(Manager1.getId()).toBe(2)
})

test("Testing for email", () => {
    const Manager1 = new Manager("Dan", 2, "dan@email.com")
    expect(Manager1.getEmail()).toBe("dan@email.com")
})

test("Testing Office number", () => {
    const Manager1 = new Manager("Dan", 2, "dan@email.com", 5)
    expect(Manager1.getOfficeNumber()).toBe(5)
})

test("Testing role", () => {
    const Manager1 = new Manager("Dan", 2, "dan@email.com", 5)
    expect(Manager1.getRole()).toBe("Manager")
})
