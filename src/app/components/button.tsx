import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'flex items-center justify-center gap-2 font-medium px-4 rounded-lg hover:brightness-75 transition-all',
  variants: {
    variant: {
      primary: 'bg-greenish-yellow text-zinc-800',
      secondary: 'bg-zinc-700 text-zinc-100',
    },
    size: {
      default: 'py-2',
      full: 'w-full h-12',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  children,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
}
