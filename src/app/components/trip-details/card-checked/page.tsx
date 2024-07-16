import { CircleCheck, CircleDashed } from 'lucide-react';

interface CardCheckedProps {
  activity: string;
  hour: string;
}

export default function CardChecked({ activity, hour }: CardCheckedProps) {
  return (
    <div className="flex justify-between items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg text-zinc-400 drop-shadow-2xl">
      <div className="flex items-center gap-3">
        <CircleCheck className="size-5 text-lime-300" />
        <p className="mr-2">{activity}</p>
      </div>
      <p>{hour}h</p>
    </div>
  );
}
