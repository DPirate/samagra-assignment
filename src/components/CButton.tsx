export const Button = ({ title = 'Click Me!', onClick = () => {} }) => (
  <button type="button" onClick={onClick}>
    {title}
  </button>
);
