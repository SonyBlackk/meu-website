import { homeOgAlt, homeOgImage } from '@/lib/og-routes';
import { ogSize } from '@/lib/og';

export const alt = homeOgAlt.pt;
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return homeOgImage('pt');
}
