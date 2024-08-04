import Link from "next/link";

export default function CookiePolicy() {
  return (
    <section className="ml-0 md:ml-16 max-w-xl text-sm font-light leading-6 transition-all duration-500 ease-in-out">
      <h1 className={`text-2xl font-bold`}>Cookies Policy</h1>
      <h4 className={`mb-8 text-sm text-gray/50 dark:text-light/30`}>
        Effective Date: <span className={`font-bold`}>24.07.2024</span>
      </h4>

      <p className={`mb-8`}>
        MadStoneDev ("we," "us," or "our") uses cookies on fairDinkum to enhance
        your experience. This Cookies Policy explains what cookies are, how we
        use them, and your choices regarding cookies.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>1. What Are Cookies?</h3>

      <p className={`mb-8`}>
        Cookies are small text files placed on your device when you visit a
        website. They help the website recognize your device and remember your
        preferences.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>2. How We Use Cookies</h3>

      <p className={`mb-8`}>
        We use cookies to improve the functionality of fairDinkum, such as
        keeping you logged in and remembering your preferences. We may use
        analytics cookies to understand how you use our platform and to improve
        its performance.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>3. Your Choices</h3>

      <p className={`mb-8`}>
        Most web browsers allow you to control cookies through their settings.
        You can choose to block cookies or delete them. Please note that
        disabling cookies may affect the functionality of fairDinkum.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>
        4. Changes to This Cookies Policy
      </h3>

      <p className={`mb-8`}>
        We may update this Cookies Policy from time to time. Any changes will be
        posted on this page, and your continued use of the platform constitutes
        acceptance of the revised Cookies Policy.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>5. Contact Us</h3>

      <p className={`mb-8`}>
        If you have any questions about this Cookies Policy, please contact us
        via our
        <Link
          href={"/help-center/support/contact-us"}
          className={`p-1 text-accent hover:bg-accent hover:text-white transition-all duration-500 ease-in-out`}
        >
          contact form
        </Link>
        .
      </p>
    </section>
  );
}
