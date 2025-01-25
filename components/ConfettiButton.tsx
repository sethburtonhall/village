'use client';

import confetti from 'canvas-confetti';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import type { ButtonProps } from '@/components/ui/button';

export function ConfettiButton({
  children,
  variant,
  className,
  ...props
}: {
  children: React.ReactNode;
  variant?: ButtonProps['variant'];
  className?: string;
}) {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ['#a786ff', '#fd8bbc', '#eca184', '#f8deb1'];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <Button variant={variant} onClick={handleClick} className={cn('p-3', className)} {...props}>
      {children}
    </Button>
  );
}
