import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
	BarChart3,
	ShieldCheck,
	Clock,
	Users,
	Zap,
	LineChart,
} from "lucide-react";

const features = [
	{
		icon: <BarChart3 className="h-10 w-10 text-primary" />,
		title: "Mejore la toma de decisiones",
		description:
			"Acceda a informes detallados y análisis en tiempo real para tomar decisiones estratégicas basadas en datos concretos.",
	},
	{
		icon: <ShieldCheck className="h-10 w-10 text-primary" />,
		title: "Garantice el cumplimiento fiscal",
		description:
			"Manténgase al día con las regulaciones fiscales con actualizaciones automáticas y validaciones que previenen errores.",
	},
	{
		icon: <Clock className="h-10 w-10 text-primary" />,
		title: "Reduzca tiempos operativos",
		description:
			"Automatice procesos manuales y repetitivos para liberar tiempo valioso de su equipo y enfocarse en lo importante.",
	},
	{
		icon: <Users className="h-10 w-10 text-primary" />,
		title: "Mejore la colaboración",
		description:
			"Facilite la comunicación entre departamentos con acceso centralizado a la información y flujos de trabajo integrados.",
	},
	{
		icon: <Zap className="h-10 w-10 text-primary" />,
		title: "Aumente la productividad",
		description:
			"Optimice sus operaciones diarias con interfaces intuitivas y procesos simplificados que aceleran el trabajo.",
	},
	{
		icon: <LineChart className="h-10 w-10 text-primary" />,
		title: "Escale su negocio",
		description:
			"Adapte el sistema a medida que crece su empresa, con una plataforma flexible que evoluciona con sus necesidades.",
	},
];

export function Features() {
	return (
		<section id="beneficios" className="py-20 md:py-28 bg-white">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
					<Badge className="mb-2">Beneficios Clave</Badge>
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
						Optimice su operación empresarial
					</h2>
					<p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
						NativoOne transforma la manera en que gestiona su negocio,
						ofreciendo soluciones que impulsan la eficiencia y el crecimiento.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<Card
							key={index}
							className="border bg-background/50 hover:bg-background/80 transition-colors"
						>
							<CardHeader>
								<div className="mb-2">{feature.icon}</div>
								<h3 className="text-xl font-bold">{feature.title}</h3>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">{feature.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
