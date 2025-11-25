const PrimaryBtn = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-primary ${className}`}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
