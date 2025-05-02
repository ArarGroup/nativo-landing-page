import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const modules = [
	{
		id: "compras",
		title: "Gestión de Compras",
		tab_label: "Compras",
		description:
			"Optimice todo el ciclo de compras, desde solicitudes hasta pagos a proveedores, con validación automática de facturas y seguimiento de órdenes.",
		features: [
			"Gestión completa de proveedores",
			"Validación automática de facturas electrónicas",
			"Control de órdenes de compra",
			"Seguimiento de recepciones parciales",
			"Integración con inventario y contabilidad",
		],
	},
	{
		id: "ventas",
		title: "Gestión de Ventas",
		tab_label: "Ventas",
		description:
			"Administre todo el proceso comercial, desde cotizaciones hasta facturación electrónica, con seguimiento de clientes y análisis de rentabilidad.",
		features: [
			"Facturación electrónica integrada",
			"Gestión de clientes y oportunidades",
			"Control de cotizaciones y pedidos",
			"Seguimiento de entregas y satisfacción",
			"Análisis de rentabilidad por cliente/producto",
		],
	},
	{
		id: "tesoreria",
		title: "Gestión de Tesorería",
		tab_label: "Tesorería",
		description:
			"Controle eficientemente los flujos de efectivo, conciliaciones bancarias y proyecciones financieras para optimizar la liquidez de su empresa.",
		features: [
			"Gestión de múltiples cuentas bancarias",
			"Conciliación bancaria automatizada",
			"Programación de pagos a proveedores",
			"Seguimiento de cobranza a clientes",
			"Proyecciones de flujo de efectivo",
		],
	},
	{
		id: "contabilidad",
		title: "Gestión Contable",
		tab_label: "Contable",
		description:
			"Automatice los procesos contables y fiscales con generación de pólizas, reportes financieros y preparación de declaraciones fiscales.",
		features: [
			"Contabilidad electrónica completa",
			"Generación automática de pólizas",
			"Estados financieros en tiempo real",
			"Preparación de declaraciones fiscales",
			"Cumplimiento con normativas vigentes",
		],
	},
];

export function Modules() {
	return (
		<section id="modulos" className="py-20 md:py-28 bg-white">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
					<Badge className="mb-2">Módulos Principales</Badge>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Una solución integral para su negocio
					</h2>
					<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
						NativoOne ofrece módulos especializados que se integran
						perfectamente para cubrir todas las áreas críticas de su empresa.
					</p>
				</div>

				<Tabs defaultValue="compras" className="w-full">
					<TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
						{modules.map((module) => (
							<TabsTrigger key={module.id} value={module.id}>
								{module.tab_label}
							</TabsTrigger>
						))}
					</TabsList>

					{modules.map((module) => (
						<TabsContent
							key={module.id}
							value={module.id}
							className="border rounded-lg p-6"
						>
							<div className="grid md:grid-cols-2 gap-6 items-center">
								<div>
									<h3 className="text-2xl font-bold mb-4">{module.title}</h3>
									<p className="text-muted-foreground mb-6">
										{module.description}
									</p>
									<ul className="space-y-2">
										{module.features.map((feature, i) => (
											<li key={i} className="flex items-start">
												<CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
								<div className="flex justify-center">
									<div className="relative">
										<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg blur-xl opacity-50 -m-4" />
										<Image
											src={`/placeholder.svg?height=300&width=400&text=Módulo de ${
												module.title.split(" ")[2]
											}`}
											alt={`Módulo de ${module.title.split(" ")[2]}`}
											width={400}
											height={300}
											className="relative rounded-lg shadow-lg"
										/>
									</div>
								</div>
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
}
