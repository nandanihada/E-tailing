import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Return Policy Overview',
    content: 'We offer a 15-day return window from the delivery date for most eligible products.',
  },
  {
    title: '2. Return Eligibility Criteria',
    content: `✅ Eligible: Phone cases, unopened accessories, tech gadgets.\n❌ Non-returnable: Used/personal items, software, damaged products.`,
  },
  {
    title: '3. Return Process',
    content: `1. Initiate via Dashboard, Email, or Phone\n2. Provide order & reason\n3. Approval in 24–48 hrs\n4. Ship item\n5. Inspection & processing`,
  },
  {
    title: '4. Refund Policy',
    content: `Full product cost refunded. Online payments: 5–7 days. COD: 7–10 days.`,
  },
  {
    title: '5. Exchange Policy',
    content: `Exchange within 15 days. Only for different color/size or equal/higher value items.`,
  },
  {
    title: '6. Defective or Damaged Products',
    content: `Covers manufacturing faults & shipping damage. Report within 48 hrs for swift resolution.`,
  },
  {
    title: '7. Shipping and Handling',
    content: `We cover return shipping for wrong/defective items. Customers bear costs for voluntary returns.`,
  },
  {
    title: '8. Special Circumstances',
    content: `Bulk orders & wrong deliveries are handled with special timelines and care.`,
  },
  {
    title: '9. Deductions from Refunds',
    content: `Includes return shipping, restocking fees (₹25–₹50), and packaging penalties.`,
  },
  {
    title: '10. Customer Responsibilities',
    content: `Inspect product immediately. Retain original packaging. Pack securely for returns.`,
  },
  {
    title: '11. Contact Information',
    content: `📧 returns@surveytitans.com | 📞 +91-[Phone Number] | 🕘 Mon–Sat, 9 AM – 7 PM IST`,
  },
  {
    title: '12. Important Notes',
    content: `Returns need pre-authorization. Items undergo quality checks. Policy aligns with Indian consumer laws.`,
  },
  {
    title: '13. FAQs',
    content: `Q: Return after 15 days?\nA: Only for valid defects or warranties.\nQ: Refund time?\nA: 5–10 business days.`,
  },
]

const ReturnPolicy = () => {
  return (
    <div className="container section">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4">Return & Refund Policy</h1>
        <p className="text-gray-600 mb-2">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>
        <p className="text-gray-600">At Survey Titans Tech Solutions Pvt. Ltd., your satisfaction is our priority.</p>
      </motion.div>

      <div className="mt-12 space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white/20 backdrop-blur-md border-l-4 border-primary p-6 rounded-xl shadow-lg"
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
        className="bg-gray-100 mt-16 p-10 rounded-xl text-center shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Customer Satisfaction Guarantee</h2>
        <p className="text-gray-600">We stand behind every product. If there’s an issue, we’ll resolve it swiftly and fairly.</p>
      </motion.div>
    </div>
  )
}

export default ReturnPolicy
