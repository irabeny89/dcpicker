import { FC } from "react"

const Layout: FC = ({ children }) => (
	<div>
		<header className="bg-primary text-white p-1 font-italic">
			<h1>DC</h1>
		</header>
		<main className="p-2" style={{
			minHeight: "100vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		}}>{children}</main>
		<footer className="bg-secondary text-white pl-1">&copy; 2021</footer>
	</div>
)

export default Layout