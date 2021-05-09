const Intern = require("../lib/Intern")

test("Testing for name", () => {
    const Intern1 = new Intern("Dan", 2, "dan@email.com")
    expect(Intern1.getName()).toBe("Dan")
})

test("Testing for id", () => {
    const Intern1 = new Intern("Dan", 2, "dan@email.com")
    expect(Intern1.getId()).toBe(2)
})

test("Testing for email", () => {
    const Intern1 = new Intern("Dan", 2, "dan@email.com")
    expect(Intern1.getEmail()).toBe("dan@email.com")
})

test("Testing School", () => {
    const Intern1 = new Intern("Dan", 2, "dan@email.com", "MIT")
    expect(Intern1.getSchool()).toBe("MIT")
})

test("Testing role", () => {
    const Intern1 = new Intern("Dan", 2, "dan@email.com", "MIT")
    expect(Intern1.getRole()).toBe("Intern")
})