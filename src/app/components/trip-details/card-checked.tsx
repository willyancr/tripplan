import { CircleCheck, CircleDashed } from 'lucide-react';

interface CardCheckedProps {
  activity: string;
  hour: string;
}

export default function CardChecked({ activity, hour }: CardCheckedProps) {
  return (
    <div className="flex items-center gap-3 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl">
      <CircleCheck className="size-5 text-lime-300" />
      <span>{activity}</span>
      <span className="ml-auto">{hour}h</span>
    </div>
  );
}
