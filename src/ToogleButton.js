export function ToogleButton({ children, onClick }) {
  return (
    <button className="btn-toggle" onClick={onClick}>
      {children}
    </button>
  );
}
