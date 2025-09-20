import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';
import '../App.css';

const noLayoutRoutes = ['/login', '/register']; 

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isNoLayoutRoute = noLayoutRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      {isNoLayoutRoute ? (
        <Component {...pageProps} />
      ) : (
        <div className="app-container">
          <Component {...pageProps} />
        </div>
      )}
    </AuthProvider>
  );
}

export default MyApp;