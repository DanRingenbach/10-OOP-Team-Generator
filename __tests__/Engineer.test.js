const Engineer = require("../lib/Engineer")

test("Testing for name", () => {
    const Engineer1 = new Engineer("Dan", 2, "dan@email.com")
    expect(Engineer1.getName()).toBe("Dan")
})

test("Testing for id", () => {
    const Engineer1 = new Engineer("Dan", 2, "dan@email.com")
    expect(Engineer1.getId()).toBe(2)
})

test("Testing for email", () => {
    const Engineer1 = new Engineer("Dan", 2, "dan@email.com")
    expect(Engineer1.getEmail()).toBe("dan@email.com")
})

test("Testing Github", () => {
    const Engineer1 = new Engineer("Dan", 2, "dan@email.com", "DanRing")
    expect(Engineer1.getGithub()).toBe("DanRing")
})

test("Testing role", () => {
    const Engineer1 = new Engineer("Dan", 2, "dan@email.com", "DanRing")
    expect(Engineer1.getRole()).toBe("Engineer")
})