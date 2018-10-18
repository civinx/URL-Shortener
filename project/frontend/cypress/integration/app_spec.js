describe("Django REST framework / React quickstart app", () => {
  const record = {
    short_name: "some-short_name@gmail.com",
    long_name: "Armin",
  };
  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });
  it("should be able to fill a web form", () => {
    cy.visit("/");
    cy
      .get('input[name="long_name"]')
      .type(record.long_name)
      .should("have.value", record.long_name);
    cy
      .get('input[name="short_name"]')
      .type(record.short_name)
      .should("have.value", record.short_name);
    cy.get("form").submit();
  });

  // insert after the first "it" block in ./cypress/integration/app_spec.js
  it("should be able to see the table", () => {
    cy.visit("/");
    cy.get("tr").contains(`${record.long_name}${record.short_name}`);
  });
  // more tests here
});