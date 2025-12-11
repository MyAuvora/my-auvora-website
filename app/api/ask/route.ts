import { NextResponse } from 'next/server';

const AUVORA_KNOWLEDGE = `
Auvora is an AI-powered CRM platform designed for service-based businesses. Here's what you need to know:

CORE FEATURES:
- All-in-one platform combining CRM, POS, and AI agent
- AI agent that learns your business and provides smart recommendations
- Lead capture and pipeline management
- Automated follow-up and reminders
- Staff scheduling capabilities
- Analytics and reporting
- Communication logs
- Member/client management

AI AGENT CAPABILITIES:
- Learns your business patterns over time
- Provides smart recommendations (optimal class times, enrollment periods, reactivation timing)
- Answers questions instantly without digging through reports
- Suggests sales tactics and follow-up strategies
- Optimizes operations based on your data

INTEGRATIONS:
- QuickBooks (accounting and payroll)
- Facebook (lead capture and messaging)
- Instagram (DMs and comments)
- IXL (for education vertical only)

VERTICALS:
1. Auvora Fitness - For boutique studios, gyms, and dance studios
   - Features: Integrated POS, Coach Scheduling, Lead pipeline, Member management, Analytics
   - AI helps with: Optimal class times, lead conversion insights

2. Auvora Education - For private schools, micro schools, and daycares
   - Features: Integrated POS, Teacher Scheduling, Inquiry pipeline, Parent communication, Waitlist management
   - AI helps with: Peak enrollment periods, tour-to-enrollment insights

3. Auvora Wellness - For chiropractic, physical therapy, massage clinics
   - Features: Complete patient notes, AI-assisted SOAP notes, Integrated POS, Provider Scheduling, Patient pipeline
   - AI helps with: Reactivation timing, patient engagement insights

4. Auvora Beauty - Coming soon for salons, barbers, and med spas

5. Auvora Auxiliary - Coming soon for local service businesses (lawn care, pet care, home services)

LAUNCH TIMELINE:
- Launching in early 2026
- Founding partners get priority access and exclusive benefits

KEY DIFFERENTIATORS:
- AI agent embedded in the CRM (not just a chatbot)
- All-in-one solution (no need for multiple tools)
- Industry-specific features for each vertical
- Staff scheduling built-in
- Learns and adapts to your business

WHAT WE DON'T DISCUSS:
- Pricing information (we don't share pricing details - direct users to book a demo)
- Specific contract terms
- Detailed technical specifications
`;

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      );
    }

    const pricingKeywords = ['price', 'pricing', 'cost', 'how much', 'payment', 'pay', 'fee', 'subscription', 'plan', 'tier', 'charge', 'rate', 'dollar', '$'];
    const isPricingQuestion = pricingKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
    );

    if (isPricingQuestion) {
      return NextResponse.json({
        response: "I can't discuss pricing details, but I'd be happy to help you understand our features and capabilities! Our team can provide personalized pricing information when you book a demo. Would you like to know more about our features, integrations, or how Auvora can help your specific business?"
      });
    }

    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('agent')) {
      return NextResponse.json({
        response: "Auvora's AI agent is our biggest differentiator! It learns your business patterns over time and acts like a business analyst, sales coach, and data scientist all in one. You can ask it questions like 'How many leads converted last month?' or 'Which class has the best retention?' and get instant answers. It also provides smart recommendations on optimal scheduling, follow-up timing, and sales tactics based on your data. The more you use Auvora, the smarter it gets!"
      });
    }

    if (lowerMessage.includes('integration') || lowerMessage.includes('integrate') || lowerMessage.includes('connect')) {
      return NextResponse.json({
        response: "Auvora integrates with key tools to make your workflow seamless:\n\n• QuickBooks - for accounting and payroll\n• Facebook - for lead capture and messaging\n• Instagram - for DMs and comments\n• IXL - for education businesses (learning management)\n\nWhile Auvora is an all-in-one platform with built-in CRM, POS, and scheduling, these integrations help you connect with tools you already use. What specific integration are you interested in?"
      });
    }

    if (lowerMessage.includes('feature') || lowerMessage.includes('what can') || lowerMessage.includes('capabilities')) {
      return NextResponse.json({
        response: "Auvora is an all-in-one platform with:\n\n✓ Complete CRM - Lead capture, pipeline management, automated follow-ups\n✓ Integrated POS - Process payments, manage packages, track revenue\n✓ Staff Scheduling - Plan shifts, manage availability, ensure coverage\n✓ AI Agent - Smart recommendations and instant answers to your questions\n✓ Analytics & Reporting - Track performance and growth\n✓ Communication Logs - Keep all interactions in one place\n\nEach vertical (Fitness, Education, Wellness) has industry-specific features tailored to your business type. Which vertical are you interested in?"
      });
    }

    if (lowerMessage.includes('fitness') || lowerMessage.includes('gym') || lowerMessage.includes('studio') || lowerMessage.includes('dance')) {
      return NextResponse.json({
        response: "Auvora Fitness is perfect for boutique studios, gyms, and dance studios! Key features include:\n\n• Lead pipeline and tracking\n• Coach scheduling\n• Member management\n• Integrated POS\n• AI insights on optimal class times and lead conversion\n\nThe AI agent learns your studio's patterns and helps you make data-driven decisions about scheduling, pricing, and member retention. Would you like to know more about any specific feature?"
      });
    }

    if (lowerMessage.includes('education') || lowerMessage.includes('school') || lowerMessage.includes('daycare') || lowerMessage.includes('micro school')) {
      return NextResponse.json({
        response: "Auvora Education is designed for private schools, micro schools, and daycares! Key features include:\n\n• Inquiry pipeline and parent communication\n• Teacher scheduling\n• Waitlist management\n• Integrated POS\n• IXL integration for learning management\n• AI insights on peak enrollment periods and tour conversion\n\nThe AI agent helps you identify the best times to reach out to families and optimize your enrollment process. What would you like to know more about?"
      });
    }

    if (lowerMessage.includes('wellness') || lowerMessage.includes('chiropractic') || lowerMessage.includes('therapy') || lowerMessage.includes('massage') || lowerMessage.includes('clinic')) {
      return NextResponse.json({
        response: "Auvora Wellness is built for chiropractic, physical therapy, and massage clinics! Key features include:\n\n• Complete patient notes (no need for separate systems)\n• AI-assisted SOAP notes\n• Provider scheduling\n• Patient pipeline and communication\n• Integrated POS\n• AI insights on reactivation timing and patient engagement\n\nThe AI agent helps you identify when to reach out to inactive patients and provides insights on patient retention. What specific feature interests you?"
      });
    }

    if (lowerMessage.includes('when') || lowerMessage.includes('launch') || lowerMessage.includes('available') || lowerMessage.includes('timeline')) {
      return NextResponse.json({
        response: "Auvora is launching in early 2026! Founding partners will get priority access and exclusive benefits. We're currently accepting demo requests to show you how Auvora can transform your business. Would you like to book a demo to see it in action?"
      });
    }

    if (lowerMessage.includes('demo') || lowerMessage.includes('see it') || lowerMessage.includes('try')) {
      return NextResponse.json({
        response: "I'd love to help you book a demo! During the demo, we'll show you a version of Auvora tailored to your specific business and industry. You'll see the AI agent in action, explore the features, and learn how Auvora can help you grow. Click 'Book a Demo' on any page to get started!"
      });
    }

    return NextResponse.json({
      response: "Great question! I'm here to help you learn about Auvora's AI-powered CRM platform. I can tell you about:\n\n• Our AI agent and how it learns your business\n• Features like CRM, POS, and staff scheduling\n• Integrations with QuickBooks, Facebook, Instagram, and IXL\n• Our different products (Fitness, Education, Wellness)\n• How to book a demo\n\nWhat would you like to know more about?"
    });

  } catch (error) {
    console.error('Error in ask API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
