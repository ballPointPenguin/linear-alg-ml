import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
	return (
		<div style={{ display: "flex", minHeight: "100vh" }}>
			<aside
				style={{
					width: 260,
					background: "#f8f9fa",
					padding: "1.5rem 1rem",
					borderRight: "1px solid #eee",
				}}
			>
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
										<NavLink to="/unit-circle">Unit Circle</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink to="/sine-cosine">Sine & Cosine</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink to="/sine-cosine-interactive">
											Sine & Cosine Interactive
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink to="/tangent-explorer">Tangent Explorer</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink to="/right-triangle-playground">
											Right Triangle Playground
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink to="/mafs-hello">Mafs Hello</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink to="/mafs-unit-circle-sine">
											Unit Circle → Sine Wave
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink to="/mafs-trig-functions">
											Trig Functions Explorer
										</NavLink>
									</NavigationMenu.Link>
									<NavigationMenu.Link asChild>
										<NavLink to="/trig-functions">
											Trig Functions (Static)
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
										<NavLink to="/vector-addition">Vector Addition</NavLink>
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
										<NavLink to="/p5-demo">P5 Demo</NavLink>
									</NavigationMenu.Link>
								</nav>
							</NavigationMenu.Content>
						</NavigationMenu.Item>
						{/* Home Link */}
						<NavigationMenu.Item>
							<NavigationMenu.Link asChild>
								<NavLink to="/">Home</NavLink>
							</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</aside>
			<main style={{ flex: 1, padding: "2rem 2.5rem" }}>{children}</main>
		</div>
	);
}
