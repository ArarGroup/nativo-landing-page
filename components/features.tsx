import ReactMarkdown from "react-markdown"

import {
  ArrowRight,
  DivideIcon as LucideIcon,
  Globe,
  FileText,
  Shield,
  BarChart3,
  Headphones,
} from "lucide-react"

export interface Feature {
  icon: typeof LucideIcon
  title: string
  description: string
  bulletPoints: string[]
  buttonText: string
  mainImage: {
    src: string
    alt: string
  }
  floatingImage: {
    src: string
    alt: string
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  }
  imageOnLeft: boolean
  bgColor: "white" | "gray"
}

export const features: Feature[] = [
  {
    icon: Globe,
    title: "Una solución transversal para toda tu Empresa",
    description: `Imagina todas las áreas de tu empresa conectadas en perfecta sincronía. Desde finanzas y recursos humanos hasta la cadena de suministro, ventas y atención al cliente — **todos tus equipos operando sobre una misma plataforma inteligente** que garantiza visibilidad total, comunicación ágil y datos consistentes en tiempo real.`,
    bulletPoints: [
      "Integrated modules for every department",
      "Real-time data synchronization",
      "Customizable workflows",
    ],
    buttonText: "Explore Features",
    mainImage: {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
      alt: "Dashboard overview",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      alt: "Analytics preview",
      position: "bottom-right",
    },
    imageOnLeft: false,
    bgColor: "white",
  },
  {
    icon: FileText,
    title: "Smart E-Billing System",
    description:
      "Automate your billing process with our intelligent e-billing system. Generate, send, and track invoices effortlessly.",
    bulletPoints: [
      "Automated invoice generation",
      "Payment tracking and reminders",
      "Multiple payment gateway integration",
    ],
    buttonText: "Learn More",
    mainImage: {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2426",
      alt: "E-billing system",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?auto=format&fit=crop&q=80&w=800",
      alt: "Invoice preview",
      position: "top-right",
    },
    imageOnLeft: true,
    bgColor: "gray",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Keep your business data safe with our advanced security features, including encryption, access controls, and regular backups.",
    bulletPoints: ["End-to-end encryption", "Role-based access control", "Automated backup system"],
    buttonText: "View Security Features",
    mainImage: {
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2426",
      alt: "Security features",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
      alt: "Security dashboard",
      position: "top-left",
    },
    imageOnLeft: false,
    bgColor: "white",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & Reports",
    description:
      "Make data-driven decisions with our comprehensive reporting tools. Get real-time insights into your business performance.",
    bulletPoints: [
      "Real-time performance tracking",
      "Customizable dashboards",
      "Export reports in multiple formats",
    ],
    buttonText: "Explore Analytics",
    mainImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2426",
      alt: "Analytics dashboard",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=800",
      alt: "Report preview",
      position: "bottom-right",
    },
    imageOnLeft: true,
    bgColor: "gray",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description:
      "Get help whenever you need it with our dedicated support team. Available 24/7 through multiple channels.",
    bulletPoints: ["Live chat support", "Priority ticket system", "Dedicated account manager"],
    buttonText: "Contact Support",
    mainImage: {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2426",
      alt: "Customer support",
    },
    floatingImage: {
      src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800",
      alt: "Support team",
      position: "top-right",
    },
    imageOnLeft: false,
    bgColor: "white",
  },
]

export function Features() {
  return (
    <div>
      {features.map((feature, index) => (
        <section
          key={index}
          className={`rounded-lg min-h-screen flex items-center mx-6 lg:px-24 py-24 ${
            feature.bgColor === "white" ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="container max-w-6xl mx-auto px-6">
            <div
              className={`grid lg:grid-cols-2 gap-32 items-center ${
                feature.imageOnLeft ? "lg:grid-flow-col" : ""
              }`}
            >
              {feature.imageOnLeft && (
                <div className="relative">
                  <img
                    src={feature.mainImage.src}
                    alt={feature.mainImage.alt}
                    className="rounded-lg shadow-2xl"
                  />
                  <img
                    src={feature.floatingImage.src}
                    alt={feature.floatingImage.alt}
                    className={`absolute w-48 rounded-lg shadow-xl border-4 border-white ${
                      feature.floatingImage.position === "top-right"
                        ? "-top-8 -right-8"
                        : feature.floatingImage.position === "top-left"
                        ? "-top-8 -left-8"
                        : feature.floatingImage.position === "bottom-right"
                        ? "-bottom-8 -right-8"
                        : "-bottom-8 -left-8"
                    }`}
                  />
                </div>
              )}

              <div>
                <div className="mb-8">
                  <h3 className="text-5xl font-bold mb-8">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">
                    <ReactMarkdown>{feature.description}</ReactMarkdown>
                  </p>
                </div>
              </div>

              {!feature.imageOnLeft && (
                <div className="relative">
                  <img
                    src={feature.mainImage.src}
                    alt={feature.mainImage.alt}
                    className="rounded-lg shadow-2xl"
                  />
                  <img
                    src={feature.floatingImage.src}
                    alt={feature.floatingImage.alt}
                    className={`absolute w-48 rounded-lg shadow-xl border-4 border-white ${
                      feature.floatingImage.position === "top-right"
                        ? "-top-8 -right-8"
                        : feature.floatingImage.position === "top-left"
                        ? "-top-8 -left-8"
                        : feature.floatingImage.position === "bottom-right"
                        ? "-bottom-8 -right-8"
                        : "-bottom-8 -left-8"
                    }`}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
