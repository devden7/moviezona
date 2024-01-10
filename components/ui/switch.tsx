"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import "../../app/globals.css";
import Image from "next/image";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-slate-200 dark:focus-visible:ring-slate-300 dark:focus-visible:ring-offset-slate-950 dark:data-[state=checked]:bg-slate-50 dark:data-[state=unchecked]:bg-slate-800",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-6 w-6 rounded-full shadow-lg bg-white ring-0 transition-transform data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-1 dark:bg-slate-950"
      )}
    >
      {props.checked ? (
        <div className="flex-center h-full w-full rounded-full">
          <Image src="/moon.svg" alt="dark mode" width={18} height={18} />
        </div>
      ) : (
        <div className="flex-center h-full w-full rounded-full">
          <Image src="/sun.svg" alt="dark mode" width={19} height={19} />
        </div>
      )}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
