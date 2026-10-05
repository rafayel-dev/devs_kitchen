/**
 * Studio team. Shown on /about only when this list is not empty.
 * Add real people only. Photos go in /public/team/ (square, at least 800×800).
 *
 * Example:
 * { name: "Full Name", role: "Founder & Engineer", photo: "/team/full-name.webp", link: "https://github.com/…" }
 */

export type TeamMember = {
  name: string;
  role: string;
  photo?: string;
  link?: string;
};

export const team: TeamMember[] = [];
