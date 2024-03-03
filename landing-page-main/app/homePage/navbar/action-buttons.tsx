"use client";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const ActionButtons = () => {
  const { resolvedTheme } = useTheme(); // Get the current theme
  const textColor = resolvedTheme === "dark" ? "white" : "black";

  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div
                  className={`flex flex-col space-y-4 items-start w-full text-lg text-${textColor} mt-10`}
                >
                  <Link href="/">Sign in</Link>
                  <Link href="../../Prediction">Get Started</Link>
                  <Link href="/">Home</Link>
                  <Link href="../../overview">Overview</Link>
                  <Link href="../../Prediction">Prediction</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex md:space-x-4">
        <div className="mr-5">
          <ThemeSwitch />
        </div>

        <Button className="text-md" variant="ghost">
          Sign in
        </Button>

        <Link href="../../Prediction">
          <Button className="text-md bg-blue-500">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default ActionButtons;
