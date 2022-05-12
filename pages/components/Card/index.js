function Card({ children, ...props }) {
  return (
    <div
      className="bg-white w-85 h-30 p-2 shadow rounded-lg  border cursor-pointer"
      {...props}
    >
      {children}
    </div>
  );
}
export default Card;
