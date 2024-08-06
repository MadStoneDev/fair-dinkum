import Link from "next/link";

export default function Support() {
  return (
    <section className="ml-0 md:ml-16 max-w-xl text-sm font-light leading-6 transition-all duration-500 ease-in-out">
      <h1 className={`text-2xl font-bold`}>Support</h1>
      <p className={`mb-8`}>Find out how we can help</p>
      <p className={`mb-8`}>
        The articles listed in the sidebar are continually updated and added to.
        We want to help however we can to make sure{" "}
        <span className={`font-bold`}>fair</span>Dinkum is the best that is can
        be. If you feel that we are missing something, please let us know.
      </p>
      <h3 className={`font-bold uppercase`}>
        How to find what you're looking for
      </h3>
      <ul className={`mb-8 list-disc list-inside flex flex-col gap-2`}>
        <li>
          For common inquiries others have asked, browse our{" "}
          <Link
            href={"/help-center/support/faq"}
            className={`px-1 border-b border-accent hover:bg-accent transition-all duration-500 ease-in-out`}
          >
            FAQ
          </Link>
        </li>
        <li>
          To give feedback, use our{" "}
          <Link
            href={"/help-center/support/contact"}
            className={`px-1 border-b border-accent hover:bg-accent transition-all duration-500 ease-in-out`}
          >
            Contact Us
          </Link>
        </li>
        <li>
          If you're running into a problem,{" "}
          <Link
            href={"/help-center/support/submit-ticket"}
            className={`px-1 border-b border-accent hover:bg-accent transition-all duration-500 ease-in-out`}
          >
            Submit a Ticket
          </Link>
        </li>
        <li>
          A user is not abiding by the rules?{" "}
          <Link
            href={"/help-center/support/report-user"}
            className={`px-1 border-b border-accent hover:bg-accent transition-all duration-500 ease-in-out`}
          >
            Report them
          </Link>
        </li>
      </ul>
      <p className={`mb-8 opacity-50`}>
        Select a link above or from the sidebar.
      </p>
    </section>
  );
}
