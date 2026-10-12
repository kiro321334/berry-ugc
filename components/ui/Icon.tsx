import {
  BadgeCheck,
  ArrowDown,
  ChevronDown,
  Eye,
  Video,
  Store,
  TrendingUp,
  CircleCheck,
  Globe,
  Check,
  SquarePlay,
  Tag,
  MessageSquareText,
  type LucideProps,
} from "lucide-react";

const map = {
  badge: BadgeCheck,
  down: ArrowDown,
  chevron: ChevronDown,
  eye: Eye,
  video: Video,
  store: Store,
  trend: TrendingUp,
  check: CircleCheck,
  globe: Globe,
  tick: Check,
  play: SquarePlay,
  tag: Tag,
  chat: MessageSquareText,
} as const;
export type IconName = keyof typeof map;

export default function Icon({ name, ...p }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C aria-hidden="true" {...p} />;
}
