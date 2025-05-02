import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma implementar NativoOne?",
    answer:
      "El tiempo de implementación varía según el tamaño de su empresa y los módulos seleccionados. Típicamente, una implementación básica puede completarse en 4-6 semanas, mientras que una implementación completa puede tomar 2-3 meses. Nuestro equipo trabaja con usted para crear un plan de implementación detallado que minimice las interrupciones en su operación.",
  },
  {
    question: "¿Cómo se manejan las actualizaciones fiscales?",
    answer:
      "NativoOne se mantiene constantemente actualizado con los cambios en la normativa fiscal. Proporcionamos actualizaciones automáticas que incluyen los cambios más recientes en requisitos de facturación electrónica, catálogos del SAT y formatos de declaraciones. Nuestro equipo de expertos fiscales monitorea continuamente los cambios regulatorios para garantizar que su sistema siempre esté en cumplimiento.",
  },
  {
    question: "¿Puedo acceder a NativoOne desde dispositivos móviles?",
    answer:
      "Sí, NativoOne ofrece acceso móvil a través de aplicaciones nativas para iOS y Android, así como una interfaz web responsiva. Esto permite a los usuarios acceder a información crítica, aprobar transacciones y monitorear KPIs desde cualquier lugar y en cualquier momento.",
  },
  {
    question: "¿Qué tipo de soporte técnico ofrecen?",
    answer:
      "Ofrecemos múltiples niveles de soporte técnico según el plan contratado. Todos los planes incluyen soporte por correo electrónico y portal de clientes. Los planes Profesional y Empresarial incluyen soporte telefónico y tiempos de respuesta garantizados. El plan Empresarial incluye además un gerente de cuenta dedicado y soporte 24/7.",
  },
  {
    question: "¿Es posible personalizar NativoOne para necesidades específicas?",
    answer:
      "Absolutamente. NativoOne está diseñado con una arquitectura flexible que permite personalizaciones para adaptarse a sus procesos específicos. Podemos crear campos personalizados, flujos de trabajo, reportes y hasta módulos completos según sus necesidades. Nuestro equipo de consultores trabaja con usted para entender sus requerimientos y configurar el sistema de manera óptima.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge className="mb-2">Preguntas Frecuentes</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Respuestas a sus dudas</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Encuentre respuestas a las preguntas más comunes sobre NativoOne.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
