import Image from "next/image";

export function LogoCloud() {
	return (
		<section className="py-12 border-y bg-white">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<p className="text-sm font-medium text-muted-foreground">
						EMPRESAS QUE CONFÍAN EN NATIVOONE
					</p>
					<div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
						{[1, 2, 3, 4, 5].map((i) => (
							<Image
								key={i}
								src={`/placeholder.svg?height=40&width=120&text=Logo${i}`}
								alt={`Cliente ${i}`}
								width={120}
								height={40}
								className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
