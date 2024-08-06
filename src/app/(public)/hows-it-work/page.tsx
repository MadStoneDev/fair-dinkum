import { Footprints, Quote } from "lucide-react";
import Link from "next/link";
import { IconMessageForward, IconSpeakerphone } from "@tabler/icons-react";

export default function HowsItWork() {
  return (
    <main className={`py-8 flex flex-col gap-4`}>
      <section
        className={`py-16 px-4 md:px-16 flex flex-col items-center gap-2 w-full bg-light dark:bg-gray/50 text-center`}
      >
        <h1
          className={`mb-2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-dark dark:text-light`}
        >
          Thank you for your choosing
          <span className={`ml-1 text-accent`}>fair</span>
          <span className={`px-1  bg-accent text-light dark:text-[#2C333D]`}>
            Dinkum
          </span>
        </h1>
        <p
          className={`max-w-2xl text-base md:text-lg font-light tracking-tight text-dark/50 dark:text-light/50 text-center`}
        >
          We're absolutely stoked that you've visited and decided to use our
          platform. This article will layout all the ins and outs of how it all
          works. If you have any questions or concerns, please reach out and
          give us a holler!
        </p>
      </section>
      <section
        className={`p-8 mx-auto flex flex-col items-center gap-2 w-full max-w-2xl text-center font-light text-sm md:text-base`}
      >
        <h2
          className={`mb-8 flex gap-2 text-lg md:text-2xl font-semibold uppercase`}
        >
          Ask <IconMessageForward size={33} /> Track <Footprints size={28} />
          Spill <IconSpeakerphone size={30} /> Repeat
        </h2>
        <p className={`mb-8 text-dark/60 dark:text-light/50`}>
          They say curiosity killed the cat, but that's just because she
          wasn'tgit using <span className={`font-bold`}>fair</span>Dinkum. Be
          curious and learn from the many users and communities on our platform
          by <span className={`font-medium italic`}>asking</span> questions,{" "}
          <span className={`font-medium italic`}>tracking</span> your favourite
          users and communities and, yep,{" "}
          <span className={`font-medium italic`}>spilling</span> the beans!
        </p>
        {/* Sprint#1: Add screenshots of each action */}
        <p className={`mb-8 text-dark/60 dark:text-light/50`}>
          Remember: <span className={`font-bold`}>fair</span>Dinkum will never
          force you, nor should anyone else, to answer every or any question
          someone asks you, unless of course you're one of those dare devils{" "}
          <span className={`text-dark dark:text-light`}>😈</span> who poses the
          challenge,
          <br />
          <br />
          <span className={`text-dark dark:text-light`}>⚠️</span>Ask me anything
          for the next 24 hours
          <span className={`text-dark dark:text-light`}>⚠️</span>
          <br />
          <br />
          In that case, you're on your own! Just kidding{" "}
          <span className={`text-dark dark:text-light`}>😂😂</span>
        </p>
        <div className={`mb-8 relative w-fit`}>
          <p>
            We are committed to keeping{" "}
            <span className={`font-bold`}>fair</span>Dinkum a safe and private
            platform for anonymous and non-anonymous questions.
          </p>
          <Quote
            size={50}
            strokeWidth={1.25}
            className={`absolute top-0 -translate-y-1/3 -right-8 opacity-10`}
          />
        </div>
        <p className={`mb-8 text-dark/60 dark:text-light/50`}>
          That is our forefront focus. That is our promise. That is what we will
          actively and pro-actively fight for. If you feel that there is any
          feature or any user on <span className={`font-bold`}>fair</span>Dinkum
          that does not align with this promise, please make sure to visit our{" "}
          <Link
            href={`/help-center/support`}
            className={`px-1 border border-transparent border-b-accent hover:bg-accent text-dark dark:text-light transition-all duration-500 ease-in-out`}
          >
            Support Center
          </Link>{" "}
          to find out how you can help us improve.
        </p>
        <p
          className={`my-4 pt-4 border-t border-t-dark/20 dark:border-t-light/20 text-dark/60 dark:text-light/50`}
        >
          Thank you for being committed to us as we are committed to you and to{" "}
          <span className={`font-bold`}>fair</span>Dinkum. Be curious and have
          fun!
        </p>
      </section>
    </main>
  );
}
