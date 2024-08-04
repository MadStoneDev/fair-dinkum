export default function UserLayout({ children }: any) {
  return (
    <main className="px-0 md:px-8 mb-12 flex flex-row items-start gap-4 md:gap-10 transition-all duration-500 ease-in-out overflow-y-auto">
      {children}
    </main>
  );
}
