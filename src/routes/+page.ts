// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { redirect } from '@sveltejs/kit';
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
  throw redirect(302, '/find/recommend');
}
