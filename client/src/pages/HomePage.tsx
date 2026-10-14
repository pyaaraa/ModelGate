import { ArrowUpRight, Network } from 'lucide-react';

export function HomePage() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20">
      <div className="max-w-3xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
          <Network size={16} aria-hidden="true" />
          Unified AI gateway
        </div>
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">ModelGate</h1>
        <p className="mt-6 text-xl leading-8 text-slate-300 sm:text-2xl">
          One API. Multiple AI models. Smarter routing.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
          A single, provider-agnostic foundation for building with the models that fit each request.
        </p>
        <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
          Platform foundation in progress <ArrowUpRight size={16} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
