import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';

const Modal = (props) => {
  const { children, open, onClose } = props;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-20 overflow-y-auto backdrop-blur-sm"
        onClose={() => onClose()}
      >
        <div className="min-h-screen px-4 text-center ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl md:max-w-xl dark:bg-gray-600 rounded-2xl">
              {children}

              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-yellow-500 border border-opacity-0 rounded-md hover:border-gray-300 dark:hover:bg-gray-500 dark:hover:border-opacity-0 dark:hover:text-yellow-500 focus:outline-none"
                  onClick={onClose}
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
