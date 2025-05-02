import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
	{ name: "Beneficios", href: "#beneficios" },
	{ name: "Módulos", href: "#modulos" },
	{ name: "Experiencia", href: "#experiencia" },
	{ name: "Precios", href: "#precios" },
	{ name: "Testimonios", href: "#testimonios" },
];

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-16 items-center justify-between py-4">
				<div className="flex items-center gap-2">
					<Image
						src="/logo_2-removebg-preview.png?height=40&width=150"
						alt="NativoOne Logo"
						width={150}
						height={40}
						priority
					/>
				</div>

				<nav className="hidden md:flex items-center gap-6">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							{item.name}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-4">
					<Link href="#contacto" className="hidden md:block">
						<Button variant="outline">Solicitar Demo</Button>
					</Link>
					<Link href="#contacto">
						<Button>Contactar Ahora</Button>
					</Link>

					<Sheet>
						<SheetTrigger asChild className="md:hidden">
							<Button variant="outline" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<nav className="flex flex-col gap-4 mt-8">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="text-sm font-medium transition-colors hover:text-primary"
									>
										{item.name}
									</Link>
								))}
								<Link href="#contacto" className="mt-4">
									<Button className="w-full">Solicitar Demo</Button>
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
