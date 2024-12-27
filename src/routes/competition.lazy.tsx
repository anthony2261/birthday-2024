import { createLazyFileRoute } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";

const markdownContent = `
# A Tiny Birthday

**Date:** December 28, 2024, 1PM

**Location:** Roumieh, Lebanon - [Malkoun Building](https://maps.app.goo.gl/uEhYifeXByNCsfM66)

_Please RSVP!_

**Theme:** This year's theme is **tiny**! I'll handle all the decorations and details. Your only task is to participate in the tiny competition below.

---
# A Tiny Competition

You *must* bring **one tiny item** to the party. What counts as tiny? That's up to your interpretation! It could be anything - the more creative, the better.

I, Anthony, will be the judge, and crown one item as the champion of them all. Good luck.

*N.B.*: the item is for the competition, not a gift for me.

Inspiration: [TaskMaster's prize tasks](https://youtu.be/n8JEbc7gfzA?si=eKU1JUy2pHKbdasF&t=756)

[//]: # "Consult the [FAQ](#faq) section below for more competition details."

---
# FAQ

Ask me questions and I'll add them here if they're relevant.
`;

export const Route = createLazyFileRoute("/competition")({
  component: Competition,
});

function LinkRenderer(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  console.log({ props });
  return (
    <a href={props.href} target={props.href?.startsWith("#") ? "" : "_blank"} rel="noreferrer">
      {props.children}
    </a>
  );
}

function Competition() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <ReactMarkdown
            className="prose prose-indigo max-w-none"
            components={{ a: LinkRenderer }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
