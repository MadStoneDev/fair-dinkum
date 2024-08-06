"use client";

export default function FAQLink({
  anchor,
  title,
  makeListItem = true,
  toTop = false,
}: {
  anchor: string;
  title: string;
  makeListItem?: boolean;
  toTop?: boolean;
}) {
  // Functions
  // Functions
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAnchor = (anchor: string) => {
    const element = document.getElementById(anchor);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return makeListItem ? (
    <li
      className={`cursor-pointer border-b border-accent w-fit hover:bg-accent transition-all duration-500 ease-in-out`}
      onClick={(e) => {
        e.preventDefault();
        scrollToAnchor(anchor);
      }}
    >
      {title}
    </li>
  ) : (
    <div
      className={`cursor-pointer px-1 border-b border-accent w-fit hover:bg-accent text-xs float-right transition-all duration-500 ease-in-out`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      {title}
    </div>
  );
}
