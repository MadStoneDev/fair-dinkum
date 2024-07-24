import InfoSidebar from "@/components/info-sidebar";

export default function InfoLayout({ children }: any) {
  return (
    <main className="p-8 mb-10 flex flex-row items-start gap-10 transition-all duration-500 ease-in-out">
      {/* Sidebar */}
      <InfoSidebar />

      {children}
    </main>
  );
}
