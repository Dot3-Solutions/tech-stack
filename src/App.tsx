import { Button } from "./components/Button";
import { InputField } from "./components/InputField";
import { JobCard } from "./components/JobCard";
import { Layout } from "./components/Layout";
import { Modal } from "./components/Modal";
import { PrimaryButton } from "./components/PrimaryButton";
import { RequiredSign } from "./components/RequiredSign";
import { SecondaryButton } from "./components/SecondaryButton";
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
        <PrimaryButton text="Create Job" onClick={openModal} />
        <SecondaryButton text="Create Job" onClick={openModal} />

        <InputField placeholder="ex. UX UI Designer" label="Job title" />

        <div className="max-w-[80%] mx-auto px-4 pt-5">
          <div className="flex justify-end">
            <PrimaryButton text="Create Job" onClick={openModal} />
            <SecondaryButton text="Create Job" onClick={openModal} />
          </div>
          <Modal isOpen={isOpen} closeModal={closeModal} />
          <Layout className="flex gap-[10px] mt-10 ">
            <JobCard />
            {/* <JobCard /> */}
          </Layout>
        </div>
      </Layout>
    </AppProvider>
  );
}

export default App;
