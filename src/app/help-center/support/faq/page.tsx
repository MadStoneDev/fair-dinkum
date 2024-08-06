import FAQLink from "@/components/faq-link";

export default function FAQ() {
  return (
    <section className="ml-0 md:ml-16 w-full max-w-xl text-sm font-light leading-6 transition-all duration-500 ease-in-out">
      <h1 className={`text-2xl font-bold`}>FAQ</h1>
      <p className={`mb-8`}>Answers to Common Questions and Inquiries</p>

      <h3 className={`mb-2 text-sm font-semibold`}>Jump to:</h3>
      <ul className={`mb-8 pb-8 flex flex-col gap-2 border-b border-gray`}>
        <FAQLink anchor={`general-questions`} title={`General Questions`} />
        <FAQLink anchor={`account-and-profile`} title={`Account and Profile`} />
        <FAQLink
          anchor={`asking-questions-and-spilling-answers`}
          title={`Asking Questions and Spilling Answers`}
        />
        <FAQLink anchor={`communities`} title={`Communities`} />
        <FAQLink
          anchor={`privacy-and-security`}
          title={`Privacy and Security`}
        />
        <FAQLink
          anchor={`badges-levels-and-achievements`}
          title={`Badges, Levels and Achievements`}
        />
        <FAQLink anchor={`premium-features`} title={`Premium Features`} />
        <FAQLink anchor={`support-and-contact`} title={`Support and Contact`} />
        <FAQLink anchor={`troubleshooting`} title={`Troubleshooting`} />
      </ul>

      <a id={`general-questions`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        General Questions
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>
        What is <span className={`font-bold`}>fair</span>Dinkum?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        How do I create an account on <span className={`font-bold`}>fair</span>
        Dinkum?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        Is <span className={`font-bold`}>fair</span>
        Dinkum free to use?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />

      <a id={`account-and-profile`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        Account and Profile
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>
        How do I update my profile information?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>How do I update my password?</h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        What should I do if I forget my password?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />

      <a id={`asking-questions-and-spilling-answers`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        Asking Questions and Spilling Answers
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>
        How do I <span className={`font-semibold`}>ask</span> a question?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        How do I <span className={`font-semibold`}>spill</span> an answer to a
        question?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        Can I edit my <span className={`font-semibold`}>asks</span> or{" "}
        <span className={`font-semibold`}>spills</span>?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />

      <a id={`communities`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        Communities
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>What are communities?</h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>How do I join a community?</h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>How do I create a new community?</h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>How do I leave a community?</h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />

      <a id={`privacy-and-security`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        Privacy and Security
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>
        How does <span className={`font-bold`}>fair</span>Dinkum protect my
        privacy?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>How do I join a community?</h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Can I make my <span className={`font-semibold`}>asks</span> and/or{" "}
        <span className={`font-semibold`}>spills</span> private?
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        How do I report inappropriate content or behaviour?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />

      <a id={`badges-levels-and-achievements`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        Badges, Levels and Achievements
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>
        What are badges, levels and achievements?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        How do I earn badges and achievements?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />

      <a id={`premium-features`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        Premium Features
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>
        What premium features does <span className={`font-bold`}>fair</span>
        Dinkum offer?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        How do I subscribe to premium features?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />

      <a id={`support-and-contact`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        Support and Contact
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>
        How do I contact <span className={`font-bold`}>fair</span>Dinkum
        support?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        Where can I find more information about{" "}
        <span className={`font-bold`}>fair</span>Dinkum?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />

      <a id={`troubleshooting`} className={`pb-4`} />
      <div className={`h-20`}></div>
      <h2 className={`mb-2 text-base font-semibold text-accent uppercase`}>
        Troubleshooting
      </h2>
      <h3 className={`p-2 w-full bg-gray`}>Why can't I login to my account?</h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        Why can't I see certain asks or spills?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>

      <h3 className={`p-2 w-full bg-gray`}>
        How do I unsubscribe from email notifications?
      </h3>
      <p className={`mb-8 p-2 pl-4 opacity-50`}>
        Choose an article in the sidebar to get started.
      </p>
      <FAQLink
        anchor={`to-top`}
        title={`Back to Top`}
        makeListItem={false}
        toTop={true}
      />
    </section>
  );
}
