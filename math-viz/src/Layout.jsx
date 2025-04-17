import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import { NavLink } from "react-router-dom";
import { theme } from "./theme.css.ts";
import "./App.css";

export default function Layout({ children }) {
	return (
		<div
			className={`${theme} mainBg`}
			style={{ display: "flex", minHeight: "100vh" }}
		>
			<aside className="sidebar">
				<NavigationMenu.Root orientation="vertical" className="SidebarNavRoot">
					<NavigationMenu.List className="SidebarNavList">
						{/* Trigonometry Group */}
						<NavigationMenu.Item>
							<NavigationMenu.Trigger className="SidebarNavTrigger">
								Trigonometry <CaretDownIcon style={{ marginLeft: 4 }} />
							</NavigationMenu.Trigger>
							<NavigationMenu.Content className="SidebarNavContent">
								<nav
									style={{ display: "flex", flexDirection: "column", gap: 8 }}
								>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/unit-circle"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Unit Circle
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/sine-cosine"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Sine & Cosine
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/sine-cosine-interactive"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Sine & Cosine Interactive
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/tangent-explorer"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Tangent Explorer
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/right-triangle-playground"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Right Triangle Playground
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/mafs-unit-circle-sine"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Unit Circle → Sine Wave
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/mafs-trig-functions"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Trig Functions Explorer
										</NavLink>
									</NavigationMenu.Link>
								</nav>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						{/* Linear Algebra Group */}
						<NavigationMenu.Item>
							<NavigationMenu.Trigger className="SidebarNavTrigger">
								Linear Algebra <CaretDownIcon style={{ marginLeft: 4 }} />
							</NavigationMenu.Trigger>
							<NavigationMenu.Content className="SidebarNavContent">
								<nav
									style={{ display: "flex", flexDirection: "column", gap: 8 }}
								>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/vector-addition"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Vector Addition
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/vector-operations"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Vector Operations
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/cosine-dot-product"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Cosine & Dot Product
										</NavLink>
									</NavigationMenu.Link>
								</nav>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						{/* Demos & Utilities Group */}
						<NavigationMenu.Item>
							<NavigationMenu.Trigger className="SidebarNavTrigger">
								Demos & Utilities <CaretDownIcon style={{ marginLeft: 4 }} />
							</NavigationMenu.Trigger>
							<NavigationMenu.Content className="SidebarNavContent">
								<nav
									style={{ display: "flex", flexDirection: "column", gap: 8 }}
								>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/p5-demo"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											P5 Demo
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink
											to="/mafs-hello"
											className={({ isActive }) =>
												isActive ? "navLink activeNavLink" : "navLink"
											}
										>
											Mafs Hello
										</NavLink>
									</NavigationMenu.Link>
								</nav>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						{/* Home Link */}
						<NavigationMenu.Item>
							<NavigationMenu.Link asChild>
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? "navLink activeNavLink" : "navLink"
									}
								>
									Home
								</NavLink>
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</aside>
			<main style={{ flex: 1, padding: "2rem 2.5rem" }}>{children}</main>
		</div>
	);
}
