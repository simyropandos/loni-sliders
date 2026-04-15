"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SLIDER_PAGES } from "@/lib/sliders";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            Loni Sliders
          </h1>
          <p className="mt-1 text-muted-foreground text-sm font-light">
            Creative ways to set your volume.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SLIDER_PAGES.map((page, i) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Link href={page.href} className="block group h-full">
                <div className="h-full rounded bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div
                    className={`h-28 ${page.color} flex items-center justify-center transition-transform duration-300`}
                  >
                    <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {page.icon}
                    </span>
                  </div>
                  <div className="px-5 py-5">
                    <h2 className="font-medium text-sm">{page.title}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5 font-light leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
