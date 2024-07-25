import Link from "next/link";

export default function Info() {
  return (
    <main className="ml-0 md:ml-16 max-w-xl text-sm font-light leading-6 transition-all duration-500 ease-in-out">
      <h1 className={`text-2xl font-bold`}>About fairDinkum</h1>
      <p className={`mb-8`}>
        Welcome to fairDinkum, the ultimate platform where curiosity meets
        community! Born and bred in Australia, fairDinkum is designed to foster
        genuine conversations and connections through the power of questions.
        Whether you're looking to satisfy your curiosity, seek advice, or share
        your knowledge, fairDinkum is the place to be.
      </p>
      <h3 className={`mb-3 text-base font-bold`}>Our Mission</h3>
      <p className={`mb-8`}>
        At fairDinkum, we believe in the value of authentic interactions. Our
        mission is to create a safe, inclusive, and engaging environment where
        users can ask and answer questions without fear of judgment. We aim to
        promote learning, foster connections, and build a community that thrives
        on mutual respect and curiosity.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>Privacy First</h3>
      <p className={`mb-8`}>
        Your privacy is our top priority. We never ask for your personal
        information such as your name, age, or gender, ensuring that your
        identity remains confidential. Our platform is built with robust
        security measures to protect your data, and we provide comprehensive
        settings to help you manage your privacy preferences.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>Community Guidelines</h3>
      <p className={`mb-8`}>
        fairDinkum is a fair place for all. Our community guidelines ensure that
        interactions remain respectful, relevant, and safe. We have a
        zero-tolerance policy towards harassment, bullying, and inappropriate
        content. With features to filter NSFW and profanity-laden posts, we
        strive to maintain a positive atmosphere for all users.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>Features</h3>
      <p className={`mb-8`}>
        fairDinkum offers a unique blend of features tailored to enhance your
        experience. From customizable AI-generated questions based on your
        interests to vibrant communities where you can engage in meaningful
        discussions, we've got it all. Our platform also includes advanced
        search filters, priority question placement, and detailed analytics to
        help you make the most of your time here.
      </p>

      <h3 className={`mb-3 text-base font-bold`}>Join the Conversation</h3>
      <p className={`mb-8`}>
        Dive into fairDinkum and discover a world of questions waiting to be
        answered. Whether you're here to learn something new, share your
        expertise, or simply explore, you'll find a welcoming community ready to
        engage with you. Join us today and become a part of the fairDinkum
        family!
      </p>
    </main>
  );
}
