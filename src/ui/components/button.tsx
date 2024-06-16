import { cn } from "../services/classname";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Button({ children, className }: Readonly<ButtonProps>) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center gap-2 bg-primary p-6 text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
