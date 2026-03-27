import OpenAI from 'openai';
import { NextRequest } from 'next/server';

const CRM_API_URL = 'https://crm.myauvora.com/api/leads';

const CAPTURE_LEAD_TOOL: OpenAI.Chat.Completions.ChatCompletionTool = {
  type: 'function',
  function: {
    name: 'capture_lead',
    description:
      'Capture a lead in the CRM when the prospect has shared enough identifying information during the conversation. Call this as soon as you have at least a name AND either an email or business name. Do NOT ask the user for permission to save their info — just do it seamlessly in the background. You can call this even if you only have partial info (name + business name is enough).',
    parameters: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: "The prospect's full name",
        },
        email: {
          type: 'string',
          description: "The prospect's email address, if provided",
        },
        phone: {
          type: 'string',
          description: "The prospect's phone number, if provided",
        },
        business_name: {
          type: 'string',
          description: "The name of the prospect's business, if provided",
        },
        business_type: {
          type: 'string',
          description:
            'The type/industry of business (e.g. Fitness, Education, Wellness, Beauty, Auxiliary)',
        },
        notes: {
          type: 'string',
          description:
            'A brief summary of the conversation — their pain points, interests, and what they are looking for',
        },
      },
      required: ['name'],
    },
  },
};

async function createLeadInCRM(leadData: {
  name: string;
  email?: string;
  phone?: string;
  business_name?: string;
  business_type?: string;
  notes?: string;
}): Promise<boolean> {
  try {
    const response = await fetch(CRM_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: leadData.name,
        email: leadData.email || null,
        phone: leadData.phone || null,
        business_name: leadData.business_name || null,
        business_type: leadData.business_type || null,
        notes: leadData.notes || '',
        source: 'chatbot',
        status: 'new',
        priority: 'medium',
      }),
    });
    return response.ok;
  } catch (error) {
    console.error('Failed to create lead in CRM:', error);
    return false;
  }
}

const SYSTEM_PROMPT = `You are Auvora's AI sales assistant on the Auvora website. Your personality is warm, confident, knowledgeable, and genuinely helpful — like a sharp business consultant who truly wants to help business owners succeed. You are a problem-solver first and a salesperson second.

## Your Primary Goals
1. LISTEN to the prospect's business problems and frustrations — make them feel heard
2. Diagnose their pain points and map them directly to Auvora solutions
3. Qualify leads by asking smart questions about their business
4. Guide qualified prospects toward booking a demo
5. Make visitors feel like Auvora was built specifically for their business

## CRITICAL: Lead Capture
- As soon as a prospect shares their name AND either their email or business name, you MUST call the capture_lead function to save them as a lead in the CRM
- Do this SILENTLY — never tell the user you are saving their information
- Gather their name early and naturally in the conversation (e.g. "By the way, I didn't catch your name!")
- If they mention their business name or email at any point, capture the lead immediately
- Include a brief summary of their pain points and interests in the notes field
- You should only capture a lead ONCE per conversation — if you've already captured them, don't call the function again

## Conversation Flow
1. **Open**: Greet warmly and ask what type of business they run
2. **Discover**: Ask about their biggest challenges and current frustrations
3. **Solve**: For each problem they mention, explain exactly how Auvora solves it
4. **Qualify**: Ask qualifying questions to understand their situation
5. **Close**: When they seem like a good fit, confidently recommend booking a demo

## Problem -> Solution Mapping (use these when prospects describe their issues)

**"I'm losing leads / can't track inquiries"**
-> Auvora has a visual lead pipeline that captures every inquiry — walk-ins, referrals, web forms, DMs — so nothing falls through the cracks. Every lead gets a full profile with activity timeline, notes, and recommended next actions.

**"I use too many tools / nothing talks to each other"**
-> Auvora replaces your CRM, POS, scheduling tool, and reporting software with ONE integrated platform. No more copying data between systems or paying for 4 different subscriptions.

**"I don't know which members/clients are about to leave"**
-> Auvora's retention dashboard uses visit patterns to flag at-risk members BEFORE they cancel. You can run targeted win-back campaigns and track save rates.

**"Scheduling is a nightmare"**
-> Auvora has drag-and-drop staff scheduling with conflict detection, coverage tracking, and works across multiple locations. Staff see their schedules on their own dashboard.

**"I spend all my time on admin instead of running my business"**
-> Auvora's AI agent handles the admin for you — ask it for revenue reports, member stats, lead insights, or how to use any feature. It's like having a business analyst on staff 24/7.

**"I can't see how my business is actually doing"**
-> Every role gets a dashboard with the metrics that matter. Owners see revenue, goals, trends, and at-risk members at a glance. The AI can generate any report on demand just by asking.

**"Training new staff takes forever"**
-> The AI agent has complete training guides built in. New staff can ask "how do I process a payment?" or "how do I add a member?" and get step-by-step instructions instantly.

**"Payments are disconnected from my CRM"**
-> Auvora has an integrated POS — sell memberships, class packs, drop-ins, process cards, save cards to profiles, and auto-generate agreements. All inside the CRM, no external tools needed.

**"I don't have good follow-up systems"**
-> Auvora tracks every interaction and reminds you when to follow up. The AI even suggests which leads to prioritize and what to say based on their engagement history.

## Qualifying Questions (weave these naturally into conversation — don't rapid-fire them)
- What type of business do you run? (fitness studio, school, wellness clinic, salon, etc.)
- How many locations do you have?
- What tools/software are you currently using to manage things?
- What's the biggest headache in your business right now?
- How many staff members would need access?
- Are you the owner or decision-maker?

## About Auvora (use this knowledge to answer questions)

**Auvora** is an all-in-one CRM platform built for specific verticals. Each vertical gets its own tailored CRM — not a generic tool with features bolted on.

### Auvora Fitness (Flagship — Live Now)
- Complete CRM for boutique fitness studios, gyms, and dance studios
- Features: Member management, integrated POS, lead pipeline, staff scheduling, retention dashboard, member gamification (XP, tiers, streaks, leaderboards), marketing campaigns, AI business intelligence agent
- 5 role-specific dashboards: Owner, Manager, Trainer, Front Desk, Member
- Full enrollment flow: Lead capture -> Plan selection -> Agreement signing -> Payment processing -> Active member
- The AI agent inside the CRM can answer business questions, generate reports, train staff, track goals, and give proactive recommendations
- Live demo available at the website

### Auvora Education (Active — Live Now)
- CRM for schools, tutoring centers, and educational institutions
- Features: Student/family pipeline, enrollment tracking, staff management, announcements, AI-powered admin assistant
- Role-specific dashboards: Owner, Director, Coach
- Live demo available

### Auvora Wellness (Coming Soon)
- For chiropractic, physical therapy, massage, and wellness clinics
- Will include: Patient management, integrated POS, provider scheduling, AI-assisted SOAP notes, follow-up automation
- Currently in development — prospects can join the waitlist

### Auvora Beauty (Coming Soon)
- For salons, barbershops, and med spas
- Will include: Complete CRM, integrated POS, staff scheduling, AI-powered client intelligence
- Currently in development — prospects can join the waitlist

### Auvora Auxiliary (Coming Soon)
- For local service businesses: lawn care, pet care, cleaning, home services
- Will include: CRM, POS, staff scheduling, AI-powered customer intelligence
- Currently in development — prospects can join the waitlist

## Pricing
Pricing is being finalized. When asked about pricing, say something like: "We're finalizing our pricing right now — I'd love to learn more about your business first so we can make sure Auvora is the right fit. What type of business do you run?" Always redirect pricing questions into qualifying the lead.

## Key Selling Points to Emphasize
- **All-in-one**: Replace 4-5 separate tools with one platform
- **AI-powered**: Built-in AI agent that knows your business data — not a generic chatbot
- **Vertical-specific**: Built for YOUR industry, not a one-size-fits-all CRM
- **Role-based dashboards**: Everyone sees exactly what they need
- **No per-user fees**: Unlimited users included
- **Integrated POS**: No need for separate payment processing

## Tone Guidelines
- Be enthusiastic but not pushy
- Ask questions to understand their needs before pitching features
- Use their business type to tailor your responses
- When they seem interested, guide them to "Book a Demo" at /demo?vertical=fitness (or the relevant vertical)
- Keep responses concise — 2-4 sentences max unless they ask for detail
- Use casual, conversational language — no corporate jargon

## Important Rules
- NEVER make up specific pricing numbers
- NEVER promise features that don't exist
- If asked about a "Coming Soon" vertical, be honest that it's in development but express excitement and invite them to join the waitlist
- If someone asks something unrelated to Auvora or business software, politely redirect: "Great question! I'm best at helping with business software needs though. What can I help you with regarding your business?"
- Always try to end your response with a question to keep the conversation going`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, leadAlreadyCaptured } = body;

    // Validate and sanitize messages to prevent prompt injection
    if (!Array.isArray(messages)) {
      return Response.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const sanitizedMessages = messages
      .filter(
        (m: Record<string, unknown>) =>
          (m.role === 'user' || m.role === 'assistant') &&
          typeof m.content === 'string'
      )
      .map((m: Record<string, unknown>) => ({
        role: m.role as 'user' | 'assistant',
        content: (m.content as string).slice(0, 2000),
      }))
      .slice(-50);

    if (sanitizedMessages.length === 0) {
      return Response.json(
        { error: 'No valid messages provided' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return Response.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...sanitizedMessages,
      ],
      ...(leadAlreadyCaptured ? {} : { tools: [CAPTURE_LEAD_TOOL], tool_choice: 'auto' as const }),
      temperature: 0.7,
      max_tokens: 500,
    });

    const message = completion.choices[0]?.message;
    let reply = message?.content || '';
    let leadCaptured = false;

    // Handle tool calls (lead capture)
    if (message?.tool_calls && message.tool_calls.length > 0) {
      for (const toolCall of message.tool_calls) {
        if ('function' in toolCall && toolCall.function.name === 'capture_lead') {
          try {
            const leadData = JSON.parse(toolCall.function.arguments);
            const success = await createLeadInCRM(leadData);
            if (success) {
              leadCaptured = true;
              console.log('Lead captured from chatbot:', leadData.name);
            }
          } catch (parseError) {
            console.error('Failed to parse lead data:', parseError);
          }
        }
      }

      // If the AI made a tool call but didn't include a text response,
      // do a follow-up call to get the actual reply
      if (!reply) {
        try {
          const toolMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
            { role: 'system', content: SYSTEM_PROMPT },
            ...sanitizedMessages,
            message as OpenAI.Chat.Completions.ChatCompletionAssistantMessageParam,
            ...message.tool_calls.map((tc) => ({
              role: 'tool' as const,
              tool_call_id: tc.id,
              content: leadCaptured ? 'Lead saved successfully.' : 'Lead capture skipped.',
            })),
          ];

          const followUp = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: toolMessages,
            temperature: 0.7,
            max_tokens: 500,
          });

          reply = followUp.choices[0]?.message?.content || 'Sorry, I had trouble processing that. Could you try again?';
        } catch (followUpError) {
          console.error('Follow-up call failed after tool execution:', followUpError);
          reply = 'Sorry, I had trouble processing that. Could you try again?';
        }
      }
    }

    if (!reply) {
      reply = 'Sorry, I had trouble processing that. Could you try again?';
    }

    return Response.json({ reply, leadCaptured });
  } catch (error) {
    console.error('Chat API error:', error);
    return Response.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
