'use client';

import { CircleUserRound } from 'lucide-react';
import { FiX } from 'react-icons/fi';
import { twMerge } from 'tailwind-merge';
import { useSession, signOut, signIn } from 'next-auth/react';
import Image from 'next/image';

export default function ButtonLogin({ className }: { className?: string }) {
  const { data: session } = useSession();

  const handleSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/create-trip' });
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      // Exibir mensagem de erro para o usuário
    }
  };
  return session ? (
    <button
      onClick={handleSignOut}
      className={twMerge(
        'flex items-center justify-center text-zinc-100 text-sm gap-2 bg-zinc-800 px-4 py-2 rounded-full hover:brightness-75 transition-all',
        className,
      )}
    >
      <Image
        src={session.user?.image!}
        alt="Foto do usuário"
        width={20}
        height={20}
        quality={100}
        className="rounded-full"
      />
      <span className="text-zinc-100 text-sm">{session.user?.name}</span>
      <FiX className="text-zinc-500 size-5" />
    </button>
  ) : (
    <button
      onClick={handleSignIn}
      className={twMerge(
        'flex items-center justify-center text-zinc-100 text-sm gap-2 bg-zinc-800 px-4 py-2 rounded-full hover:brightness-75 transition-all',
        className,
      )}
    >
      <CircleUserRound className="text-greenish-yellow" />
      Entrar
    </button>
  );
}
