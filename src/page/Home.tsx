import { useJobs } from "../api/getJobs";

const Home = () => {
  const { data, isLoading, error } = useJobs();
  console.log("data", data, isLoading, error);
  return <div>Hello</div>;
};

export default Home;
