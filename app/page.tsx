async function getHello() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/hello`,
    {
      cache: "no-store",
    }
  );

  return response.json();
}

export default async function Home() {
  const data = await getHello();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-6">
      {/* Background Glow */}
      <div className="absolute left-[-100px] top-[-100px] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-xl">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
          Backend Connection Successful
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white">
          Welcome to Your <br />
          Next.js App
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
          Your frontend is now successfully connected with the backend service.
        </p>

        {/* Notification Box */}
        <details className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition-all">
          <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-5 text-white">
            <div>
              <p className="text-lg font-semibold">
                 We got a message from backend
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Tap here to open the message
              </p>
            </div>

            <span className="text-slate-400 transition-transform duration-300 group-open:rotate-180">
              ▼
            </span>
          </summary>

          <div className="border-t border-white/10 px-6 py-5">
            <div className="rounded-xl bg-slate-800 p-5">
              <p className="mb-2 text-sm uppercase tracking-wider text-cyan-400">
                Backend Response
              </p>

              <p className="text-lg font-medium text-white overflow-y-auto">
                {data.message}
              </p>
            </div>
          </div>
        </details>

        {/* Footer */}
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-slate-500">
          Built with Next.js, Tailwind CSS, and API integration.
        </div>
      </div>
    </main>
  );
}