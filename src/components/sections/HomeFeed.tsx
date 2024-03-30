import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function HomeFeed() {
  return (
    <main className={`w-full`}>
      <Header />

      <section className={`px-4 `}>
        <NavBar />
      </section>
    </main>
  );
}
