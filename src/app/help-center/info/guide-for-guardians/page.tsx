import Link from "next/link";

export default function GuideForGuardians() {
  return (
    <main className="ml-16 max-w-xl text-sm font-light leading-6 transition-all duration-500 ease-in-out">
      <h1 className={`text-2xl font-bold`}>fairDinkum Community Guidelines</h1>

      <p className={`mb-8`}>
        Welcome to fairDinkum! This guide is designed to help guardians
        understand how to ensure a safe and positive experience for younger
        users.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>1. Age Restrictions</h3>

      <p className={`mb-8`}>
        fairDinkum is intended for users aged 13 and above. Users under 13 are
        not permitted to create an account.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>2. Privacy and Safety</h3>

      <p className={`mb-8`}>
        fairDinkum prioritizes user privacy. Personal information such as name,
        age, and gender is not required and should not be shared. All data is
        stored securely.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>
        3. NSFW and Profanity Filters
      </h3>

      <p className={`mb-8`}>
        The platform includes settings to filter out NSFW (Not Safe For Work)
        and profanity content. Users under 21 will not see NSFW content at all,
        while those above 21 will have the option to blur and label such
        content.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>
        4. Reporting and Moderation
      </h3>

      <p className={`mb-8`}>
        Encourage users to report any inappropriate content or behavior. Our
        moderators review reports and take appropriate action to maintain a safe
        environment.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>5. Community Engagement</h3>

      <p className={`mb-8`}>
        fairDinkum fosters a positive community where users can ask and answer
        questions. Encourage users to participate respectfully and responsibly.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>6. Monitoring Usage</h3>

      <p className={`mb-8`}>
        Guardians are encouraged to monitor their ward’s use of fairDinkum.
        Discuss the importance of online safety and respectful behavior.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>
        7. Educational Opportunities
      </h3>

      <p className={`mb-8`}>
        fairDinkum can be a great platform for learning and sharing knowledge.
        Encourage users to explore topics of interest and engage in meaningful
        discussions.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>8. Contact Support</h3>

      <p className={`mb-8`}>
        If you have any concerns or need assistance, please contact our support
        team via our
        <Link
          href={"/help-center/support/contact-us"}
          className={`p-1 text-accent hover:bg-accent hover:text-white transition-all duration-500 ease-in-out`}
        >
          contact form
        </Link>
        .
      </p>

      <h3 className={`mb-3 text-base font-bold`}>Tips for Guardians:</h3>

      <ul className={`mb-8`}>
        <li className={`mb-2`}>
          <span className={`font-medium`}>Discuss Online Safety:</span> Talk to
          your ward about the importance of not sharing personal information and
          recognizing inappropriate content.
        </li>
        <li className={`mb-2`}>
          <span className={`font-medium`}>Set Usage Limits:</span> Consider
          setting time limits on the use of fairDinkum to ensure balanced online
          activity.
        </li>
        <li className={`mb-2`}>
          <span className={`font-medium`}>Encourage Positive Interaction:</span>{" "}
          Encourage respectful and constructive participation in the community.
        </li>
        <li className={`mb-2`}>
          <span className={`font-medium`}>Stay Informed:</span> Regularly review
          the platform’s features and settings to stay informed about updates
          and changes.
        </li>
      </ul>

      <p className={`mb-8`}>
        By following these guidelines and tips, guardians can help ensure that
        fairDinkum is a positive and safe space for all users.
      </p>
    </main>
  );
}
