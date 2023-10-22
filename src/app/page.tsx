export default function HomePage() {
  return (
    <main className="bg-background flex grow flex-col items-center justify-center bg-gradient-to-b text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          <p className="text-foreground">
            Disc<span className="text-primary">Link</span>
          </p>
        </h1>
      </div>
    </main>
  );
}
