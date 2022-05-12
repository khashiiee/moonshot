function Button({ children, ...props }) {
  return (
    <button
      className="h-10 px-4 bg-violet-800 text-slate-100 rounded-full font-semibold rounded-md border border-slate-200 text-slate-900"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
