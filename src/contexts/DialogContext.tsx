import React, { createContext, useCallback, useState } from 'react';

export const DialogContext = createContext<any>({});

export const DialogProvider: React.FC = ({ children }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [DialogComponent, setDialogComponent] =
    useState<React.ReactElement | null>();

  const handleOpenDialog = useCallback((dialog: React.ReactElement) => {
    setDialogComponent(dialog);
    setIsDialogOpen(true);
  }, []);

  const handleCloseDialog = useCallback(() => setIsDialogOpen(false), []);

  return (
    <DialogContext.Provider
      value={{ isDialogOpen, handleOpenDialog, handleCloseDialog }}
    >
      {children}
      {isDialogOpen && DialogComponent}
    </DialogContext.Provider>
  );
};
