export default function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <div className="w-full flex md:text-base text-sm items-baseline text-brand-medium-blue">
      <span>{label}</span>
      <div className="flex flex-1 border-t border-dotted border-brand-medium-blue h-[1px] translate-y-[1px] mx-2" />
      <span>{price}</span>
    </div>
  )
}
