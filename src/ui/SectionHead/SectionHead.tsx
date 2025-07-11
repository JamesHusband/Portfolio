import { NumberPrefix } from "@UI";

type SectionHeadProps = {
  name: string;
  index: number;
  isCentered?: boolean;
};

export function SectionHead({ name, index, isCentered }: SectionHeadProps) {
  return (
    <div
      className={`${
        isCentered ? "text-center" : "flex items-baseline gap-2"
      } mb-10`}
    >
      <div className={`${isCentered ? "" : "flex items-baseline gap-2"}`}>
        <NumberPrefix number={index + 1} size="lg" />
      </div>
      <h2 className="text-[clamp(26px,5vw,32px)] font-semibold whitespace-nowrap text-slate-light">
        {name}
      </h2>
      {!isCentered && (
        <div className="w-full h-px bg-slate/20 relative top-[-10px]" />
      )}
    </div>
  );
}
