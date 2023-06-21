'use client';

import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { createContext, useContext, useState } from 'react';
import useMeasure from 'react-use-measure';

const transition = { type: 'ease', ease: 'easeInOut', duration: 0.4 };

export function ResizablePanel() {
  const [status, setStatus] = useState('idle');
  const [ref, bounds] = useMeasure();

  return (
    <MotionConfig transition={transition}>
      <div className="mx-auto w-full max-w-md">
        <div className="overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-800">
          <div className="px-8 pt-8">
            <p className="text-lg text-white">Reset password</p>
          </div>
          <motion.div
            animate={{
              height: bounds.height > 0 ? bounds.height : 'null',
            }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
          >
            <div ref={ref}>
              <AnimatePresence mode="popLayout">
                {status === 'idle' || status === 'saving' ? (
                  <motion.div
                    exit={{ opacity: 0 }}
                    transition={{
                      ...transition,
                      duration: transition.duration / 2,
                    }}
                    key="form"
                  >
                    <Form
                      onSubmit={async () => await delay(1000)}
                      afterSave={() => setStatus('success')}
                      className="p-8"
                    >
                      <p className="text-sm text-zinc-400">Enter your email to get a password reset link:</p>
                      <div className="mt-3">
                        <input
                          className="block w-full rounded border-none text-slate-900"
                          type="email"
                          required
                          defaultValue="sam@buildui.com"
                        />
                      </div>
                      <div className="mt-8 text-right">
                        <Form.Button className="rounded bg-indigo-500 px-5 py-2 text-sm font-medium text-white ">
                          Email me my link
                        </Form.Button>
                      </div>
                    </Form>
                  </motion.div>
                ) : (
                  <motion.div
                    transition={{
                      ...transition,
                      duration: transition.duration / 2,
                      delay: transition.duration / 2,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <p className="p-8 text-sm text-zinc-400">Email sent! Check your inbox to continue.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </MotionConfig>
  );
}

const formContext = createContext({});

type FormProps = {
  onSubmit: () => Promise<void>;
  afterSave: () => void;
  children: React.ReactNode;
  className?: string;
  rest?: any;
};

function Form({ onSubmit, afterSave, children, ...rest }: FormProps) {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setStatus('saving');
    await onSubmit();
    setStatus('success');
    await delay(1250);
    afterSave();
  }

  return (
    <formContext.Provider value={{ status }}>
      <form onSubmit={handleSubmit} {...rest}>
        <fieldset disabled={status !== 'idle'}>{children}</fieldset>
      </form>
    </formContext.Provider>
  );
}

type FormButtonProps = {
  children: React.ReactNode;
  className: string;
  rest?: any;
};

Form.Button = function FormButton({ children, className, ...rest }: FormButtonProps) {
  // @ts-ignore
  const { status } = useContext(formContext);

  const disabled = status !== 'idle';

  return (
    <MotionConfig transition={{ ...transition, duration: 0.15 }}>
      <button
        type="submit"
        disabled={disabled}
        className={`${className} relative transition duration-200 ${
          disabled ? 'bg-opacity-80' : 'hover:bg-opacity-80'
        }`}
        {...rest}
      >
        <AnimatePresence mode="wait">
          {status === 'saving' && (
            <motion.div
              key="a"
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex justify-center py-2"
            >
              <Spinner />
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              key="b"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex justify-center py-2"
            >
              <CheckIcon className="h-full" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className={status === 'idle' ? '' : 'invisible'}>{children}</span>
      </button>
    </MotionConfig>
  );
};

type SpinnerProps = {
  className?: string;
  rest?: any;
};

function Spinner({ className, ...rest }: SpinnerProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} h-full w-auto animate-spin`}
      style={{
        animationTimingFunction: 'steps(8, end)',
        animationDuration: '.75s',
      }}
      {...rest}
    >
      <rect style={{ opacity: 0.4 }} x={11} y={2} width={2} height={6} rx={1} fill="currentColor" />
      <rect
        style={{ opacity: 0.4 }}
        x={18.364}
        y={4.22183}
        width={2}
        height={6}
        rx={1}
        transform="rotate(45 18.364 4.222)"
        fill="currentColor"
      />
      <rect
        x={22}
        y={11}
        width={2}
        style={{ opacity: 0.4 }}
        height={6}
        rx={1}
        transform="rotate(90 22 11)"
        fill="currentColor"
      />
      <rect
        x={19.7782}
        y={18.364}
        width={2}
        style={{ opacity: 0.4 }}
        height={6}
        rx={1}
        transform="rotate(135 19.778 18.364)"
        fill="currentColor"
      />
      <rect
        x={13}
        y={22}
        width={2}
        style={{ opacity: 0.4 }}
        height={6}
        rx={1}
        transform="rotate(-180 13 22)"
        fill="currentColor"
      />
      <rect
        x={5.63603}
        y={19.7782}
        width={2}
        style={{ opacity: 0.6 }}
        height={6}
        rx={1}
        transform="rotate(-135 5.636 19.778)"
        fill="currentColor"
      />
      <rect
        x={2}
        y={13}
        width={2}
        style={{ opacity: 0.8 }}
        height={6}
        rx={1}
        transform="rotate(-90 2 13)"
        fill="currentColor"
      />
      <rect
        x={4.22183}
        y={5.63603}
        width={2}
        height={6}
        rx={1}
        transform="rotate(-45 4.222 5.636)"
        fill="currentColor"
      />
    </svg>
  );
}

async function delay(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Newsletter() {
  return (
    <section className="container mx-auto py-24">
      <div className="text-center">
        <span className="font-mono uppercase tracking-[5px] text-z-yellow">¿Quieres mantenerte informado de todo?</span>
        <h2 className="mx-auto font-serif text-4xl font-medium text-[#f7f7f8] md:max-w-xl md:px-0 md:text-5xl lg:max-w-4xl lg:text-6xl xl:max-w-5xl">
          Suscribirte a nuestro newsletter.
        </h2>
      </div>
      <div>
        <ResizablePanel />
      </div>
    </section>
  );
}
