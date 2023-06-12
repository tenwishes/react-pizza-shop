import {Link, useLocation} from "react-router-dom";
import {Search} from "../Search/Search";
import s from './Header.module.scss'
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {logo} from "../../assets/icons";
import {selectCart} from "../../redux/cart/selector";

export function Header() {
    const location = useLocation();
    const {totalCount, totalPrice,} = useSelector(selectCart)
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to="/">
                    <div className={s.logo}>
                        <img src={logo} alt="logo"/>
                        <h1>house pizza</h1>
                    </div>
                </Link>
                {location.pathname === '/' && <Search/>}
                {location.pathname !== '/cart' && (
                    <Link to="/cart">
                        <button className={s.cart}>
                            <span className={s.price}>{totalPrice} €</span>
                            <div className={s.delimiter}></div>
                            <svg
                                className={s.icon}
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.689 3.00004C17.4298 2.73303 17.0759 2.57904 16.7039 2.57147H3.6406L3.46928 1.11433C3.42755 0.803848 3.27396 0.519291 3.03736 0.314113C2.80076 0.108936 2.49744 -0.0027443 2.18436 5.12394e-05H0.856612C0.629424 5.12394e-05 0.411542 0.0903568 0.250896 0.251102C0.0902499 0.411847 0 0.629864 0 0.857192C0 1.08452 0.0902499 1.30254 0.250896 1.46328C0.411542 1.62403 0.629424 1.71433 0.856612 1.71433H1.79889L3.16946 13.2429C2.7899 13.4671 2.47556 13.7869 2.25767 14.1703C2.03978 14.5537 1.92591 14.9875 1.92738 15.4286C1.92738 16.1106 2.19813 16.7646 2.68006 17.2468C3.162 17.7291 3.81565 18 4.49721 18C5.0289 17.9917 5.54585 17.8238 5.98112 17.5182C6.41639 17.2126 6.74994 16.7832 6.93856 16.2857H11.4786C11.6672 16.7832 12.0008 17.2126 12.436 17.5182C12.8713 17.8238 13.3883 17.9917 13.9199 18C14.6015 18 15.2552 17.7291 15.7371 17.2468C16.219 16.7646 16.4898 16.1106 16.4898 15.4286C16.4898 14.7466 16.219 14.0925 15.7371 13.6103C15.2552 13.1281 14.6015 12.8572 13.9199 12.8572C13.3883 12.8655 12.8713 13.0333 12.436 13.339C12.0008 13.6446 11.6672 14.074 11.4786 14.5714H6.93856C6.77649 14.1265 6.49476 13.7349 6.12443 13.44C5.75411 13.1451 5.30958 12.9582 4.83986 12.9L4.7542 12H15.5903C15.896 11.9925 16.189 11.8762 16.4167 11.672C16.6443 11.4678 16.7917 11.189 16.8324 10.8857L17.9889 4.11433C18.0367 3.71808 17.9293 3.31868 17.689 3.00004ZM14.7766 15.4286C14.7766 15.5981 14.7263 15.7638 14.6322 15.9048C14.5381 16.0457 14.4043 16.1556 14.2478 16.2205C14.0912 16.2853 13.919 16.3023 13.7528 16.2692C13.5867 16.2362 13.434 16.1545 13.3142 16.0347C13.1944 15.9148 13.1128 15.7621 13.0798 15.5958C13.0467 15.4295 13.0637 15.2572 13.1285 15.1006C13.1934 14.9439 13.3032 14.8101 13.444 14.7159C13.5849 14.6217 13.7505 14.5714 13.9199 14.5714C14.1471 14.5714 14.365 14.6617 14.5257 14.8225C14.6863 14.9832 14.7766 15.2013 14.7766 15.4286ZM5.35383 15.4286C5.35383 15.5981 5.30359 15.7638 5.20946 15.9048C5.11533 16.0457 4.98155 16.1556 4.82502 16.2205C4.6685 16.2853 4.49626 16.3023 4.3301 16.2692C4.16393 16.2362 4.0113 16.1545 3.8915 16.0347C3.7717 15.9148 3.69011 15.7621 3.65706 15.5958C3.62401 15.4295 3.64097 15.2572 3.70581 15.1006C3.77064 14.9439 3.88044 14.8101 4.02131 14.7159C4.16217 14.6217 4.32779 14.5714 4.49721 14.5714C4.7244 14.5714 4.94228 14.6617 5.10293 14.8225C5.26358 14.9832 5.35383 15.2013 5.35383 15.4286ZM15.2049 10.2857H4.54004L3.85475 4.28575H16.19L15.2049 10.2857Z"
                                    fill="white"/>
                            </svg>
                            <span className={s.total}>{totalCount}</span>
                        </button>
                    </Link>
                )
                }
            </div>
        </header>
    )
}