import s from './Footer.module.scss'
import {Link} from "react-router-dom";

export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <span className={s.phone}>+372 5555 6666</span>
                <span className={s.email}>housepizza@pizza.eu</span>
                <div className={s.bottom}>
                    <div className={s.info}>
                        <span className={s.logo}>house pizza</span>
                        <span className={s.copyright}>© 2023</span>
                        <Link to={"/privacy"} className={s.privacy}>
                            Privacy policy
                        </Link>
                    </div>
                    <div className={s.social}>

                    </div>
                </div>
            </div>
        </footer>
    )
}