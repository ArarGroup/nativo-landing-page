import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const solutions = [
	{ name: "Módulo de Compras", href: "#" },
	{ name: "Módulo de Ventas", href: "#" },
	{ name: "Módulo de Tesorería", href: "#" },
	{ name: "Módulo de Contabilidad", href: "#" },
	{ name: "Facturación Electrónica", href: "#" },
];

const company = [
	{ name: "Sobre Nosotros", href: "#" },
	{ name: "Clientes", href: "#" },
	{ name: "Testimonios", href: "#" },
	{ name: "Blog", href: "#" },
	{ name: "Carreras", href: "#" },
];

const contact = [
	{
		icon: <Phone className="h-5 w-5 mr-2 text-slate-400" />,
		text: "+52 (55) 1234-5678",
	},
	{
		icon: <Mail className="h-5 w-5 mr-2 text-slate-400" />,
		text: "info@nativoone.com",
	},
	{
		icon: <MapPin className="h-5 w-5 mr-2 text-slate-400" />,
		text: "Av. Reforma 123, CDMX, México",
	},
];

export function Footer() {
	return (
		<footer className="bg-slate-900 text-white py-12 md:py-16">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<Image
								src="/logo_2-removebg-preview.png?height=40&width=150"
								alt="NativoOne Logo"
								width={150}
								height={40}
								className="invert"
							/>
						</div>
						<p className="text-slate-400">
							Transformando empresas con soluciones ERP innovadoras desde 2008.
						</p>
						<div className="flex space-x-4">
							<Link
								href="#"
								className="text-slate-400 hover:text-white transition-colors"
							>
								<span className="sr-only">Facebook</span>
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-slate-400 hover:text-white transition-colors"
							>
								<span className="sr-only">Twitter</span>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-slate-400 hover:text-white transition-colors"
							>
								<span className="sr-only">LinkedIn</span>
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Soluciones</h3>
						<ul className="space-y-2">
							{solutions.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-slate-400 hover:text-white transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Empresa</h3>
						<ul className="space-y-2">
							{company.map((item) => (
								<li key={item.name}>
									<Link
										href={item.href}
										className="text-slate-400 hover:text-white transition-colors"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contacto</h3>
						<ul className="space-y-2">
							{contact.map((item, index) => (
								<li key={index} className="flex items-start">
									{item.icon}
									<span className="text-slate-400">{item.text}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
					<p>
						© {new Date().getFullYear()} NativoOne. Todos los derechos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}
