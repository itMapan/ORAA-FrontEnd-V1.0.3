import React, { useState } from "react";
import { AppButton, AppCard, AppModal } from "../components/partials/UiElement";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <AppCard
        cardSett={{
          cardHeader: {
            content: (
              <>
                <AppCard.Title>Hallo</AppCard.Title>
                <AppCard.Tools />
              </>
            ),
          },
          cardBody: {
            content: "asdasad",
          },
        }}
      />
      <AppButton
        onClick={() => {
          setShowModal(!showModal);
        }}
      />
      <AppModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
        }}
        modalBody={<>Contoh</>}
        modalTitle="Modal Test"
        enableModalFooter={true}
        footerBody="Test Footer"
        btnConfirm={{
          enable: true,
          onClick: () => {
            console.log("hallo");
          },
        }}
      />
    </div>
  );
};

export default Index;
