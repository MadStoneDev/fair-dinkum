export default function HomeCard({
  children,
  className,
  styles,
}: {
  children?: any;
  className?: string;
  styles?: any;
}) {
  return (
    <article
      className={`min-w-[400px] bg-light rounded-[2rem]`}
      style={{
        aspectRatio: "3/4",
        ...styles,
      }}
    >
      {children}
    </article>
  );
}
