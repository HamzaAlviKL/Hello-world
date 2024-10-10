import headerStyle from "./header.module.css";

const Header = (props: any) => {
  const obj = {
    name: "Hamza",
    age: 26,
    dob: true,
  };
  console.log(props.abc)
  // console.log(props);
  return (
    <div>
      <h1 className={headerStyle.hamza}>{props.abc}</h1>
    </div>
  );
};

export default Header;
