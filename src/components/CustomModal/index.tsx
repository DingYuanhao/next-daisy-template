import React from "react";

export interface CustomModalProps {
  id: string;
  children: React.ReactNode;
  width?: string;
  onClose?: () => void;
}
export const CustomModal = (params: CustomModalProps) => {
  const { id, children, width } = params;
  return (
    <dialog id={id} className="modal">
      <div className="modal-box max-w-screen-lg min-w-[400px]" style={ width ? {width: width} : {width: 'fit-content'}}>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {children}
      </div>
    </dialog>
  );
};
