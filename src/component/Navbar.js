import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
  return (
    <div>
      <div>
        <div className='login-button'>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div> 
      </div>
      <div className='nav-section'>
        <img width={100} src="data:image/png;base64,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"/>
      </div>
      <div className='menu-area'>
          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        <div className='search'>
          <FontAwesomeIcon icon={faSearch} />
          <input type='text' />
        </div>
      </div>
    </div>
  )
}

export default Navbar