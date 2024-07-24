import Link from "next/link";

export default function Guidelines() {
  return (
    <main className="ml-16 max-w-xl text-sm font-light leading-6 transition-all duration-500 ease-in-out">
      <h1 className={`mb-8 text-2xl font-bold`}>
        fairDinkum Community Guidelines
      </h1>

      <h3 className={`mb-3 text-base font-bold`}>1. Be Respectful</h3>

      <p className={`mb-8`}>
        Treat all members with kindness and respect. Personal attacks,
        harassment, or bullying will not be tolerated.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>2. Keep it Clean</h3>

      <p className={`mb-8`}>
        Avoid posting content that is obscene, offensive, or inappropriate.
        Swearing and profanity will be censored, and NSFW content must be
        appropriately labeled.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>3. Protect Privacy</h3>

      <p className={`mb-8`}>
        Do not share personal information about yourself or others. fairDinkum
        is committed to maintaining user privacy.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>4. Stay on Topic</h3>

      <p className={`mb-8`}>
        Ensure your questions and answers are relevant to the topic at hand.
        Off-topic content may be removed.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>5. No Spam</h3>

      <p className={`mb-8`}>
        Do not post spam or promotional content. This includes repetitive posts
        or advertisements.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>6. Report Violations</h3>

      <p className={`mb-8`}>
        If you encounter content that violates these guidelines, report it to
        the moderators. Help us maintain a safe and friendly community.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>7. Follow the Law</h3>

      <p className={`mb-8`}>
        Do not post content that is illegal or encourages illegal activities.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>
        8. Use Appropriate Language
      </h3>

      <p className={`mb-8`}>
        Language should be appropriate for all ages. NSFW and profanity content
        must be clearly labeled and will be filtered based on user settings.
      </p>
    </main>
  );
}
