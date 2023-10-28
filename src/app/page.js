import Block from "@/components/block";
import Attribution from "@/components/attribution";

export default function Home() {
  return (
    <main aria-label="content">
      <div className="container">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="sr-only">
            Frontend Mentor Coding Challenge, Advice Generator
          </h1>
          <Block />
          <Attribution />
        </div>
      </div>
    </main>
  );
}
