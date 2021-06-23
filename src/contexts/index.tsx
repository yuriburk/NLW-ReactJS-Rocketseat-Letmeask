import { AuthProvider } from './AuthContext';

const Providers: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default Providers;
