/** @format */

interface ButtonProps {
  children: string;
  color?: 'primary' | 'dark' | 'danger';
  onClick: () => void;
}

const Button = ({ children, color = 'primary', onClick }: ButtonProps) => {
  return (
    <>
      <button type='button' className={'btn btn-' + color} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
