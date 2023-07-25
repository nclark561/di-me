import Header from "./Header";
import Conversations from "./Conversations";
import Footer from "./Footer";

export default function UserPage() {
  return (
    <main className="flex flex-col">
      <Header/>
      <div className="flex h-[75vh]">
        <Conversations />
      </div>
      <Footer/>
    </main>
  );
}
