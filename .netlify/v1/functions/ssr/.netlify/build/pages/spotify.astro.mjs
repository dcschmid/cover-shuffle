import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_CvA5EDur.mjs';
import 'kleur/colors';
import { b as $$Layout } from '../chunks/Layout_D5hPvjSV.mjs';
export { renderers } from '../renderers.mjs';

const $$Spotify = createComponent(async ($$result, $$props, $$slots) => {
  const client_id = "d36dc849405f4cd1badfcc319be94e6c";
  const client_secret = "e175ccffb6e741388083e6bb7d4c8a6e";
  const genre = "latin";
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
  });
  const tokenResponse = await response.json();
  const accessToken = tokenResponse.access_token;
  const artistResponse = await fetch(`https://api.spotify.com/v1/search?q=genre:${genre}&type=artist&limit=4`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const artistData = await artistResponse.json();
  const artists = artistData.artists.items;
  const albumData = await Promise.all(
    artists.map(async (artist) => {
      const albumResponse = await fetch(`https://api.spotify.com/v1/artists/${artist.id}/albums?limit=1`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const album = await albumResponse.json();
      const tracksResponse = await fetch(`https://api.spotify.com/v1/albums/${album.items[0].id}/tracks`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      const tracks = await tracksResponse.json();
      const totalDuration = tracks.items.reduce((acc, track) => acc + track.duration_ms, 0);
      const albumLengthMinutes = Math.floor(totalDuration / 6e4);
      return {
        artist: artist.name,
        albumTitle: album.items[0].name,
        albumCover: album.items[0].images[0].url,
        albumLength: `${albumLengthMinutes} minutes`
      };
    })
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Spotify" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${albumData.map((album) => renderTemplate`<div> <h2>${album.artist}</h2> <img${addAttribute(album.albumCover, "src")}${addAttribute(album.albumTitle, "alt")} width="150" height="150"> <p>Album: ${album.albumTitle}</p> <p>Length: ${album.albumLength}</p> </div>`)} </div> ` })}`;
}, "/Users/danielschmid/projects/cover-shuffle/src/pages/spotify.astro", void 0);

const $$file = "/Users/danielschmid/projects/cover-shuffle/src/pages/spotify.astro";
const $$url = "/spotify";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Spotify,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
