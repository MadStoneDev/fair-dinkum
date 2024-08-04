import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <section className="ml-0 md:ml-16 max-w-xl text-sm font-light leading-6 transition-all duration-500 ease-in-out">
      <h1 className={`text-2xl font-bold`}>Privacy Policy</h1>
      <h4 className={`mb-8 text-sm text-gray/50 dark:text-light/30`}>
        Effective Date: <span className={`font-bold`}>24.07.2024</span>
      </h4>
      <p className={`mb-8`}>
        MadStoneDev ("we," "us," or "our") operates fairDinkum. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        information when you use our platform.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>1. Information We Collect</h3>
      <p className={`mb-8`}>
        We may collect personal information, such as your email address, when
        you create an account. We may collect non-personal information, such as
        usage data, to improve our platform.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>
        2. How We Use Your Information
      </h3>
      <p className={`mb-8`}>
        We use your information to provide and improve fairDinkum. We may use
        your information to communicate with you about updates, promotions, and
        other news.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>
        3. Sharing Your Information
      </h3>
      <p className={`mb-8`}>
        We do not share your personal information with third parties except as
        necessary to provide the platform or as required by law.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>4. Your Choices</h3>
      <p className={`mb-8`}>
        You can update your account information at any time. You can delete your
        account by contacting us via our
        <Link
          href={"/help-center/support/contact-us"}
          className={`p-1 text-accent hover:bg-accent hover:text-white transition-all duration-500 ease-in-out`}
        >
          contact form
        </Link>
        .
      </p>
      <h3 className={`mb-3 text-base font-bold`}>5. Security</h3>
      <p className={`mb-8`}>
        We take reasonable measures to protect your information from
        unauthorized access, use, or disclosure.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>
        6. Changes to This Privacy Policy
      </h3>
      <p className={`mb-8`}>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and your continued use of the platform constitutes
        acceptance of the revised Privacy Policy.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>7. Contact Us</h3>
      <p className={`mb-8`}>
        If you have any questions about this Privacy Policy, please contact us
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
