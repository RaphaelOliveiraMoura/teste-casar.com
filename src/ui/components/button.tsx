type ButtonProps = {
  children?: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-primary p-4 text-white"
    >
      {children}
    </button>
  );
}
