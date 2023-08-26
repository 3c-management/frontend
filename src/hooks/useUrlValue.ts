import { useLocation } from 'react-router-dom';

function useUrlValue() {
  const location = useLocation();
  const segments = location.pathname.split('/');
  let urlValue = segments[segments.length - 1];
    if(urlValue === ""){
        urlValue = 'dashboard';
    }
  return urlValue;
}

export default useUrlValue;
