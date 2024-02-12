import clsx from "clsx";

const Sectx = ({
  container,
  className: clsName,
  children,
}: {
  container?: { className: string };
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className={container?.className}>
      <div className={clsx("div-center", clsName)}>{children}</div>
    </section>
  );
};

export default Sectx;
