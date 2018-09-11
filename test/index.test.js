const cfUpdate = require("../src");

describe("parseHost", () => {
  test("can parse a host with a subdomain", () => {
    expect(cfUpdate.parseHost("test.moo.com")).toBe("moo.com");
  });

  test("can parse a host with no subdomain", () => {
    expect(cfUpdate.parseHost("moo.com")).toBe("moo.com");
  });

  test("can't parse a host with no period", () => {
    function testParse() {
      cfUpdate.parseHost("moocom");
    }

    expect(testParse).toThrow(
      "moocom does not look like a valid domain. Did you mistype it?"
    );
  });
});

describe("checking for missings envs", () => {
  test("throws an error", () => {
    function testCheckEnvs() {
      cfUpdate.checkForRequiredEnvs(["FOO"]);
    }

    expect(testCheckEnvs).toThrow("Please set required env: FOO");
  });
});
