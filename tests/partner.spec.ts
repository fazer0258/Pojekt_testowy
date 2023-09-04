import { test, expect } from "@playwright/test";

test.describe("Partner", () => {
  test("logowanie + Zgłoszenie Awari", async ({ page }) => {
    await page.goto("https://test-sp.srv.benefitsystems.pl/partner/login");
    await page
      .getByLabel(
        "Zaakceptuj i zamknij: Wyraź zgodę na nasze przetwarzanie danych i zamknij",
      )
      .click();
    await page.getByPlaceholder("Login").fill("calypso.manager");
    await page.getByPlaceholder("Hasło").fill("Benefit.1");
    await page.getByRole("button", { name: "Zaloguj" }).click();
    await page.getByRole("link", { name: "Narzędzia wsparcia " }).click();
    await page
      .getByRole("link", { name: "Terminale Benefit Systems " })
      .click();
    await page.getByRole("link", { name: "Lista zgłoszeń" }).click();
    await page.getByRole("link", { name: " Wyślij zgłoszenie" }).click();
    //await page.goto('https://test-sp.srv.benefitsystems.pl/partner/failure-report/submit');//
    await page
      .locator("section")
      .filter({
        hasText:
          "Rodzaj awarii * Wybierz... Wybierz...BateriaBłędne dane (nazwa, usługi, limity)D",
      })
      .getByRole("button")
      .click(); 
    await page.locator("a").filter({ hasText: "Bateria" }).click();
    await page 
      .locator("#facilityChooser")
      .getByRole("button", { name: "Wybierz..." })
      .click();
    await page
      .locator("a")
      .filter({ hasText: "Calypso Fitness Club Białystok" })
      .click();
    await page
      .locator("label")
      .filter({ hasText: "TID: 010855 SN: 900000010855" })
      .locator("i")
      .click();
    await page
      .locator("#failure_report_isTerminalTurningOn label")
      .filter({ hasText: "Tak" })
      .locator("i")
      .click();
    await page
      .locator("#failure_report_isTerminalRegisteringVisit label")
      .filter({ hasText: "Tak" })
      .locator("i")
      .click();
    await page.getByRole("button", { name: "Wybierz..." }).click();
    await page.locator("a").filter({ hasText: "Błąd wewnętrzny" }).click();
    await page
      .getByLabel("Wpisz komentarz dla serwisanta         *")
      .fill("Zgłoszenie Testowe - Proszę o zamknięcie");
    await page.getByLabel("Imię i nazwisko         *").fill("Paweł");
    await page.getByLabel("Adres e-mail         *").fill("xxx@oo.pl");
    await page.getByLabel("Nr telefonu         *").fill("333222444");
    await page.getByLabel("Godziny pracy przy terminalu         *").fill("4");
    await page.getByRole("button", { name: "Zgłoś awarię" }).click();
    //await expect(page.getByRole('button', { name: 'Zaloguj' })).toHaveText('Zaloguj');
    //dodać asercje
  });

  test("logowanie + Nowy TEST", async ({ page }) => {
    await page.goto("https://test-sp.srv.benefitsystems.pl/partner/login");
    await page
      .getByLabel(
        "Zaakceptuj i zamknij: Wyraź zgodę na nasze przetwarzanie danych i zamknij",
      )
      .click();
    await page.getByPlaceholder("Login").fill("calypso.manager");
    await page.getByPlaceholder("Hasło").fill("Benefit.1");
    await page.getByRole("button", { name: "Zaloguj" }).click();
    await page.getByRole("link", { name: "Narzędzia wsparcia " }).click();
    await page
      .getByRole("link", { name: "Terminale Benefit Systems " })
      .click();
    await page.getByRole("link", { name: "Lista zgłoszeń" }).click();

    //dodać asercje
  });
  test("logowanie + Nowy TEST Awaria", async ({ page }) => {
    await page.goto("https://test-sp.srv.benefitsystems.pl/partner/login");
    await page
      .getByLabel(
        "Zaakceptuj i zamknij: Wyraź zgodę na nasze przetwarzanie danych i zamknij",
      )
      .click();
    await page.getByPlaceholder("Login").fill("calypso.manager");
    await page.getByPlaceholder("Hasło").fill("Benefit.1");
    await page.getByRole("button", { name: "Zaloguj" }).click();
    await page.getByRole("link", { name: "Narzędzia wsparcia " }).click();
    await page
      .getByRole("link", { name: "Terminale Benefit Systems " })
      .click();
    // await page.getByRole('link', { name: 'Lista zgłoszeńXXXX' }).click();

    //dodać asercje
  });
});
