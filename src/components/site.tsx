import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { Apple, Ban, Dumbbell, Heart, Share2, Wine, X } from "lucide-react";
import { Ribbon, SilkField } from "@/components/ribbon";
import {
  HABITS,
  PILLARS,
  SIGNS,
  STEPS,
  daysSince,
  useAwareness,
  type Check,
} from "@/lib/awareness";

const HABIT_ICONS = {
  move: Dumbbell,
  food: Apple,
  smoke: Ban,
  alcohol: Wine,
  feed: Heart,
} as const;

function scrollToId(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

function formatWhen(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "a recent check";
  return format(date, "d MMM yyyy");
}

export function Site() {
  const store = useAwareness();
  const [phase, setPhase] = useState<"idle" | number | "saved">("idle");
  const [noticed, setNoticed] = useState<boolean | null>(null);
  const [note, setNote] = useState("");
  const [posterOpen, setPosterOpen] = useState(false);
  const [shareNote, setShareNote] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);
  const latest = store.checks[0];

  useEffect(() => {
    if (!posterOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPosterOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [posterOpen]);

  function begin() {
    setPhase(0);
    setNoticed(null);
    setNote("");
    scrollToId("practice");
  }

  function saveCheck() {
    if (noticed === null) return;
    store.addCheck({ noticedChange: noticed, note });
    setPhase("saved");
  }

  async function shareMessage() {
    const text =
      "Know. Check. Act. Learn how your breasts usually look and feel, notice a change, and speak with a doctor or nurse.";
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Know Check Act", text, url });
        setShareNote("Shared.");
        return;
      }
      await navigator.clipboard.writeText(`${text} ${url}`);
      setShareNote("Message copied.");
    } catch {
      setShareNote("Copy wasn’t available. The card is here if you want to screenshot it.");
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-clip bg-blush text-ink">
      <SilkField />
      <div className="relative">
        {latest?.noticedChange && !latest.followedUp ? (
          <div className="bg-ink text-paper">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3">
              <p className="text-sm leading-relaxed">
                You noted a change on {formatWhen(latest.at)}. A doctor or nurse should see it — you don’t have to be sure first.
              </p>
              <button
                type="button"
                className="min-h-11 shrink-0 rounded-pill border border-paper/40 px-4 text-sm font-medium"
                onClick={() => store.markFollowedUp(latest.id)}
              >
                I’ve asked for an appointment
              </button>
            </div>
          </div>
        ) : null}

        <header className="sticky top-0 z-20 border-b border-line/80 bg-blush/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-3">
            <a href="#top" className="font-display text-xl font-semibold tracking-tight">
              Know Check Act
            </a>
            <nav className="hidden items-center gap-6 text-sm text-ink-soft md:flex">
              <a className="hover:text-ink" href="#signs">
                Signs
              </a>
              <a className="hover:text-ink" href="#practice">
                Monthly check
              </a>
              <a className="hover:text-ink" href="#risk">
                Lower risk
              </a>
            </nav>
            <button
              type="button"
              onClick={begin}
              className="min-h-11 rounded-pill bg-ink px-4 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ribbon-deep"
            >
              Begin a check
            </button>
          </div>
        </header>

        <main id="top">
          <section className="mx-auto max-w-5xl px-5 pt-12 pb-6 md:pt-16">
            <p className="text-center text-sm font-medium tracking-widest text-ink-soft uppercase">
              Breast cancer awareness
            </p>
            <h1 className="mt-4 text-center font-display text-5xl leading-none font-semibold tracking-tight md:text-7xl">
              Breast Cancer
              <span className="mt-2 block font-medium text-ribbon italic md:mt-3">Awareness</span>
            </h1>
            <div className="mx-auto mt-6 h-px max-w-xl bg-ink" />
            <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-ink-soft">
              Know what is usual for you. Notice what is new. Speak with a doctor or nurse if something has changed.
              Early attention is one of the kindest things you can do.
            </p>
          </section>

          <section className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-8 md:grid-cols-[1.15fr_0.85fr] md:gap-6 md:py-12">
            <Ribbon className="mx-auto w-40 md:order-last md:w-64" />
            <ol className="space-y-8 md:order-first">
              {PILLARS.map((pillar) => (
                <li key={pillar.word}>
                  <h2 className="font-display text-5xl leading-none font-semibold tracking-tight uppercase md:text-6xl">
                    {pillar.word}
                    <span className="text-ribbon">.</span>
                  </h2>
                  <p className="mt-3 max-w-sm text-lg leading-relaxed text-ink-soft">{pillar.copy}</p>
                </li>
              ))}
            </ol>
          </section>

          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 px-5 pt-2 pb-14">
            <button
              type="button"
              onClick={begin}
              className="min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ribbon-deep"
            >
              Start this month’s check
            </button>
            <button
              type="button"
              onClick={() => setPosterOpen(true)}
              className="min-h-11 rounded-pill border border-ink px-5 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              Open the card
            </button>
          </div>

          <section id="signs" className="scroll-mt-24 border-t border-line">
            <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
              <p className="text-sm font-medium tracking-widest text-ribbon-deep uppercase">What to notice</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-semibold md:text-5xl">
                A change from your usual is the thing to act on.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Breast cancer is much more common in women, and it also happens to men and to trans and non-binary people.
                The signs are the same: something new for you. Most people who notice a change do not have cancer.
              </p>
              <ul className="mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2">
                {SIGNS.map((sign) => (
                  <li key={sign.title} className="border-t border-line pt-4">
                    <h3 className="font-display text-2xl leading-snug font-semibold">{sign.title}</h3>
                    <p className="mt-1 leading-relaxed text-ink-soft">{sign.detail}</p>
                  </li>
                ))}
              </ul>
              <aside className="mt-10 rounded-card border border-line bg-paper px-5 py-5 md:px-6">
                <h3 className="font-display text-2xl font-semibold">Screening is separate from this check</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-ink-soft">
                  Looking and feeling helps you notice a change between visits. It does not replace a mammogram or a
                  clinician’s exam. When routine screening starts — often somewhere between 40 and 50 — depends on where
                  you live and on your own risk. If a close relative had breast or ovarian cancer, especially younger,
                  say so. You may be offered checks sooner.
                </p>
              </aside>
            </div>
          </section>

          <section id="practice" className="scroll-mt-24 border-t border-line bg-paper">
            <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
              <p className="text-sm font-medium tracking-widest text-ribbon-deep uppercase">On this device</p>
              <h2 className="mt-3 font-display text-4xl leading-tight font-semibold md:text-5xl">A quiet monthly ritual</h2>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
                Four short steps to stay familiar with your breasts. Notes stay in this browser. Nothing is sent anywhere.
                This is not a diagnosis and not a medical exam.
              </p>
              <CheckStatus latest={latest} hydrated={store.hydrated} />

              <div className="mt-8 rounded-card border border-line bg-blush p-5 md:p-8">
                {phase === "idle" ? (
                  <div className="max-w-xl">
                    <p className="font-display text-3xl leading-tight font-semibold">Whenever you are ready.</p>
                    <p className="mt-3 leading-relaxed text-ink-soft">
                      A mirror and a few quiet minutes. If you are sore, pregnant, breastfeeding, or just not in the mood,
                      another day is fine — unless something already feels different. Then don’t wait for the ritual.
                    </p>
                    <button
                      type="button"
                      onClick={begin}
                      className="mt-6 min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ribbon-deep"
                    >
                      Begin
                    </button>
                  </div>
                ) : null}

                {typeof phase === "number" ? (
                  <div>
                    <ol className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Check steps">
                      {STEPS.map((step, index) => (
                        <li key={step.key} className={index === phase ? "font-semibold text-ink" : "text-ink-soft"}>
                          <span className="tabular-nums">{index + 1}</span> {step.title}
                        </li>
                      ))}
                    </ol>
                    <h3 className="mt-6 font-display text-4xl font-semibold" aria-live="polite">
                      {STEPS[phase].title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">{STEPS[phase].body}</p>

                    {phase === STEPS.length - 1 ? (
                      <fieldset className="mt-6">
                        <legend className="text-base font-medium">Did you notice a change?</legend>
                        <div className="mt-3 flex flex-wrap gap-3">
                          <button
                            type="button"
                            aria-pressed={noticed === false}
                            onClick={() => setNoticed(false)}
                            className={
                              noticed === false
                                ? "min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper"
                                : "min-h-11 rounded-pill border border-line bg-paper px-5 text-sm font-medium"
                            }
                          >
                            No — this is my usual
                          </button>
                          <button
                            type="button"
                            aria-pressed={noticed === true}
                            onClick={() => setNoticed(true)}
                            className={
                              noticed === true
                                ? "min-h-11 rounded-pill bg-ribbon-deep px-5 text-sm font-medium text-paper"
                                : "min-h-11 rounded-pill border border-line bg-paper px-5 text-sm font-medium"
                            }
                          >
                            Yes — something is new
                          </button>
                        </div>
                        <label className="mt-5 block text-sm font-medium" htmlFor="check-note">
                          Private note, optional
                        </label>
                        <textarea
                          id="check-note"
                          value={note}
                          maxLength={400}
                          rows={3}
                          onChange={(event) => setNote(event.target.value)}
                          placeholder="Only if you want a reminder of what you noticed."
                          className="mt-2 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/70"
                        />
                      </fieldset>
                    ) : null}

                    <div className="mt-6 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setPhase(phase === 0 ? "idle" : phase - 1)}
                        className="min-h-11 rounded-pill border border-line bg-paper px-5 text-sm font-medium"
                      >
                        Back
                      </button>
                      {phase < STEPS.length - 1 ? (
                        <button
                          type="button"
                          onClick={() => setPhase(phase + 1)}
                          className="min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper hover:bg-ribbon-deep"
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled={noticed === null}
                          onClick={saveCheck}
                          className="min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper hover:bg-ribbon-deep disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Save on this device
                        </button>
                      )}
                    </div>
                  </div>
                ) : null}

                {phase === "saved" && latest ? (
                  <SavedState
                    latest={latest}
                    onAgain={() => {
                      setPhase(0);
                      setNoticed(null);
                      setNote("");
                    }}
                    onFollowedUp={() => store.markFollowedUp(latest.id)}
                  />
                ) : null}
              </div>

              {store.checks.length > 0 ? (
                <div className="mt-8">
                  <h3 className="font-display text-2xl font-semibold">Saved checks</h3>
                  <ul className="mt-4 divide-y divide-line border-t border-line">
                    {store.checks.map((check) => (
                      <li key={check.id} className="flex flex-wrap items-start justify-between gap-3 py-4">
                        <div className="min-w-0">
                          <p className="font-medium">
                            {formatWhen(check.at)}
                            <span className="font-normal text-ink-soft">
                              {" "}
                              · {check.noticedChange ? "Change noted" : "Usual"}
                              {check.followedUp ? " · Appointment asked" : ""}
                            </span>
                          </p>
                          {check.note ? <p className="mt-1 break-words text-ink-soft">{check.note}</p> : null}
                        </div>
                        <button
                          type="button"
                          onClick={() => store.removeCheck(check.id)}
                          className="min-h-11 px-2 text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-ink"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>

          <section id="risk" className="scroll-mt-24 border-t border-line">
            <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
              <p className="text-sm font-medium tracking-widest text-ribbon-deep uppercase">More ways to lower risk</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight font-semibold md:text-5xl">
                Everyday choices, held lightly.
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
                None of these promise you will not get breast cancer, and none replace screening. Tick what you did this
                week. The ticks reset on Monday and never leave this device.
              </p>
              <ul className="mt-8 divide-y divide-line overflow-hidden rounded-card border border-line bg-paper">
                {HABITS.map((habit) => {
                  const Icon = HABIT_ICONS[habit.id];
                  const on = store.habitOn(habit.id);
                  return (
                    <li key={habit.id} className="flex items-center gap-4 px-4 py-3 md:px-5">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mist text-ink" aria-hidden="true">
                        <Icon className="size-5" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium">{habit.title}</p>
                        <p className="text-sm leading-relaxed text-ink-soft">{habit.detail}</p>
                      </div>
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => store.toggleHabit(habit.id)}
                        className={
                          on
                            ? "min-h-11 shrink-0 rounded-pill bg-ribbon-deep px-4 text-sm font-medium text-paper"
                            : "min-h-11 shrink-0 rounded-pill border border-line px-4 text-sm font-medium"
                        }
                      >
                        {on ? "Done" : "This week"}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section className="border-t border-line px-5 py-20 text-center md:py-24">
            <p className="font-display text-4xl leading-tight font-medium text-gold italic md:text-6xl">You are not alone.</p>
            <p className="mt-3 font-display text-2xl font-semibold md:text-4xl">Together we are stronger.</p>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-soft">
              If someone you love is in treatment, or waiting on a result, you do not have to find the perfect words.
              Showing up, and getting your own change checked, are both a kind of care.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setPosterOpen(true);
                  void shareMessage();
                }}
                className="inline-flex min-h-11 items-center gap-2 rounded-pill bg-ink px-5 text-sm font-medium text-paper hover:bg-ribbon-deep"
              >
                <Share2 className="size-4" aria-hidden="true" />
                Share the message
              </button>
              <button
                type="button"
                onClick={() => scrollToId("practice")}
                className="min-h-11 rounded-pill border border-ink px-5 text-sm font-medium hover:bg-ink hover:text-paper"
              >
                Do your check
              </button>
            </div>
            {shareNote ? <p className="mt-4 text-sm text-ink-soft">{shareNote}</p> : null}
          </section>
        </main>

        <footer className="border-t border-line px-5 py-10">
          <div className="mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft">
            <p>
              This is general awareness, not a diagnosis, a screening program, or personal medical advice. If you notice
              a change, contact a doctor or nurse. Do not wait for the next routine screening date to ask.
            </p>
            <p className="mt-3">
              Read further from{" "}
              <a className="underline decoration-line underline-offset-4 hover:decoration-ribbon" href="https://www.nhs.uk/conditions/breast-cancer/" target="_blank" rel="noreferrer">
                the NHS
              </a>
              ,{" "}
              <a className="underline decoration-line underline-offset-4 hover:decoration-ribbon" href="https://www.cancer.org/cancer/types/breast-cancer.html" target="_blank" rel="noreferrer">
                the American Cancer Society
              </a>
              , and{" "}
              <a className="underline decoration-line underline-offset-4 hover:decoration-ribbon" href="https://breastcancernow.org/" target="_blank" rel="noreferrer">
                Breast Cancer Now
              </a>
              . Ages and tests differ by country.
            </p>
          </div>
        </footer>
      </div>

      {posterOpen ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-ink/40 p-4 md:p-8" role="presentation" onClick={() => setPosterOpen(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="poster-title"
            className="relative mx-auto max-w-lg rounded-card bg-blush px-6 py-8 shadow-none md:px-10 md:py-12"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setPosterOpen(false)}
              className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full text-ink hover:bg-mist"
              aria-label="Close card"
            >
              <X className="size-5" />
            </button>
            <p className="pr-12 text-center text-sm font-semibold tracking-widest uppercase">Breast cancer awareness</p>
            <div className="mx-auto mt-3 h-px max-w-xs bg-ink" />
            <h2 id="poster-title" className="sr-only">
              Know. Check. Act.
            </h2>
            <div className="mt-6 grid items-center gap-4 sm:grid-cols-[1fr_0.8fr]">
              <ol className="space-y-5">
                {PILLARS.map((pillar) => (
                  <li key={pillar.word}>
                    <p className="font-display text-4xl leading-none font-semibold uppercase">
                      {pillar.word}
                      <span className="text-ribbon">.</span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pillar.copy}</p>
                  </li>
                ))}
              </ol>
              <Ribbon className="mx-auto w-36 sm:w-44" />
            </div>
            <p className="mt-8 text-center font-display text-xl font-medium text-gold italic">You are not alone.</p>
            <p className="text-center font-display text-lg font-semibold">Together we are stronger.</p>
            <button
              type="button"
              onClick={() => void shareMessage()}
              className="mx-auto mt-6 flex min-h-11 items-center gap-2 rounded-pill bg-ink px-5 text-sm font-medium text-paper hover:bg-ribbon-deep"
            >
              <Share2 className="size-4" aria-hidden="true" />
              Share
            </button>
            {shareNote ? <p className="mt-3 text-center text-sm text-ink-soft">{shareNote}</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function CheckStatus({ latest, hydrated }: { latest: Check | undefined; hydrated: boolean }) {
  if (!hydrated || !latest) {
    return <p className="mt-4 text-sm text-ink-soft">No check saved on this device yet.</p>;
  }
  const days = daysSince(latest.at);
  const due = days >= 28;
  return (
    <p className="mt-4 text-sm text-ink-soft">
      Last check {formatWhen(latest.at)}
      <span className="tabular-nums"> · {days === 0 ? "today" : `${days} day${days === 1 ? "" : "s"} ago`}</span>
      {due ? " · It’s about time for another look." : ""}
    </p>
  );
}

function SavedState({
  latest,
  onAgain,
  onFollowedUp,
}: {
  latest: Check;
  onAgain: () => void;
  onFollowedUp: () => void;
}) {
  return (
    <div className="max-w-xl">
      <h3 className="font-display text-4xl font-semibold">Saved.</h3>
      {latest.noticedChange ? (
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">
          A change is a reason to ask, not a reason to panic. Contact a doctor or nurse and describe what is new. You
          can say you are not sure — that is enough.
        </p>
      ) : (
        <p className="mt-3 text-lg leading-relaxed text-ink-soft">
          You noted your usual today. Come back in about a month, or sooner if something feels different before then.
        </p>
      )}
      <div className="mt-6 flex flex-wrap gap-3">
        {latest.noticedChange && !latest.followedUp ? (
          <button
            type="button"
            onClick={onFollowedUp}
            className="min-h-11 rounded-pill bg-ribbon-deep px-5 text-sm font-medium text-paper"
          >
            I’ve asked for an appointment
          </button>
        ) : null}
        <button type="button" onClick={onAgain} className="min-h-11 rounded-pill border border-ink px-5 text-sm font-medium">
          Check again
        </button>
      </div>
    </div>
  );
}
