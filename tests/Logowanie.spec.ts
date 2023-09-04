import { test, expect } from "@playwright/test";
test.describe("Pierwsza grupa testów", () => {
  test("Logowania partnera", async ({ page }) => {
    //Arrange
    const url = "https://test-sp.srv.benefitsystems.pl/partner/login";
    const login = "calypso.manager";
    const haslo = "Benefit.1";

    //Act
    await page.goto(url);
    await page
      .getByLabel(
        "Zaakceptuj i zamknij: Wyraź zgodę na nasze przetwarzanie danych i zamknij"
      )
      .click();
    await page.getByPlaceholder("Login").fill(login);
    await page.getByPlaceholder("Hasło").fill(haslo);
    await page.getByRole("button", { name: "Zaloguj" }).click();
    await page.getByRole("heading", { name: "Aktualności" }).click();
    //Assert
    await expect(page.getByRole("heading", { name: "Aktualności" })).toHaveText(
      "Aktualności"
    );
  });

  test("test logowania partnera ", async ({ page }) => {
    await page.goto("https://test-sp.srv.benefitsystems.pl/partner/login");
    await page
      .getByLabel(
        "Zaakceptuj i zamknij: Wyraź zgodę na nasze przetwarzanie danych i zamknij"
      )
      .click();
    await page.getByPlaceholder("Login").click();
    await page.getByPlaceholder("Login").fill("calypso.manager");
    await page.getByPlaceholder("Login").press("Tab");
    await page.getByPlaceholder("Hasło").fill("Benefit.x");
    await page.getByRole("button", { name: "Zaloguj" }).click();
    await expect(page.getByRole("button", { name: "Zaloguj" })).toHaveText(
      "Zaloguj"
    );
  });

  test("test logowania partnera 2", async ({ page }) => {
    await page.goto("https://test-sp.srv.benefitsystems.pl/partner/login");
    await page
      .getByLabel(
        "Zaakceptuj i zamknij: Wyraź zgodę na nasze przetwarzanie danych i zamknij"
      )
      .click();
    await page.getByPlaceholder("Login").click();
    await page.getByPlaceholder("Login").fill("calypso.manager");
    await page.getByPlaceholder("Login").press("Tab");
    await page.getByPlaceholder("Hasło").fill("Benefit.x");
    await page.getByRole("button", { name: "Zaloguj" }).click();
    await expect(page.getByRole("button", { name: "Zaloguj" })).toHaveText(
      "Zaloguj"
    );
  });
});
