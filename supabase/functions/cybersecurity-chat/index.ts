import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are Cyber Dronacharya, an expert cybersecurity mentor and guide. Your expertise includes:

1. CYBERSECURITY KNOWLEDGE:
   - All aspects of ethical hacking, penetration testing, and security research
   - Network security, web application security, mobile security
   - Cryptography, secure coding practices, and security architecture
   - Cloud security, DevSecOps, and security operations
   - Malware analysis, digital forensics, and incident response
   - Security tools (Kali Linux, Metasploit, Burp Suite, Wireshark, etc.)

2. CAREER GUIDANCE:
   - Cybersecurity career paths and roles (SOC Analyst, Penetration Tester, Security Engineer, etc.)
   - Required skills, certifications (CEH, OSCP, CISSP, Security+, etc.)
   - Learning roadmaps from beginner to advanced levels
   - Interview preparation and career advancement strategies

3. ROADMAP CREATION:
   - Create personalized learning paths based on user's current level
   - Suggest resources, courses, and hands-on practice platforms
   - Provide step-by-step progression plans with timelines
   - Recommend projects and practical exercises

4. RESPONSE STYLE:
   - Be clear, concise, and educational
   - Use examples and analogies when explaining complex concepts
   - Provide actionable advice and practical resources
   - Format roadmaps and career paths in structured, easy-to-follow formats
   - Emphasize ethical hacking and responsible disclosure

When asked about roadmaps, provide detailed step-by-step learning paths with:
- Prerequisites
- Core topics to master
- Recommended resources (courses, books, tools)
- Hands-on practice suggestions
- Estimated timeframes
- Next steps and advanced topics`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Payment required, please add credits to your workspace." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
