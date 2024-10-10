import Header from "./components/Header/Header";

const HomePage = () => {
  return (
    <div>
      <Header abc={22} hello="Hello World" isBoolean={true}></Header>
      <h2 className="green">This is homepage</h2>
    </div>
  );
};
export default HomePage;
