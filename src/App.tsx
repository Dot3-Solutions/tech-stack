import { Button } from "./components/Button";
import { InputField } from "./components/InputField";
import { Layout } from "./components/Layout";
import { AppProvider } from "./providers/app";

function App() {
  return (
    <AppProvider>
      <Layout>
        <Button type="primary" children={"NEXT"} />
        <Button type="primary" children={"Apply Now"} />
        <Button type="secondary" children={"External Apply"} />
        <InputField label="Job title" />
      </Layout>
    </AppProvider>
  );
}

export default App;
