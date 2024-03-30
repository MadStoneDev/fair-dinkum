interface AvatarProps {
  imageUrl?: string;
  size?: number;
}

export default function Avatar({
  imageUrl = "https://randomuser.me/api/portraits/women/76.jpg",
  size = 50,
}: AvatarProps) {
  return (
    <article
      className={`group cursor-pointer relative grid place-content-center`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {" "}
      <section
        className={`absolute w-[90.55%] h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-neutral-900 z-10`}
        style={{
          clipPath: `url(#avatar-clip-border)`,
        }}
      >
        <div
          className={`absolute left-0 top-full group-hover:top-0 w-full h-full bg-amber-500 transition-all duration-500`}
        ></div>
      </section>
      <section
        className={`absolute w-[73.16%] h-[80%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-cover bg-center bg-no-repeat z-10`}
        style={{
          clipPath: `url(#avatar-clip-path)`,
          backgroundImage: `url("${imageUrl}")`,
        }}
      ></section>
      <AvatarBorder />
      <AvatarClip />
    </article>
  );
}

const AvatarClip = () => {
  return (
    <svg
      width={0}
      height={0}
      className={`w-full h-full`}
      viewBox={`0 0 73.16 80`}
    >
      <defs>
        <clipPath id={`avatar-clip-path`} clipPathUnits={`objectBoundingBox`}>
          <path
            d="M73.16 55.04V24.95a9.77 9.77 0 0 0-4.95-8.49L41.39 1.27a9.76 9.76 0 0 0-9.62 0L4.95 16.47A9.746 9.746 0 0 0 0 24.96v30.09a9.77 9.77 0 0 0 4.95 8.49l26.83 15.2a9.76 9.76 0 0 0 9.62 0l26.83-15.2a9.746 9.746 0 0 0 4.95-8.49Z"
            transform={`scale(0.01367, 0.0125)`}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const AvatarBorder = () => {
  return (
    <svg
      width={0}
      height={0}
      className={`w-full h-full`}
      viewBox={`0 0 90.55 100`}
    >
      <defs>
        <clipPath id={`avatar-clip-border`} clipPathUnits={`objectBoundingBox`}>
          <path
            d="M85.62 21.4 50.08 1.27a9.723 9.723 0 0 0-9.6 0L4.94 21.4A9.737 9.737 0 0 0 0 29.87v40.25c0 3.51 1.89 6.74 4.94 8.47l35.54 20.14a9.723 9.723 0 0 0 9.6 0l35.54-20.14a9.737 9.737 0 0 0 4.94-8.47V29.88c0-3.51-1.89-6.74-4.94-8.47Zm-.91 47.02c0 2.45-1.32 4.72-3.46 5.93L48.63 92.83a6.82 6.82 0 0 1-6.72 0L9.29 74.35a6.816 6.816 0 0 1-3.46-5.93V31.58c0-2.45 1.32-4.72 3.46-5.93L41.92 7.16a6.82 6.82 0 0 1 6.72 0l32.62 18.48a6.816 6.816 0 0 1 3.46 5.93v36.84Z"
            transform={`scale(0.011, 0.01)`}
          />
        </clipPath>
      </defs>
    </svg>
  );
};
