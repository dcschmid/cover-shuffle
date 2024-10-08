import { AstroDBAdapter } from "lucia-adapter-astrodb";
import { db, Session, User } from "astro:db";
import { Lucia } from "lucia";
import { GitHub, Google, Spotify, Yahoo } from "arctic";

export const github = new GitHub(
  import.meta.env.AUTH_GITHUB_ID,
  import.meta.env.AUTH_GITHUB_SECRET,
);

export const google = new Google(
  import.meta.env.AUTH_GOOGLE_ID,
  import.meta.env.AUTH_GOOGLE_SECRET,
  import.meta.env.PROD
    ? "https://melody-mind.de/login/google/callback"
    : "http://localhost:4321/login/google/callback",
);

export const spotify = new Spotify(
  import.meta.env.AUTH_SPOTIFY_ID,
  import.meta.env.AUTH_SPOTIFY_SECRET,
  import.meta.env.PROD
    ? "https://melody-mind.de/login/spotify/callback"
    : "http://localhost:4321/login/spotify/callback",
);

export const yahoo = new Yahoo(
  import.meta.env.AUTH_YAHOO_ID,
  import.meta.env.AUTH_YAHOO_SECRET,
  import.meta.env.PROD
    ? "https://melody-mind.de/login/yahoo/callback"
    : "http://localhost:4321/login/yahoo/callback",
);

const adapter = new AstroDBAdapter(db, Session, User);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: import.meta.env.PROD,
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      providerId: attributes.provider_id,
      username: attributes.username,
      avatarUrl: attributes.avatar_url,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  provider_id: number;
  username: string;
  avatar_url: string;
}
