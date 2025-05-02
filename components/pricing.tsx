import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const plans = [
	{
		name: "Básico",
		price: "$50,000",
		description:
			"Ideal para pequeñas empresas que buscan optimizar sus procesos básicos.",
		features: [
			"Módulos de Compras y Ventas",
			"Facturación Electrónica",
			"Hasta 5 usuarios",
			"Soporte en horario laboral",
			"Actualizaciones fiscales",
		],
		cta: "Empezar Ahora",
	},
	{
		name: "Profesional",
		price: "$100,000",
		description:
			"Perfecto para empresas en crecimiento que necesitan una solución más completa.",
		features: [
			"Todos los módulos incluidos",
			"Facturación Electrónica Avanzada",
			"Hasta 15 usuarios",
			"Soporte extendido",
			"Actualizaciones fiscales prioritarias",
			"Capacitación personalizada",
		],
		cta: "Elegir Plan",
		highlighted: true,
	},
	{
		name: "Empresarial",
		price: "$230,000",
		description:
			"Solución integral para grandes empresas con necesidades complejas.",
		features: [
			"Todos los módulos con funciones avanzadas",
			"Usuarios ilimitados",
			"Soporte 24/7",
			"Actualizaciones fiscales prioritarias",
			"Capacitación completa",
			"Personalización avanzada",
			"Consultoría de implementación",
		],
		cta: "Contactar Ventas",
	},
];

export function Pricing() {
	return (
		<section id="precios" className="py-20 md:py-28 bg-slate-50">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
					<Badge className="mb-2">Planes y Precios</Badge>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Soluciones adaptadas a su negocio
					</h2>
					<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
						Ofrecemos diferentes planes para adaptarnos al tamaño y necesidades
						específicas de su empresa.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{plans.map((plan, index) => (
						<Card
							key={index}
							className={`flex flex-col ${
								plan.highlighted
									? "border-primary shadow-xl relative before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-primary/20 before:to-secondary/20 before:blur-xl before:opacity-50 md:scale-105"
									: "border shadow-lg"
							}`}
						>
							<CardHeader>
								{plan.highlighted && (
									<Badge className="w-fit mb-2">Más Popular</Badge>
								)}
								<CardTitle className="text-2xl">{plan.name}</CardTitle>
								<div className="mt-2">
									<span className="text-3xl font-bold">{plan.price}</span>
									<span className="text-muted-foreground ml-1">COP</span>
								</div>
								<CardDescription className="mt-2">
									{plan.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="flex-grow">
								<ul className="space-y-2">
									{plan.features.map((feature, i) => (
										<li key={i} className="flex items-start">
											<CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
											<span>{feature}</span>
										</li>
									))}
								</ul>
							</CardContent>
							<CardFooter>
								<Link href="#contacto" className="w-full">
									<Button
										className={`w-full ${
											plan.highlighted
												? ""
												: "bg-slate-800 hover:bg-slate-700 text-white"
										}`}
										variant={plan.highlighted ? "default" : "secondary"}
									>
										{plan.cta}
									</Button>
								</Link>
							</CardFooter>
						</Card>
					))}
				</div>
				<div className="mt-12 text-center">
					<p className="text-muted-foreground mb-4">
						¿Necesita una solución personalizada? Contáctenos para discutir sus
						necesidades específicas.
					</p>
					<Link href="#contacto">
						<Button variant="outline">
							Solicitar Cotización Personalizada
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
