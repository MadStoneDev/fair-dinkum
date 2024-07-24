import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="ml-16 max-w-xl text-sm font-light leading-6 transition-all duration-500 ease-in-out">
      <h1 className={`text-2xl font-bold`}>Terms of Service</h1>
      <h4 className={`mb-8 text-sm text-gray/50 dark:text-light/30`}>
        Effective Date: <span className={`font-bold`}>24.07.2024</span>
      </h4>

      <p className={`mb-8`}>
        Welcome to fairDinkum, operated by MadStoneDev. By accessing or using
        our platform, you agree to be bound by these Terms of Service ("Terms").
        If you do not agree to these Terms, please do not use our platform.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>1. Use of the Platform</h3>

      <p className={`mb-8`}>
        You must be at least 18 years old to use fairDinkum. You agree to
        provide accurate and complete information when creating an account. You
        are responsible for maintaining the confidentiality of your account
        credentials.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>2. Content and Conduct</h3>

      <p className={`mb-8`}>
        You are solely responsible for the content you post on fairDinkum. You
        agree not to post any content that is unlawful, harmful, or violates the
        rights of others. fairDinkum reserves the right to remove any content
        that violates these Terms.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>3. Privacy</h3>

      <p className={`mb-8`}>
        Your privacy is important to us. Please review our Privacy Policy for
        information on how we collect, use, and share your information.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>4. Termination</h3>

      <p className={`mb-8`}>
        fairDinkum reserves the right to suspend or terminate your account at
        any time for any reason, including violation of these Terms.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>5. Changes to the Terms</h3>

      <p className={`mb-8`}>
        We may update these Terms from time to time. Any changes will be posted
        on this page, and your continued use of the platform constitutes
        acceptance of the revised Terms.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>6. Contact Us</h3>

      <p className={`mb-8`}>
        If you have any questions about these Terms, please contact us via our
        <Link
          href={"/help-center/support/contact-us"}
          className={`p-1 text-accent hover:bg-accent hover:text-white transition-all duration-500 ease-in-out`}
        >
          contact form
        </Link>
        .
      </p>
    </main>
  );
}
