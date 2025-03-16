import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

interface SessionContent {
  id?: number;
}

export default async function getSession() {
  const cookie = await cookies();
  return getIronSession<SessionContent>(cookie, {
    cookieName: 'cookie-name',
    // 추후 .env 변수로 설정
    password: '1234567890',
  });
}
