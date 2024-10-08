import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
      }}
    />
  );
};

export default Loader;
