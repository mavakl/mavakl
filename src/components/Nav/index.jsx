import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
	return (
		<nav className={Styles.nav}>
			<a className={Styles.logolink} href="/">
				<div className={Styles.monogram}>GK</div>
			</a>
			<a className={Styles.link} href="/projects">
				Angebote
			</a>
			<a className={Styles.link} href="/about">
				Wo & Wann
			</a>
		</nav>
	);
}
export default Nav;
