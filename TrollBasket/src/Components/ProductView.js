import React from "react";
import "./../styles/ProductView.css";
import { useStateValue } from "./../ContextAPI/StateProvider";
import ViewTemplate from "./ViewTemplate";
import { Link } from "react-router-dom";


function ProductView() {
  const [{view, basket}, dispatch] = useStateValue();

  const emptyView = () => {
    dispatch({
      type: "EMPTY_VIEW",
    });
  };

  return (
      <div>
            <div className="productView__menu">
                <Link to="/" className="productView__left" onClick={emptyView}>
                    <svg width="8" height="100%" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="#0B0C0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <h4 className="productView__middle">Details</h4>
                <div className="productView__right">
                    <span className="productView__right--search">
                        <svg width="20" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3333 11.3333L14.6666 14.6667L11.3333 11.3333ZM13 7.16668C13 10.3883 10.3883 13 7.16665 13C3.94499 13 1.33331 10.3883 1.33331 7.16668C1.33331 3.94502 3.94499 1.33334 7.16665 1.33334C10.3883 1.33334 13 3.94502 13 7.16668Z" stroke="#2E4457" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <Link to="/checkout" className="productView__right--cart" onClick={emptyView}>
                        <svg width="20" height="100%" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.95086 11.6052C4.50376 11.6052 4.95675 12.0678 4.95675 12.6393C4.95675 13.204 4.50376 13.6666 3.95086 13.6666C3.3913 13.6666 2.93832 13.204 2.93832 12.6393C2.93832 12.0678 3.3913 11.6052 3.95086 11.6052ZM11.445 11.6052C11.9979 11.6052 12.4509 12.0678 12.4509 12.6393C12.4509 13.204 11.9979 13.6666 11.445 13.6666C10.8855 13.6666 10.4325 13.204 10.4325 12.6393C10.4325 12.0678 10.8855 11.6052 11.445 11.6052ZM0.852138 0.333393L0.920025 0.339139L2.50879 0.58338C2.73528 0.624881 2.90181 0.814696 2.9218 1.04601L3.04837 2.56997C3.06835 2.78836 3.24155 2.95164 3.45472 2.95164H12.451C12.8574 2.95164 13.1238 3.09451 13.3903 3.40747C13.6568 3.72043 13.7034 4.16945 13.6434 4.57697L13.0106 9.04C12.8907 9.89791 12.1713 10.5299 11.3252 10.5299H4.05758C3.1716 10.5299 2.43884 9.83668 2.36556 8.93863L1.75271 1.52225L0.746826 1.34536C0.480367 1.29774 0.293846 1.0324 0.340476 0.760269C0.387107 0.48201 0.646904 0.297638 0.920025 0.339139L0.852138 0.333393ZM10.2594 5.46822H8.41418C8.1344 5.46822 7.91457 5.69273 7.91457 5.97847C7.91457 6.25741 8.1344 6.48873 8.41418 6.48873H10.2594C10.5392 6.48873 10.759 6.25741 10.759 5.97847C10.759 5.69273 10.5392 5.46822 10.2594 5.46822Z" fill="#2E4457"/>
                        </svg>
                    <span className="productView__right--number">{basket?.length}</span>
                    </Link>
                </div>
            </div>
            {view?.length === 0 ? (
            <h2>No item to view</h2>
            ) : (
                <div>
                    {view.map((item) => (
                    <ViewTemplate
                        id={item.id}
                        title={item.title}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        key={item.id}
                    />
                    ))}
                </div>
            )}
    </div>
  );
}

export default ProductView;