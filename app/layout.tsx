import "./globals.css";
type MainLayout = {
  name: "HAmza",
  children: React.ReactNode;
};
const RootLayout:React.FC<MainLayout> = (arg) => {
  return (
    <html>
      <head></head>
      <body>{arg.children}</body>
    </html>
  );
};
export default RootLayout;
