"use client";

import Image from "next/image";
import React from "react";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Tag } from "@/components/tag";
export default function ListPage() {
  return (
    <div className="mb-10 flex min-h-[calc(100vh-170px)] w-full flex-wrap justify-center gap-10 last:ml-auto">
      <Tag />
      {[1, 2, 3, 4].map((item) => {
        return (
          <CardContainer key={item} className="inter-var">
            <CardBody className="group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[20rem]">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ="50"
              >
                Make things float in air
              </CardItem>
              <CardItem
                as="p"
                className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                translateZ="60"
              >
                Hover over this card to unleash the power of CSS perspective
              </CardItem>
              <CardItem className="mt-4 w-full" translateZ="100">
                <Image
                  alt="thumbnail"
                  className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  height="500"
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="1000"
                />
              </CardItem>
              <div className="mt-5 flex items-center justify-end">
                <CardItem
                  as="button"
                  className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  translateZ={20}
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        );
      })}
    </div>
  );
}
