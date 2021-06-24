import { useContext } from 'react';

import { DialogContext } from './../contexts/DialogContext';

export function useDialog(): any {
  const context = useContext(DialogContext);

  if (Object.keys(context).length <= 0) {
    throw new Error('useDialog must be used within an DialogProvider');
  }

  return context;
}
