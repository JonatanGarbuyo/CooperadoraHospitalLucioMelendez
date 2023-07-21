import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { AiOutlineClose } from 'react-icons/ai'
import styles from './index.module.css'

export const ModalContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.DialogOverlay} />
      <DialogPrimitive.Content {...props} ref={forwardedRef} className={styles.DialogContent}>
        {children}
        <DialogPrimitive.Close className={styles.closeButton} aria-label="Close">
          <AiOutlineClose />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
);

export const Modal = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
