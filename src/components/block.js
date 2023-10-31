"use client";

/**
 * Summary. Attribution for Frontend Mentor and Sean Hill.
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import DiceSvgComponent from "@/components/svgs/dice";
import DividerDesktop from "@/components/svgs/divider-desktop";
import DividerMobile from "@/components/svgs/divider-mobile";

export default function Block() {
  const [loading, setLoading] = useState(true);
  const [isAdvice, setAdvice] = useState({});

  const generateAdvice = async () => {
    let id = Math.floor(Math.random() * 224);

    try {
      const response = await axios.get(
        `https://api.adviceslip.com/advice/${id}`
      );
      setAdvice(response.data.slip);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    generateAdvice();
  }, []);

  const handleOnClick = () => {
    generateAdvice();
  };

  return (
    <div className="round relative block w-full max-w-[540px] rounded-2xl bg-brand-dark-grayish-blue px-4 pb-[64px] pt-8 text-center md:px-11 md:pb-[72px] md:pt-10">
      {loading ? (
        <p className="text-xs uppercase tracking-[0.3em] text-brand-neon-green">
          Advice Loading
        </p>
      ) : (
        <p className="text-xs uppercase tracking-[0.3em] text-brand-neon-green">
          <span>Advice #</span>
          {isAdvice.id}
        </p>
      )}
      {loading ? (
        <p
          className="mt-6 text-2xl leading-snug text-brand-light-cyan md:text-[28px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <span>&ldquo;</span>
          Loading...
          <span>&rdquo;</span>
        </p>
      ) : (
        <p
          className="mt-6 text-2xl leading-snug text-brand-light-cyan md:text-[28px]"
          aria-live="polite"
          aria-atomic="true"
        >
          <span>&ldquo;</span>
          {isAdvice.advice}
          <span>&rdquo;</span>
        </p>
      )}

      <DividerMobile className="mx-auto mt-6 block md:hidden" />
      <DividerDesktop className="mx-auto mt-10 hidden md:block" />
      <button
        onClick={handleOnClick}
        className="hover:shadow-3xl focus:shadow-3xl absolute -bottom-8 left-0 right-0 ml-auto mr-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-neon-green hover:shadow-brand-neon-green focus:shadow-brand-neon-green"
      >
        <span className="sr-only">Generate new advice</span>
        <DiceSvgComponent className="fill-brand-dark-blue" />
      </button>
    </div>
  );
}
