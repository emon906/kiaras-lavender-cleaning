import {
  BadgeCheck,
  Banknote,
  Brush,
  CalendarDays,
  Clock,
  Droplets,
  Dumbbell,
  Hammer,
  HeartHandshake,
  Landmark,
  Layers,
  Nfc,
  ReceiptText,
  Scissors,
  Search,
  Shirt,
  Sofa,
  Sparkles,
  Truck,
  Wallet,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  brush: Brush,
  truck: Truck,
  scissors: Scissors,
  warehouse: Warehouse,
  dumbbell: Dumbbell,
  calendar: CalendarDays,
  shirt: Shirt,
  sofa: Sofa,
  droplets: Droplets,
  hammer: Hammer,
  layers: Layers,
  clock: Clock,
  search: Search,
  badge: BadgeCheck,
  heart: HeartHandshake,
  nfc: Nfc,
  cash: Banknote,
  venmo: Wallet,
  chime: Landmark,
  invoice: ReceiptText,
};

export function ServiceIcon({ icon, className }: { icon: string; className?: string }) {
  const Icon = iconMap[icon] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
