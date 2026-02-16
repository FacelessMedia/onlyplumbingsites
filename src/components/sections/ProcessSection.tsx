import { processSteps } from "@/data/process";

export default function ProcessSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            A straightforward process from audit to growth. No mystery, no
            runaround.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16">
          {/* Desktop: horizontal */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  {/* Connector */}
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-[60%] top-8 h-0.5 w-[80%] bg-slate-200" />
                  )}

                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-orange bg-white">
                    <step.icon className="h-7 w-7 text-orange" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical */}
          <div className="space-y-8 lg:hidden">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative flex gap-4">
                {index < processSteps.length - 1 && (
                  <div className="absolute left-5 top-12 h-full w-px bg-slate-200" />
                )}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-orange bg-white">
                  <span className="text-sm font-bold text-navy">
                    {step.step}
                  </span>
                </div>
                <div className="pb-2">
                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
