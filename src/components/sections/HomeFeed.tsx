import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import FeedList from "@/components/sections/FeedList";

export default function HomeFeed() {
  return (
    <main className={`w-full`}>
      <Header />

      <div className={`p-4`}>
        <NavBar />
        <section className={`mx-auto my-5 w-full md:max-w-7xl`}>
          <FeedList />
        </section>
      </div>
    </main>
  );
}
