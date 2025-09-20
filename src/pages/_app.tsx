import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';
import '../App.css';

// Define which routes should NOT use the main app layout
const noLayoutRoutes = ['/login', '/register']; 

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if the current route is one that should have no layout
  const isNoLayoutRoute = noLayoutRoutes.includes(router.pathname);

  return (
    <AuthProvider>
      {isNoLayoutRoute ? (
        // For login/register, render the page directly
        <Component {...pageProps} />
      ) : (
        // For all other pages, wrap them in the main layout container
        <div className="app-container">
          <Component {...pageProps} />
        </div>
      )}
    </AuthProvider>
  );
}

export default MyApp;