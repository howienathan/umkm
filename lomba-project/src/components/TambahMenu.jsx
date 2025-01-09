import { useNavigate } from 'react-router-dom';
import { userRole } from '../utils/Auth';

const TambahMenu = () => {
  const navigate = useNavigate();

  if (userRole !== 'admin') {
    navigate('/Login');
  }

  // kode untuk menambahkan menu
};