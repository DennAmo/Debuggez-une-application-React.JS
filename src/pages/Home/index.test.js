import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
    render(<Home />)
    expect(screen.getByTestId("testEvent")).toBeInTheDocument()
    waitFor( async () => {
      await screen.findByText("MixUsers").toBeInTheDocument()
      await screen.findByText("#ProductCON").toBeInTheDocument()
    })
  })  
  it("a list a people is displayed", async() => {
    render(<Home />)
     // to implement
     expect(screen.getByTestId("testPeople")).toBeInTheDocument()
    waitFor( async () => {
      await screen.findByText("Jean-Baptiste").toBeInTheDocument()
      await screen.findByText("Samira").toBeInTheDocument()
      await screen.findByText("Alice").toBeInTheDocument()
      await screen.findByText("Luís").toBeInTheDocument()
      await screen.findByText("Directeur Marketing").toBeInTheDocument()
    })
  })
  it("a footer is displayed", async () => {
    // to implement
    render(<Home />)
    expect(screen.getByTestId("testFooter")).toBeInTheDocument()
   waitFor( async () => {
     await screen.findByText("Notre derniére prestation").toBeInTheDocument()
     await screen.findByText("Contactez-nous").toBeInTheDocument()
     await screen.findByText("45 avenue de la République, 75000 Paris").toBeInTheDocument()
  })
})
  it("an event card, with the last event, is displayed",  () => {
    // to implement
    waitFor( async () => {
      await screen.getByTestId("testEvent").toBeInTheDocument()
      await screen.findByText('Dernier Evenement').toBeInTheDocument()
    })
  })
});
