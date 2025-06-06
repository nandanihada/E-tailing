import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Shipping Coverage',
    content: `We provide Pan-India delivery, including:\n\n• Major metro cities: Delhi, Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad, Pune, Ahmedabad\n• Tier-2 and Tier-3 cities\n• Most rural areas with valid PIN codes\n• Union Territories\n\nExcluded zones:\n• Remote or border regions\n• Restricted courier areas\n• International delivery not available`,
  },
  {
    title: 'Shipping Methods & Timelines',
    content: `| Shipping Type     | Delivery Time     | Availability           | Cost Range (INR) |\n|-------------------|-------------------|-------------------------|------------------|\n| Standard          | 3–7 business days | All serviceable PINs    | ₹40 – ₹99        |\n| Express           | 1–3 business days | Major metro cities      | ₹150 – ₹299      |\n| Same-Day Delivery | Within 24 hours   | Selected metro cities   | ₹199 – ₹399      |\n| Free Shipping     | Standard shipping | Orders ₹999+ or offers  | ₹0 (T&C apply)   |`,
  },
  {
    title: 'Shipping Process',
    content: `1. **Order Processing**\n   • Online Payments: 2–4 hours\n   • Cash on Delivery: 4–8 hours\n   • Packaging & dispatch within 24 hours\n\n2. **Notifications**\n   • Email/SMS confirmation and tracking\n\n3. **Weight-Based Charges**\n   • Up to 500g: ₹40–₹60\n   • 500g–1kg: ₹60–₹80\n   • 1–2kg: ₹80–₹99\n   • 2kg+: Calculated at checkout`,
  },
  {
    title: 'Packaging & Sustainability',
    content: `We use:\n• Secure, tamper-proof packaging\n• Waterproof and anti-static materials\n• Recyclable & biodegradable packaging whenever possible\n• Minimal packaging approach to reduce waste`,
  },
  {
    title: 'Delivery Terms',
    content: `• Up to 3 delivery attempts\n• Valid shipping address and customer availability required\n• ID verification may be requested\n• Real-time tracking via dashboard, courier apps, and SMS/email updates`,
  },
  {
    title: 'Cash on Delivery (COD)',
    content: `• Available across most regions\n• Charges: ₹25–₹50 per order\n• Max order value: ₹25,000\n• Payment in cash only (no change provided)\n• ID verification may be necessary`,
  },
  {
    title: 'Cancellation Policy',
    content: `| Stage             | Cancellation Window     | Charges               |\n|------------------|-------------------------|------------------------|\n| Before Dispatch  | Within 2 hours          | Free                  |\n| Before Dispatch  | Up to 24 hours          | ₹0–₹25 (processing)   |\n| After Dispatch   | Limited intercept only  | Courier fee applies   |`,
  },
  {
    title: 'How to Cancel an Order',
    content: `• Log in to your account → My Orders → Select → Cancel\n• Or contact support via phone, email, or live chat on the website`,
  },
  {
    title: 'Refund Timelines',
    content: `• Online Payments:\n   – 2–3 business days (instant cancellations)\n   – 5–7 business days (post-dispatch)\n• Cash on Delivery:\n   – No refund if canceled before dispatch\n   – Bank transfer in 7–10 business days (post-dispatch)`,
  },
  {
    title: 'Special Situations',
    content: `• **Damaged or Lost Shipments**: Full refund or free replacement (report within 24 hours with photos)\n• **Weather/Natural Events**: May cause delays, no extra charges applied\n• **Festive Seasons**: Delays may occur—priority is given to time-sensitive orders\n• **Address Changes**: Free if requested before dispatch. Post-dispatch changes may incur courier charges`,
  },
  {
    title: 'Contact Information',
    content: `• Shipping: shipping@surveytitans.com | +91-[Phone Number]\n• Cancellations: orders@surveytitans.com | Live Chat on website\n• Emergency Support: support@surveytitans.com | +91-[Emergency Number] (24/7)`,
  },
  {
    title: 'Important Notes',
    content: `• Shipping timelines are estimates and depend on PIN code serviceability\n• Shipping charges are non-refundable unless due to our error\n• Ensure address accuracy to avoid delivery issues\n• Policy subject to change based on courier regulations`,
  },
]

const ShippingCancellationPolicy = () => {
  return (
    <div className="container section">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4">Shipping & Cancellation Policy</h1>
        <p className="text-gray-600 mb-2">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>
        <p className="text-gray-600">
          This policy outlines our shipping procedures, cancellation options, refund timelines, and customer responsibilities.
        </p>
      </motion.div>

      <div className="mt-12 space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white/30 backdrop-blur-md border-l-4 border-primary p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-2">{section.title}</h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-gray-100 mt-16 p-10 rounded-xl text-center shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Efficient, Transparent, Customer-First</h2>
        <p className="text-gray-600">
          Survey Titans is committed to delivering a reliable experience—from purchase to delivery, and beyond.
        </p>
      </motion.div>
    </div>
  )
}

export default ShippingCancellationPolicy
