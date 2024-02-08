import classNames from "classnames";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return <div className={classNames("max-w-[120rem] mx-auto px-8", className)}>{children}</div>;
};
