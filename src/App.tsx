import { Button } from "./components/Button";
import { InputField } from "./components/InputField";
import { Layout } from "./components/Layout";
import { Typography } from "./components/Typography";
import { AppProvider } from "./providers/app";

function App() {
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
        <InputField placeholder="ex. UX UI Designer" />
      </Layout>
    </AppProvider>
  );
}

export default App;
