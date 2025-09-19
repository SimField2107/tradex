
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import '../App.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <div className="app-container">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;