// Blog authors. Add a person here (and set `author` on a post in lib/content.ts) once the client
// sends names, roles, photos and bios; the post then shows a byline and its BlogPosting schema
// credits that Person instead of the company. Empty until real details arrive: no placeholders.
export type Author = {
  name: string;
  role: string;
  photo?: string; // /images/team/<file>.jpg
  bio: string;
  years?: number; // years of experience
};

export const authors: Record<string, Author> = {};
