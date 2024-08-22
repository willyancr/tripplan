"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import Image from "next/image";

export default function ButtonLogin() {
  const { data: session } = useSession();

  const handleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/create-trip" });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login!");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("Você saiu da sua conta!");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      toast.error("Erro ao fazer logout!");
    }
  };
  return session ? (
    <button
      onClick={handleSignOut}
      className="flex w-fit items-center justify-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-100 transition-all hover:brightness-75"
    >
      <Image
        src={session.user?.image!}
        alt="Foto do usuário"
        width={20}
        height={20}
        quality={100}
        className="rounded-full"
      />
      <span className="hidden text-sm text-zinc-100 sm:flex">
        {session.user?.name}
      </span>
      <FiX className="size-5 text-zinc-500" />
    </button>
  ) : (
    <button
      onClick={handleSignIn}
      className="flex w-fit items-center justify-center gap-2 rounded-full bg-zinc-800 px-4 py-2 text-sm text-zinc-100 transition-all hover:brightness-75"
    >
      <FaGoogle className="size-5 text-greenish-yellow" />
      <span className="hidden sm:flex">Entrar com Google</span>
      <span className="sm:hidden">Login</span>
    </button>
  );
}
