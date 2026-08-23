/**
 * Single source of truth for facts that appear in more than one place, so the site can't
 * contradict itself (the hero, the about section and the resume had drifted apart).
 */
export const CAREER_START = new Date("2023-07-01");

/** Derived, not hardcoded - "2.5+" was correct when it was written and silently went stale. */
export function yearsOfExperience(from: Date = CAREER_START): number {
  const years = (Date.now() - from.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.floor(years * 2) / 2; // nearest half-year, rounded down
}

export const PROFILE = {
  name: "Adithya Venkatesh",
  role: "SDET",
  tagline: "AI-Assisted Test Engineering",
  location: "Visakhapatnam, Andhra Pradesh",
  email: "adithyavenkatesh00@gmail.com",
  phone: "8247207533",
  github: "https://github.com/Adithya12321",
  linkedin: "https://www.linkedin.com/in/adithya-venkatesh-pithani-5bb4602aa/",
  resume: "/Adithya-Venkatesh-SDET.pdf",
} as const;
