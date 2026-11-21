import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Heart, c as Apple, i as Share2, n as Wine, o as Dumbbell, s as Ban, t as X } from "../_libs/lucide-react.mjs";
import { t as format } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBrQb6gi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SilkField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className: "silk-drift pointer-events-none absolute inset-0 h-full w-full text-ribbon/30",
		viewBox: "0 0 1440 900",
		preserveAspectRatio: "xMidYMid slice",
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M-80 140C220 20 400 260 740 120C1080 -20 1240 100 1560 40",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M-80 200C240 100 440 320 780 180C1120 40 1280 160 1560 90",
				stroke: "currentColor",
				strokeWidth: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M-40 780C280 680 520 900 860 750C1180 600 1320 720 1560 640",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M-40 840C300 750 560 960 900 810C1220 660 1360 780 1560 700",
				stroke: "currentColor",
				strokeWidth: "0.8"
			})
		]
	});
}
function Ribbon({ className }) {
	const clip = `${(0, import_react.useId)().replace(/:/g, "")}-fold`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 280 450",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: clip,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: "0",
					width: "132",
					height: "250"
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				className: "fill-ribbon-deep",
				points: "196,118 138,176 44,424 112,434"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				className: "fill-ribbon",
				points: "70,124 158,184 252,368 184,416"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M94 198 A82 106 0 1 1 190 198",
				className: "fill-none stroke-ribbon",
				strokeWidth: "60",
				strokeLinecap: "butt"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M94 198 A82 106 0 1 1 190 198",
				className: "fill-none stroke-ribbon-deep",
				strokeWidth: "60",
				strokeLinecap: "butt",
				clipPath: `url(#${clip})`
			})
		]
	});
}
var PILLARS = [
	{
		word: "Know",
		copy: "Learn how your breasts usually look and feel."
	},
	{
		word: "Check",
		copy: "Feel for a new lump. Look for dimpled skin."
	},
	{
		word: "Act",
		copy: "Speak to a doctor or nurse if you notice a change."
	}
];
var STEPS = [
	{
		key: "look",
		title: "Look",
		body: "Stand in front of a mirror, arms down, then raised. Notice the outline, the skin, and the nipples. You are learning your usual — not searching for a flaw."
	},
	{
		key: "feel",
		title: "Feel",
		body: "Use the flats of three fingers. In the shower or lying down, move across the whole breast, the nipple, and up into the armpit. Start light, then a little firmer."
	},
	{
		key: "compare",
		title: "Compare",
		body: "Breasts are often uneven, and they change through the month. What matters is something new for you: a lump, a dent, a nipple that has turned, skin that looks different."
	},
	{
		key: "decide",
		title: "Decide",
		body: "If something is new, speak with a doctor or nurse. You do not need to be sure it is serious. Most changes are not cancer. The ones that are do better when they are seen early."
	}
];
var SIGNS = [
	{
		title: "A new lump or thickened area",
		detail: "In the breast, near the nipple, or up in the armpit. It can be painless."
	},
	{
		title: "Dimpling or puckering",
		detail: "Skin that pulls in, or a patch that looks like orange peel."
	},
	{
		title: "A change in size or shape",
		detail: "Different from your usual, not just different from the other side."
	},
	{
		title: "A nipple that turns in",
		detail: "Or points a new way, if that is not how it has always been."
	},
	{
		title: "Discharge",
		detail: "Fluid that is not breast milk, especially if it is bloody or from one side."
	},
	{
		title: "Skin or nipple changes",
		detail: "Redness, a rash, crusting, or flaking that does not settle."
	},
	{
		title: "Swelling",
		detail: "Around the breast, armpit, or collarbone, even with no lump you can feel."
	},
	{
		title: "Pain that is new",
		detail: "Pain alone is a less common sign. Persistent new pain still deserves a conversation."
	}
];
var HABITS = [
	{
		id: "move",
		title: "Move regularly",
		detail: "Walking counts. Most days is enough to matter."
	},
	{
		id: "food",
		title: "Eat plenty of plants",
		detail: "Vegetables, fruit, pulses, and whole grains."
	},
	{
		id: "smoke",
		title: "Don’t smoke",
		detail: "Stopping helps more than almost any other daily change."
	},
	{
		id: "alcohol",
		title: "Keep alcohol low",
		detail: "Less is better. Risk rises with the amount you drink."
	},
	{
		id: "feed",
		title: "Breastfeed if you can",
		detail: "Only if it is possible and you choose to. It is not a duty."
	}
];
var STORAGE_KEY = "know-check-act.v1";
var EMPTY = {
	checks: [],
	habits: {}
};
function isCheck(value) {
	if (!value || typeof value !== "object") return false;
	const v = value;
	return typeof v.id === "string" && typeof v.at === "string" && typeof v.noticedChange === "boolean" && typeof v.note === "string";
}
function load() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return EMPTY;
		const parsed = JSON.parse(raw);
		return {
			checks: Array.isArray(parsed.checks) ? parsed.checks.filter(isCheck).map((c) => ({
				...c,
				followedUp: Boolean(c.followedUp)
			})).slice(0, 24) : [],
			habits: parsed.habits && typeof parsed.habits === "object" && !Array.isArray(parsed.habits) ? Object.fromEntries(Object.entries(parsed.habits).filter((entry) => typeof entry[1] === "string")) : {}
		};
	} catch {
		return EMPTY;
	}
}
function currentWeekKey(date = /* @__PURE__ */ new Date()) {
	const copy = new Date(date);
	const mondayOffset = (copy.getDay() + 6) % 7;
	copy.setDate(copy.getDate() - mondayOffset);
	copy.setHours(0, 0, 0, 0);
	const month = String(copy.getMonth() + 1).padStart(2, "0");
	const day = String(copy.getDate()).padStart(2, "0");
	return `${copy.getFullYear()}-${month}-${day}`;
}
function daysSince(iso) {
	const then = new Date(iso).getTime();
	if (Number.isNaN(then)) return 0;
	return Math.max(0, Math.floor((Date.now() - then) / 864e5));
}
function useAwareness() {
	const [state, setState] = (0, import_react.useState)(EMPTY);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setState(load());
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
	}, [state, hydrated]);
	const week = currentWeekKey();
	return {
		hydrated,
		checks: state.checks,
		habitOn(id) {
			return state.habits[id] === week;
		},
		addCheck(input) {
			const entry = {
				id: crypto.randomUUID(),
				at: (/* @__PURE__ */ new Date()).toISOString(),
				noticedChange: input.noticedChange,
				note: input.note.trim().slice(0, 400),
				followedUp: false
			};
			setState((current) => ({
				...current,
				checks: [entry, ...current.checks].slice(0, 24)
			}));
		},
		markFollowedUp(id) {
			setState((current) => ({
				...current,
				checks: current.checks.map((check) => check.id === id ? {
					...check,
					followedUp: true
				} : check)
			}));
		},
		removeCheck(id) {
			setState((current) => ({
				...current,
				checks: current.checks.filter((check) => check.id !== id)
			}));
		},
		toggleHabit(id) {
			setState((current) => {
				const habits = { ...current.habits };
				if (habits[id] === week) delete habits[id];
				else habits[id] = week;
				return {
					...current,
					habits
				};
			});
		}
	};
}
var HABIT_ICONS = {
	move: Dumbbell,
	food: Apple,
	smoke: Ban,
	alcohol: Wine,
	feed: Heart
};
function scrollToId(id) {
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	document.getElementById(id)?.scrollIntoView({
		behavior: reduce ? "auto" : "smooth",
		block: "start"
	});
}
function formatWhen(iso) {
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) return "a recent check";
	return format(date, "d MMM yyyy");
}
function Site() {
	const store = useAwareness();
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [noticed, setNoticed] = (0, import_react.useState)(null);
	const [note, setNote] = (0, import_react.useState)("");
	const [posterOpen, setPosterOpen] = (0, import_react.useState)(false);
	const [shareNote, setShareNote] = (0, import_react.useState)("");
	const closeRef = (0, import_react.useRef)(null);
	const latest = store.checks[0];
	(0, import_react.useEffect)(() => {
		if (!posterOpen) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();
		const onKey = (event) => {
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
		store.addCheck({
			noticedChange: noticed,
			note
		});
		setPhase("saved");
	}
	async function shareMessage() {
		const text = "Know. Check. Act. Learn how your breasts usually look and feel, notice a change, and speak with a doctor or nurse.";
		const url = window.location.href;
		try {
			if (navigator.share) {
				await navigator.share({
					title: "Know Check Act",
					text,
					url
				});
				setShareNote("Shared.");
				return;
			}
			await navigator.clipboard.writeText(`${text} ${url}`);
			setShareNote("Message copied.");
		} catch {
			setShareNote("Copy wasn’t available. The card is here if you want to screenshot it.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-x-clip bg-blush text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SilkField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					latest?.noticedChange && !latest.followedUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "bg-ink text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-relaxed",
								children: [
									"You noted a change on ",
									formatWhen(latest.at),
									". A doctor or nurse should see it — you don’t have to be sure first."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "min-h-11 shrink-0 rounded-pill border border-paper/40 px-4 text-sm font-medium",
								onClick: () => store.markFollowedUp(latest.id),
								children: "I’ve asked for an appointment"
							})]
						})
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
						className: "sticky top-0 z-20 border-b border-line/80 bg-blush/90 backdrop-blur-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#top",
									className: "font-display text-xl font-semibold tracking-tight",
									children: "Know Check Act"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									className: "hidden items-center gap-6 text-sm text-ink-soft md:flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "hover:text-ink",
											href: "#signs",
											children: "Signs"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "hover:text-ink",
											href: "#practice",
											children: "Monthly check"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "hover:text-ink",
											href: "#risk",
											children: "Lower risk"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: begin,
									className: "min-h-11 rounded-pill bg-ink px-4 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ribbon-deep",
									children: "Begin a check"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
						id: "top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "mx-auto max-w-5xl px-5 pt-12 pb-6 md:pt-16",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-center text-sm font-medium tracking-widest text-ink-soft uppercase",
										children: "Breast cancer awareness"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "mt-4 text-center font-display text-5xl leading-none font-semibold tracking-tight md:text-7xl",
										children: ["Breast Cancer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-2 block font-medium text-ribbon italic md:mt-3",
											children: "Awareness"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-6 h-px max-w-xl bg-ink" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-xl text-center text-lg leading-relaxed text-ink-soft",
										children: "Know what is usual for you. Notice what is new. Speak with a doctor or nurse if something has changed. Early attention is one of the kindest things you can do."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "mx-auto grid max-w-5xl items-center gap-8 px-5 py-8 md:grid-cols-[1.15fr_0.85fr] md:gap-6 md:py-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ribbon, { className: "mx-auto w-40 md:order-last md:w-64" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "space-y-8 md:order-first",
									children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "font-display text-5xl leading-none font-semibold tracking-tight uppercase md:text-6xl",
										children: [pillar.word, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-ribbon",
											children: "."
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 max-w-sm text-lg leading-relaxed text-ink-soft",
										children: pillar.copy
									})] }, pillar.word))
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-3 px-5 pt-2 pb-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: begin,
									className: "min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ribbon-deep",
									children: "Start this month’s check"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setPosterOpen(true),
									className: "min-h-11 rounded-pill border border-ink px-5 text-sm font-medium transition-colors duration-200 hover:bg-ink hover:text-paper",
									children: "Open the card"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
								id: "signs",
								className: "scroll-mt-24 border-t border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto max-w-5xl px-5 py-16 md:py-20",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium tracking-widest text-ribbon-deep uppercase",
											children: "What to notice"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 max-w-2xl font-display text-4xl leading-tight font-semibold md:text-5xl",
											children: "A change from your usual is the thing to act on."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft",
											children: "Breast cancer is much more common in women, and it also happens to men and to trans and non-binary people. The signs are the same: something new for you. Most people who notice a change do not have cancer."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2",
											children: SIGNS.map((sign) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "border-t border-line pt-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-display text-2xl leading-snug font-semibold",
													children: sign.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 leading-relaxed text-ink-soft",
													children: sign.detail
												})]
											}, sign.title))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
											className: "mt-10 rounded-card border border-line bg-paper px-5 py-5 md:px-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-2xl font-semibold",
												children: "Screening is separate from this check"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 max-w-3xl leading-relaxed text-ink-soft",
												children: "Looking and feeling helps you notice a change between visits. It does not replace a mammogram or a clinician’s exam. When routine screening starts — often somewhere between 40 and 50 — depends on where you live and on your own risk. If a close relative had breast or ovarian cancer, especially younger, say so. You may be offered checks sooner."
											})]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
								id: "practice",
								className: "scroll-mt-24 border-t border-line bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto max-w-5xl px-5 py-16 md:py-20",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium tracking-widest text-ribbon-deep uppercase",
											children: "On this device"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 font-display text-4xl leading-tight font-semibold md:text-5xl",
											children: "A quiet monthly ritual"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft",
											children: "Four short steps to stay familiar with your breasts. Notes stay in this browser. Nothing is sent anywhere. This is not a diagnosis and not a medical exam."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckStatus, {
											latest,
											hydrated: store.hydrated
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 rounded-card border border-line bg-blush p-5 md:p-8",
											children: [
												phase === "idle" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "max-w-xl",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-display text-3xl leading-tight font-semibold",
															children: "Whenever you are ready."
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-3 leading-relaxed text-ink-soft",
															children: "A mirror and a few quiet minutes. If you are sore, pregnant, breastfeeding, or just not in the mood, another day is fine — unless something already feels different. Then don’t wait for the ritual."
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: begin,
															className: "mt-6 min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ribbon-deep",
															children: "Begin"
														})
													]
												}) : null,
												typeof phase === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
														className: "flex flex-wrap gap-x-4 gap-y-2 text-sm",
														"aria-label": "Check steps",
														children: STEPS.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
															className: index === phase ? "font-semibold text-ink" : "text-ink-soft",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "tabular-nums",
																	children: index + 1
																}),
																" ",
																step.title
															]
														}, step.key))
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-6 font-display text-4xl font-semibold",
														"aria-live": "polite",
														children: STEPS[phase].title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft",
														children: STEPS[phase].body
													}),
													phase === STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
														className: "mt-6",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
																className: "text-base font-medium",
																children: "Did you notice a change?"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "mt-3 flex flex-wrap gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	"aria-pressed": noticed === false,
																	onClick: () => setNoticed(false),
																	className: noticed === false ? "min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper" : "min-h-11 rounded-pill border border-line bg-paper px-5 text-sm font-medium",
																	children: "No — this is my usual"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	"aria-pressed": noticed === true,
																	onClick: () => setNoticed(true),
																	className: noticed === true ? "min-h-11 rounded-pill bg-ribbon-deep px-5 text-sm font-medium text-paper" : "min-h-11 rounded-pill border border-line bg-paper px-5 text-sm font-medium",
																	children: "Yes — something is new"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "mt-5 block text-sm font-medium",
																htmlFor: "check-note",
																children: "Private note, optional"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																id: "check-note",
																value: note,
																maxLength: 400,
																rows: 3,
																onChange: (event) => setNote(event.target.value),
																placeholder: "Only if you want a reminder of what you noticed.",
																className: "mt-2 w-full resize-y rounded-2xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-soft/70"
															})
														]
													}) : null,
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-6 flex flex-wrap gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setPhase(phase === 0 ? "idle" : phase - 1),
															className: "min-h-11 rounded-pill border border-line bg-paper px-5 text-sm font-medium",
															children: "Back"
														}), phase < STEPS.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: () => setPhase(phase + 1),
															className: "min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper hover:bg-ribbon-deep",
															children: "Next"
														}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															disabled: noticed === null,
															onClick: saveCheck,
															className: "min-h-11 rounded-pill bg-ink px-5 text-sm font-medium text-paper hover:bg-ribbon-deep disabled:cursor-not-allowed disabled:opacity-40",
															children: "Save on this device"
														})]
													})
												] }) : null,
												phase === "saved" && latest ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavedState, {
													latest,
													onAgain: () => {
														setPhase(0);
														setNoticed(null);
														setNote("");
													},
													onFollowedUp: () => store.markFollowedUp(latest.id)
												}) : null
											]
										}),
										store.checks.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-2xl font-semibold",
												children: "Saved checks"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-4 divide-y divide-line border-t border-line",
												children: store.checks.map((check) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex flex-wrap items-start justify-between gap-3 py-4",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "font-medium",
															children: [formatWhen(check.at), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "font-normal text-ink-soft",
																children: [
																	" ",
																	"· ",
																	check.noticedChange ? "Change noted" : "Usual",
																	check.followedUp ? " · Appointment asked" : ""
																]
															})]
														}), check.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-1 break-words text-ink-soft",
															children: check.note
														}) : null]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: () => store.removeCheck(check.id),
														className: "min-h-11 px-2 text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-ink",
														children: "Remove"
													})]
												}, check.id))
											})]
										}) : null
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
								id: "risk",
								className: "scroll-mt-24 border-t border-line",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mx-auto max-w-5xl px-5 py-16 md:py-20",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium tracking-widest text-ribbon-deep uppercase",
											children: "More ways to lower risk"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-3 max-w-2xl font-display text-4xl leading-tight font-semibold md:text-5xl",
											children: "Everyday choices, held lightly."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-2xl leading-relaxed text-ink-soft",
											children: "None of these promise you will not get breast cancer, and none replace screening. Tick what you did this week. The ticks reset on Monday and never leave this device."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-8 divide-y divide-line overflow-hidden rounded-card border border-line bg-paper",
											children: HABITS.map((habit) => {
												const Icon = HABIT_ICONS[habit.id];
												const on = store.habitOn(habit.id);
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center gap-4 px-4 py-3 md:px-5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "flex size-11 shrink-0 items-center justify-center rounded-full bg-mist text-ink",
															"aria-hidden": "true",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
																className: "size-5",
																strokeWidth: 1.75
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-medium",
																children: habit.title
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-sm leading-relaxed text-ink-soft",
																children: habit.detail
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															"aria-pressed": on,
															onClick: () => store.toggleHabit(habit.id),
															className: on ? "min-h-11 shrink-0 rounded-pill bg-ribbon-deep px-4 text-sm font-medium text-paper" : "min-h-11 shrink-0 rounded-pill border border-line px-4 text-sm font-medium",
															children: on ? "Done" : "This week"
														})
													]
												}, habit.id);
											})
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "border-t border-line px-5 py-20 text-center md:py-24",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-4xl leading-tight font-medium text-gold italic md:text-6xl",
										children: "You are not alone."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 font-display text-2xl font-semibold md:text-4xl",
										children: "Together we are stronger."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-6 max-w-xl leading-relaxed text-ink-soft",
										children: "If someone you love is in treatment, or waiting on a result, you do not have to find the perfect words. Showing up, and getting your own change checked, are both a kind of care."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap items-center justify-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => {
												setPosterOpen(true);
												shareMessage();
											},
											className: "inline-flex min-h-11 items-center gap-2 rounded-pill bg-ink px-5 text-sm font-medium text-paper hover:bg-ribbon-deep",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
												className: "size-4",
												"aria-hidden": "true"
											}), "Share the message"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => scrollToId("practice"),
											className: "min-h-11 rounded-pill border border-ink px-5 text-sm font-medium hover:bg-ink hover:text-paper",
											children: "Do your check"
										})]
									}),
									shareNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-ink-soft",
										children: shareNote
									}) : null
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "border-t border-line px-5 py-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-3xl text-sm leading-relaxed text-ink-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is general awareness, not a diagnosis, a screening program, or personal medical advice. If you notice a change, contact a doctor or nurse. Do not wait for the next routine screening date to ask." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3",
								children: [
									"Read further from",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "underline decoration-line underline-offset-4 hover:decoration-ribbon",
										href: "https://www.nhs.uk/conditions/breast-cancer/",
										target: "_blank",
										rel: "noreferrer",
										children: "the NHS"
									}),
									",",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "underline decoration-line underline-offset-4 hover:decoration-ribbon",
										href: "https://www.cancer.org/cancer/types/breast-cancer.html",
										target: "_blank",
										rel: "noreferrer",
										children: "the American Cancer Society"
									}),
									", and",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										className: "underline decoration-line underline-offset-4 hover:decoration-ribbon",
										href: "https://breastcancernow.org/",
										target: "_blank",
										rel: "noreferrer",
										children: "Breast Cancer Now"
									}),
									". Ages and tests differ by country."
								]
							})]
						})
					})
				]
			}),
			posterOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 overflow-y-auto bg-ink/40 p-4 md:p-8",
				role: "presentation",
				onClick: () => setPosterOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "poster-title",
					className: "relative mx-auto max-w-lg rounded-card bg-blush px-6 py-8 shadow-none md:px-10 md:py-12",
					onClick: (event) => event.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: closeRef,
							type: "button",
							onClick: () => setPosterOpen(false),
							className: "absolute top-4 right-4 flex size-11 items-center justify-center rounded-full text-ink hover:bg-mist",
							"aria-label": "Close card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pr-12 text-center text-sm font-semibold tracking-widest uppercase",
							children: "Breast cancer awareness"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-px max-w-xs bg-ink" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "poster-title",
							className: "sr-only",
							children: "Know. Check. Act."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 grid items-center gap-4 sm:grid-cols-[1fr_0.8fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "space-y-5",
								children: PILLARS.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-4xl leading-none font-semibold uppercase",
									children: [pillar.word, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-ribbon",
										children: "."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-ink-soft",
									children: pillar.copy
								})] }, pillar.word))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ribbon, { className: "mx-auto w-36 sm:w-44" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-center font-display text-xl font-medium text-gold italic",
							children: "You are not alone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center font-display text-lg font-semibold",
							children: "Together we are stronger."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void shareMessage(),
							className: "mx-auto mt-6 flex min-h-11 items-center gap-2 rounded-pill bg-ink px-5 text-sm font-medium text-paper hover:bg-ribbon-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
								className: "size-4",
								"aria-hidden": "true"
							}), "Share"]
						}),
						shareNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-sm text-ink-soft",
							children: shareNote
						}) : null
					]
				})
			}) : null
		]
	});
}
function CheckStatus({ latest, hydrated }) {
	if (!hydrated || !latest) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 text-sm text-ink-soft",
		children: "No check saved on this device yet."
	});
	const days = daysSince(latest.at);
	const due = days >= 28;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-4 text-sm text-ink-soft",
		children: [
			"Last check ",
			formatWhen(latest.at),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums",
				children: [" · ", days === 0 ? "today" : `${days} day${days === 1 ? "" : "s"} ago`]
			}),
			due ? " · It’s about time for another look." : ""
		]
	});
}
function SavedState({ latest, onAgain, onFollowedUp }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-4xl font-semibold",
				children: "Saved."
			}),
			latest.noticedChange ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg leading-relaxed text-ink-soft",
				children: "A change is a reason to ask, not a reason to panic. Contact a doctor or nurse and describe what is new. You can say you are not sure — that is enough."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg leading-relaxed text-ink-soft",
				children: "You noted your usual today. Come back in about a month, or sooner if something feels different before then."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [latest.noticedChange && !latest.followedUp ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onFollowedUp,
					className: "min-h-11 rounded-pill bg-ribbon-deep px-5 text-sm font-medium text-paper",
					children: "I’ve asked for an appointment"
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onAgain,
					className: "min-h-11 rounded-pill border border-ink px-5 text-sm font-medium",
					children: "Check again"
				})]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Site, {});
}
//#endregion
export { Home as component };
