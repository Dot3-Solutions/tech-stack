import { Button } from "./components/Button";
import { InputField } from "./components/InputField";
import { Layout } from "./components/Layout";
import { Modal } from "./components/Modal";
import { PrimaryButton } from "./components/PrimaryButton";
import { RequiredSign } from "./components/RequiredSign";
import { Typography } from "./components/Typography";
import { AppProvider } from "./providers/app";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <AppProvider>
      <Layout>
        <Button type="primary" children={"NEXT"} />
        <Button type="primary" children={"Apply Now"} />
        <Button
          type="secondary"
          children={
            <Typography
              fontSize="text-2xl"
              fontWeight="font-normal"
              lineHeight="leading-8"
              color="text-black"
              text="UX UI Designer"
            />
          }
        />
        <div>
          <div className="flex pb-1">
            <Typography
              fontSize="text-sm"
              fontWeight="font-medium"
              lineHeight="leading-5"
              text={"Industry"}
              color="text-dark"
            />
            <RequiredSign />
          </div>
          <InputField placeholder="ex. UX UI Designer" />
        </div>

        <div className="container mx-auto px-4 pt-5">
          <div className="flex justify-end">
            <PrimaryButton text="Create Job" onClick={openModal} />
          </div>
          <Modal isOpen={isOpen} closeModal={closeModal} />
        </div>
      </Layout>
    </AppProvider>
  );
}

export default App;
