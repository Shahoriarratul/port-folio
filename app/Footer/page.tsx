import React, { EventHandler, FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormStatus } from "react-dom";

export default function Footer() {
  const { pending } = useFormStatus();
  function handleSubmit(e: FormEvent) {
    e.preventDefault;
    alert(" email sent");
  }
  return (
    <div
      id="footer"
      className="flex h-[60vh] w-full flex-col justify-between border-t-4 border-gray-500 sm:flex-row"
    >
      <div className=" sm:basis-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex h-full flex-col items-center justify-center space-y-4 text-xl"
        >
          <div className=" text-4xl">CONTACT ME</div>
          <div className=" text- ">
            Please contact me directly to my email{" "}
            <span className=" underline">shahoriar.ratul#gamil.com</span>
          </div>
          <Input
            placeholder="Your Email"
            className=" w-[30vw] border-gray-600 bg-black text-start"
          />
          <Textarea
            placeholder="Your message.."
            className=" h-[15vh] w-[30vw] border-gray-600 bg-black"
          />
          <button
            type="submit"
            className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-violet-800/25 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
            disabled={pending}
          >
            {pending ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                Submit{" "}
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
              </>
            )}
          </button>
        </form>
      </div>
      <div className=" space-y-32 p-10 py-32 sm:basis-1/2">
        <p className=" text-lg">
          <span className="font-semibold">About this website : </span> built
          with React & Next.js (App Router & Server Actions), TypeScript,
          Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
        <small className="absolute mb-2 block text-xs">
          &copy; 2023 Shahoriar Ratul. All rights reserved.
        </small>
      </div>
    </div>
  );
}