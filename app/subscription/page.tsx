import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      "3 companions limit",
      "Basic AI features",
      "Standard support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "9.99",
    features: [
      "Unlimited companions",
      "Advanced AI features",
      "Priority support",
      "Custom voice options",
      "Style customization",
    ],
    buttonText: "Upgrade to Pro",
    buttonVariant: "default" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "29.99",
    features: [
      "Everything in Pro",
      "Team management",
      "Custom integrations",
      "Dedicated support",
      "Advanced analytics",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
]

const Subscription = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-lg text-muted-foreground">
          Select the perfect plan for your learning journey
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-lg border p-8 ${
              plan.highlighted
                ? "border-primary shadow-lg scale-105"
                : "border-border"
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.buttonVariant}
              className="w-full"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Subscription