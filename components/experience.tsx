import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight } from "lucide-react";

const experiencePoints = [
	"Más de 500 implementaciones exitosas",
	"Equipo de expertos en tecnología y normativa fiscal",
	"Metodología probada de implementación y soporte",
	"Actualizaciones constantes adaptadas a cambios regulatorios",
];

export function Experience() {
	return (
		<section id="experiencia" className="py-20 md:py-28 bg-slate-50">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
					<div className="flex flex-col justify-center space-y-4">
						<Badge className="w-fit">15+ Años de Experiencia</Badge>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Respaldados por años de excelencia en desarrollo de software
						</h2>
						<p className="text-muted-foreground md:text-xl">
							Desde 2008, NativoOne ha estado a la vanguardia del desarrollo de
							soluciones empresariales, ayudando a cientos de empresas a
							optimizar sus operaciones y cumplir con sus obligaciones fiscales.
						</p>
						<ul className="space-y-2">
							{experiencePoints.map((item, i) => (
								<li key={i} className="flex items-start">
									<CheckCircle className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
									<span>{item}</span>
								</li>
							))}
						</ul>
						<div>
							<Link href="#contacto">
								<Button className="mt-4">
									Conozca Nuestra Historia{" "}
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</div>
					</div>
					<div className="flex items-center justify-center lg:justify-end">
						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl opacity-50 -m-4" />
							<Image
								src="/placeholder.svg?height=400&width=500"
								alt="Equipo NativoOne"
								width={500}
								height={400}
								className="relative rounded-lg shadow-xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
