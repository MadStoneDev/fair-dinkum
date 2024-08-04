import InfoSidebar from "@/components/info-sidebar";

export default function InfoLayout({ children }: any) {
  return (
    <main className="px-4 md:px-8 md:py-8 mb-12 flex flex-row items-start gap-4 md:gap-10 transition-all duration-500 ease-in-out overflow-y-auto">
      {/* Sidebar */}
      <InfoSidebar />

      {children}
    </main>
  );
}
