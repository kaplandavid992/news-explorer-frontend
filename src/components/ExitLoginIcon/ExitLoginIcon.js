import { Link } from 'react-router-dom';
import './ExitLoginIcon.css';

function ExitLoginIcon({theme}) {
  const color = theme === 'light' ? '#1A1B22' : '#ffffff';
  return (
    <Link to='/'>
    <svg  
      className="exit-login-icon"
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2L2 2L2 14H6V16H2C0.89543 16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 14.4958L17.4141 8.03706L10.707 1.57837L9.29274 2.9402L13.5856 7.0741H4V9.00002H13.5856Z"
        fill={color}
      />
    </svg>
    </Link>
  );
}

export default ExitLoginIcon;
