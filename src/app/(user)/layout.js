import Header from "@/components/elements/header";

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
