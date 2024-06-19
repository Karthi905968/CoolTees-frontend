import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedCart = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      alert('Please Login to View Cart');
      navigate('/signup');
    }
  }, [token, navigate]);

  return token ? <>{children} </> : null;
};

export default ProtectedCart;
