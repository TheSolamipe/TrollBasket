import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";

import { useStateValue } from "./../ContextAPI/StateProvider";

function Header() {
  const [{ basket, user }] = useStateValue();


  return (
    <nav className="header">
      {/* logo on left */}
      <Link to="/">
        <h2 className="header__logo">Trollbasket</h2>
      </Link>
      

      {/* 3 links */}
      <div className="header__nav">
        <Link to={!user && "/location"} className="header__link">
          <div className="header__option">
            <span className="header__option1">
              <svg width="18" height="100%" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.95999 10.164C11.0103 9.11313 11.6003 7.68817 11.6003 6.2024C11.6003 4.71663 11.0103 3.29167 9.95999 2.2408C9.44008 1.72054 8.82275 1.30783 8.14328 1.02625C7.4638 0.744663 6.7355 0.599731 5.99999 0.599731C5.26448 0.599731 4.53618 0.744663 3.8567 1.02625C3.17723 1.30783 2.5599 1.72054 2.03999 2.2408C0.989664 3.29167 0.399643 4.71663 0.399643 6.2024C0.399643 7.68817 0.989664 9.11313 2.03999 10.164L3.25679 11.3632L4.89119 12.9512L4.99759 13.0456C5.61759 13.548 6.52559 13.516 7.10959 12.9512L9.05759 11.0552L9.95999 10.164ZM5.99999 8.6C5.36347 8.6 4.75302 8.34714 4.30293 7.89706C3.85285 7.44697 3.59999 6.83652 3.59999 6.2C3.59999 5.56348 3.85285 4.95303 4.30293 4.50294C4.75302 4.05286 5.36347 3.8 5.99999 3.8C6.63651 3.8 7.24696 4.05286 7.69705 4.50294C8.14713 4.95303 8.39999 5.56348 8.39999 6.2C8.39999 6.83652 8.14713 7.44697 7.69705 7.89706C7.24696 8.34714 6.63651 8.6 5.99999 8.6Z" fill="#227EFF"/>
              </svg>
            </span>
            <span className="header__option2">
              Lagos
            </span>
          </div>
        </Link>
        <Link to="/orders" className="header__link">
          <div className="header__option bord">
            <span className="header__option1">
              <svg width="18" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.41333 1.33333H10.58L9.95333 0.666667H1.95333L1.41333 1.33333ZM11.6933 1.48667C11.8867 1.71333 12 2 12 2.33333V10.6667C12 11.0203 11.8595 11.3594 11.6095 11.6095C11.3594 11.8595 11.0203 12 10.6667 12H1.33333C0.979711 12 0.640573 11.8595 0.390524 11.6095C0.140476 11.3594 0 11.0203 0 10.6667V2.33333C0 2 0.113333 1.71333 0.306667 1.48667L1.22667 0.366667C1.41333 0.14 1.68667 0 2 0H10C10.3133 0 10.5867 0.14 10.7667 0.366667L11.6933 1.48667ZM2 10H6V8H2V10Z" fill="#7E42F5"/>
              </svg>
            </span>
            <span className="header__option2">My Orders</span>
          </div>
        </Link>

        {/* Basket icon */}
        <Link to="/checkout" className="header__link">
          <div className="header__option">
            <span className="header__option1 header__optionBasket--count ">
              <svg width="18" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.95086 11.6052C4.50376 11.6052 4.95675 12.0678 4.95675 12.6393C4.95675 13.204 4.50376 13.6666 3.95086 13.6666C3.3913 13.6666 2.93832 13.204 2.93832 12.6393C2.93832 12.0678 3.3913 11.6052 3.95086 11.6052ZM11.445 11.6052C11.9979 11.6052 12.4509 12.0678 12.4509 12.6393C12.4509 13.204 11.9979 13.6666 11.445 13.6666C10.8855 13.6666 10.4325 13.204 10.4325 12.6393C10.4325 12.0678 10.8855 11.6052 11.445 11.6052ZM0.852138 0.333393L0.920025 0.339139L2.50879 0.58338C2.73528 0.624881 2.90181 0.814696 2.9218 1.04601L3.04837 2.56997C3.06835 2.78836 3.24155 2.95164 3.45472 2.95164H12.451C12.8574 2.95164 13.1238 3.09451 13.3903 3.40747C13.6568 3.72043 13.7034 4.16945 13.6434 4.57697L13.0106 9.04C12.8907 9.89791 12.1713 10.5299 11.3252 10.5299H4.05758C3.1716 10.5299 2.43884 9.83668 2.36556 8.93863L1.75271 1.52225L0.746826 1.34536C0.480367 1.29774 0.293846 1.0324 0.340476 0.760269C0.387107 0.48201 0.646904 0.297638 0.920025 0.339139L0.852138 0.333393ZM10.2594 5.46822H8.41418C8.1344 5.46822 7.91457 5.69273 7.91457 5.97847C7.91457 6.25741 8.1344 6.48873 8.41418 6.48873H10.2594C10.5392 6.48873 10.759 6.25741 10.759 5.97847C10.759 5.69273 10.5392 5.46822 10.2594 5.46822Z" fill="#2E4457"/>
              </svg>
            </span>
            <span className="header__basket">{basket?.length}</span>
            <span className="header__option2">Cart</span>
          </div>
        </Link>
      </div>

      {/* search box */}
      <div className="header__search">
        <input type="text" placeholder="Search merchbuy" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" width="18" height="100%"/>
      </div>
    </nav>
  );
}

export default Header;
