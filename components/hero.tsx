import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
	return (
		<section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-slate-50">
			<div className="container px-4 md:px-6 relative z-10">
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<Badge className="mb-2" variant="outline">
								15+ años de experiencia
							</Badge>
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Transforme su negocio con el ERP más{" "}
								<span className="text-primary">inteligente</span> del mercado
							</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl">
								NativoOne ofrece una solución integral que automatiza sus
								procesos, simplifica la gestión fiscal y potencia el crecimiento
								de su empresa.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Link href="#contacto">
								<Button size="lg" className="px-8">
									Solicitar Demostración <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
							<Link href="#precios">
								<Button size="lg" variant="outline" className="px-8">
									Ver Planes y Precios
								</Button>
							</Link>
						</div>
						<div className="flex flex-wrap gap-4 text-sm mt-2">
							{[
								"Implementación rápida",
								"Soporte 24/7",
								"Actualizaciones fiscales",
							].map((item, i) => (
								<div key={i} className="flex items-center">
									<CheckCircle className="mr-1 h-4 w-4 text-green-500" />
									<span>{item}</span>
								</div>
							))}
						</div>
					</div>
					<div className="flex items-center justify-center lg:justify-end relative">
						<div className="absolute w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30" />
						<Image
							src="/nativo_one_in_use.png?height=500&width=600"
							alt="NativoOne ERP Dashboard"
							width={600}
							height={500}
							className="relative rounded-lg shadow-2xl border"
						/>
					</div>
				</div>
			</div>

			{/* Background decorations */}
			<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 xl:translate-y-[-10%] xl:translate-x-[15%] pointer-events-none">
				<Image
					src="/placeholder.svg?height=300&width=300"
					width={300}
					height={300}
					alt="Background decoration"
					className="opacity-20"
				/>
			</div>
		</section>
	);
}
