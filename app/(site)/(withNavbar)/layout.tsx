// Here we will have a layout that will be used for all pages that have a navbar

export default function NavbarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h4>test</h4>
      {children}
    </>
  );
}
