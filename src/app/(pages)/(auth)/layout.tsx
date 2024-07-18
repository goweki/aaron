export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col flex-grow items-center justify-center max-h-[800px]">
      {children}
    </main>
  );
}
