'use client';

import { DottedBackground } from "@/components/ui/DottedBackground";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { html_code } from "@/lib/code";

import file from "../../public/file.svg";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const code = html_code;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between py-24">
      <div className="w-full flex flex-col items-center justify-between">
        <div className="w-full h-[1px] bg-[#CCCCCC10]"></div>

        <DottedBackground className="w-[680px] h-[200px] flex flex-col items-center justify-center border-x border-x-[#CCCCCC10]">
          <h1 className="text-4xl font-bold text-center">DottedBackground Component</h1>
          <p className="mt-4 text-lg text-center text-[#9f9fa9]">
            This component demonstrates a customizable dotted background using SVG patterns. You can adjust the dot color, size, and spacing through props.
          </p>
        </DottedBackground>

        <div className="w-full h-[1px] bg-[#CCCCCC10]"></div>

        <div className="flex text-left w-[680px] justify-start pr-8 border-x border-x-[#CCCCCC10] py-4 px-4">
          <p className="flex gap-2 text-[#9f9fa9] font-mono">
            <Image src={file} width={20} height={20} alt="File icon" />
            DottedBackground.tsx
          </p>
        </div>

        <div className="w-full h-[1px] bg-[#CCCCCC10]"></div>

        <div className="flex flex-col w-[680px] border-x border-x-[#CCCCCC10] py-4 px-4">
          <pre className="bg-[#1e1e1e] text-sm text-[#d4d4d4] rounded-t-xl p-4 overflow-x-auto scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-[#1e1e1e]">
            <code>{code}</code>
          </pre>
          <div className="flex justify-end">
            <Button className="font-mono w-full rounded-t-none rounded-b-xl" variant="secondary" size="sm" onClick={handleCopy}>
              {copied ? "✔" : "copy"}
            </Button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#CCCCCC10]"></div>
        <DottedBackground className="flex flex-col w-[680px] border-x border-x-[#CCCCCC10] py-4 px-4">
          <ul className="text-[#9f9fa9] font-mono space-y-2">
            <li><a href="https://github.com/d4nilpzz" className="hover:underline underline-offset-4">github ↗</a></li>
            <li><a href="https://discord.d4nilpzz.dev" className="hover:underline underline-offset-4">discord ↗</a></li>
          </ul>
        </DottedBackground>
        <div className="w-full h-[1px] bg-[#CCCCCC10]"></div>
        <div className="mt-14">
          <p className="text-[#9f9fa9] text-sm font-mono">
            Made by <a href="https://github.com/d4nilpzz" className="hover:underline underline-offset-4">d4nilpzz</a>
          </p>
        </div>
      </div>
    </main>
  );
}