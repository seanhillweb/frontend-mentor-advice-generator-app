/**
 * Summary. Attribution for Frontend Mentor and Sean Hill.
 */

import DiceSvgComponent from "@/components/svgs/dice";
import DividerDesktop from "@/components/svgs/divider-desktop";
import DividerMobile from "@/components/svgs/divider-mobile";

export default function Block() {
  return (
    <div className="round relative block w-full max-w-[540px] rounded-2xl bg-brand-dark-grayish-blue px-4 pb-[64px] pt-8 text-center md:px-11 md:pb-[72px] md:pt-10">
      <span className="text-xs uppercase tracking-[0.3em] text-brand-neon-green">
        Advice #001
      </span>
      <p className="mt-6 text-2xl leading-snug text-brand-light-cyan md:text-[28px]">
        <span>&quot;</span>
        It is easy to sit up and take notice, what&apos;s difficult is getting
        up and taking action.
        <span>&quot;</span>
      </p>
      <DividerMobile className="mx-auto mt-6 block md:hidden" />
      <DividerDesktop className="mx-auto mt-10 hidden md:block" />
      <button className="absolute -bottom-8 left-0 right-0 ml-auto mr-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-neon-green hover:shadow-lg hover:shadow-brand-neon-green/25">
        <span className="sr-only">Submit</span>
        <DiceSvgComponent className="fill-brand-dark-blue" />
      </button>
    </div>
  );
}
