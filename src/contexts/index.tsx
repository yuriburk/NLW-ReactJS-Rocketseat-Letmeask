import { AuthProvider } from './AuthContext';
import { DialogProvider } from './DialogContext';

const Providers: React.FC = ({ children }) => (
  <AuthProvider>
    <DialogProvider>{children}</DialogProvider>
  </AuthProvider>
);

export default Providers;
