import { X } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ItemActionButton({children, ...props }: ButtonProps) {
  return (
    <button className="bg-zinc-700/50 text-zinc-300 p-1 rounded " {...props}>
      {children}
    </button>
  );
}
