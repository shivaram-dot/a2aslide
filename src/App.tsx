import Deck from '@/deck/Deck';
import Slide from '@/deck/Slide';
import Build from '@/deck/Build';
import Reveal from '@/deck/Reveal';
import Bento from '@/components/Bento';
import Split from '@/components/Split';
import Contrast from '@/components/Contrast';
import CountUp from '@/components/CountUp';
import StatGrid from '@/components/StatGrid';
import Accordion from '@/components/Accordion';
import Comparison from '@/components/Comparison';
import Tabs from '@/components/Tabs';
import Timeline from '@/components/Timeline';
import CodeWindow from '@/components/CodeWindow';
import SpotlightCard from '@/components/SpotlightCard';
import Section from '@/components/Section';
import Quote from '@/components/Quote';
import Steps from '@/components/Steps';
import Agenda from '@/components/Agenda';
import Cover from '@/components/Cover';
import Marquee from '@/components/Marquee';

const card: React.CSSProperties = {
  padding: 22,
  borderRadius: 'var(--radius)',
  background: 'var(--surface)',
  border: '1px solid var(--hair)',
};

export default function App() {
  return (
    <Deck>
      {/* Cover */}
      <Cover
        nav="Cover"
        notes="Welcome the audience. Introduce the topic: how AI agents talk to each other. Set a calm, confident tone."
        kicker="Seminar Report · Artificial Intelligence"
        title={
          <>
            Agent-to-Agent{' '}
            <span className="accent-text">Communication</span>
          </>
        }
        subtitle="How autonomous AI agents collaborate, coordinate, and solve complex problems together."
        foot="August 2026 · Seminar Presentation"
      />

      {/* Agenda */}
      <Agenda
        nav="Agenda"
        notes="Thirty seconds — orient the room on the structure, then move on."
        kicker="Agenda"
        title="What we'll cover."
        items={[
          'Introduction & motivation',
          'What is an AI agent?',
          'A2A communication: definition & need',
          'Architecture & working process',
          'Models, protocols & messages',
          'Coordination & applications',
          'Advantages, challenges & future',
          { title: 'Case study & conclusion', hint: 'Final stretch' },
        ]}
      />

      {/* Section 1 — Introduction */}
      <Section
        n={1}
        nav="Introduction"
        notes="New chapter. Pause briefly before speaking."
        kicker="Part one"
        title={
          <>
            The shift to <span className="accent-text">distributed AI.</span>
          </>
        }
      />

      {/* Introduction — from single to multi-agent */}
      <Contrast
        nav="Why A2A"
        notes="Let the left panel sting for a moment — one AI doing everything is brittle. Then reveal the right."
        kicker="The shift"
        title="One AI can't do it all."
        left={{
          label: 'Traditional AI',
          title: 'Single-agent systems',
          points: [
            'One model handles every task',
            'Recommendations, chatbots, vision',
            'Struggles with complex, multi-step problems',
            'Hard to scale or specialize',
          ],
        }}
        right={{
          label: 'Modern AI',
          title: 'Multi-agent collaboration',
          points: [
            'Specialized agents handle individual tasks',
            'Agents negotiate, share, and coordinate',
            'Scales across distributed environments',
            'No continuous human supervision needed',
          ],
        }}
      />

      {/* Travel booking example */}
      <Slide
        nav="Example"
        notes="Use the travel example to make A2A tangible. Walk through each bullet — each is a separate agent."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            A familiar problem
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(22px,4vh,38px)',
            }}
          >
            Booking a trip, <span className="accent-text">decomposed.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p
            className="lead"
            style={{ textAlign: 'center', maxWidth: 640, marginInline: 'auto', marginBottom: 28 }}
          >
            Instead of one AI managing everything, specialized agents handle
            individual tasks and communicate with each other.
          </p>
        </Reveal>
        <Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))',
              gap: 14,
              maxWidth: 880,
              marginInline: 'auto',
            }}
          >
            {[
              ['Search', 'Find flights'],
              ['Compare', 'Hotel prices'],
              ['Verify', 'Visa requirements'],
              ['Process', 'Payments'],
              ['Schedule', 'Transportation'],
              ['Notify', 'Confirmations'],
            ].map(([k, v]) => (
              <div key={k} style={{ ...card, padding: 18 }}>
                <div className="kicker accent-text" style={{ marginBottom: 8 }}>
                  {k}
                </div>
                <div style={{ fontSize: 15, color: 'var(--fg-muted)' }}>{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* Section 2 — What is an AI Agent */}
      <Section
        n={2}
        nav="AI Agents"
        notes="Transition to defining what an agent actually is."
        kicker="Part two"
        title={
          <>
            What is an <span className="accent-text">AI agent?</span>
          </>
        }
      />

      {/* What is an AI agent — definition + characteristics */}
      <Slide
        nav="Definition"
        notes="Define an agent clearly. Emphasize autonomy and decision-making — that's what separates agents from ordinary software."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Definition
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(22px,4vh,38px)',
            }}
          >
            An autonomous, intelligent entity.
          </h2>
        </Reveal>
        <Reveal>
          <p
            className="lead"
            style={{ textAlign: 'center', maxWidth: 680, marginInline: 'auto', marginBottom: 32 }}
          >
            An AI agent observes its environment, processes information, makes
            decisions, takes actions, learns from experience, and communicates
            with other agents.
          </p>
        </Reveal>
        <Reveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(130px, 100%), 1fr))',
              gap: 12,
              maxWidth: 820,
              marginInline: 'auto',
            }}
          >
            {[
              'Autonomy',
              'Intelligence',
              'Goal-oriented',
              'Learning',
              'Communication',
              'Collaboration',
              'Adaptability',
            ].map((c) => (
              <div
                key={c}
                style={{
                  ...card,
                  padding: '14px 16px',
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* Types of AI agents — Tabs */}
      <Slide
        nav="Agent types"
        notes="Click through the tabs one by one. Pause on Learning Agents — that's the bridge to modern AI."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Taxonomy
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px,3vh,30px)',
            }}
          >
            Five types of AI agents.
          </h2>
        </Reveal>
        <Reveal style={{ textAlign: 'center', maxWidth: 780, marginInline: 'auto' }}>
          <Tabs
            tabs={[
              {
                label: 'Simple Reflex',
                content: (
                  <p className="lead">
                    Operate using predefined rules without considering past
                    experiences. <span className="accent-text">Example:</span>{' '}
                    automatic door systems.
                  </p>
                ),
              },
              {
                label: 'Model-Based',
                content: (
                  <p className="lead">
                    Maintain an internal model of the environment to handle
                    partial observability.{' '}
                    <span className="accent-text">Example:</span> robot vacuum
                    cleaners.
                  </p>
                ),
              },
              {
                label: 'Goal-Based',
                content: (
                  <p className="lead">
                    Take actions to achieve specific objectives, evaluating
                    future states.{' '}
                    <span className="accent-text">Example:</span> navigation
                    systems.
                  </p>
                ),
              },
              {
                label: 'Utility-Based',
                content: (
                  <p className="lead">
                    Choose the best possible action by evaluating multiple
                    alternatives against a utility function.{' '}
                    <span className="accent-text">Example:</span> stock trading
                    systems.
                  </p>
                ),
              },
              {
                label: 'Learning',
                content: (
                  <p className="lead">
                    Improve their performance using historical data and feedback
                    over time. <span className="accent-text">Example:</span>{' '}
                    chatbots trained on user interactions.
                  </p>
                ),
              },
            ]}
          />
        </Reveal>
      </Slide>

      {/* Section 3 — A2A Communication */}
      <Section
        n={3}
        nav="A2A Defined"
        notes="Now we define the core concept."
        kicker="Part three"
        title={
          <>
            Agent-to-Agent <span className="accent-text">communication.</span>
          </>
        }
      />

      {/* Definition quote */}
      <Quote
        nav="Definition"
        notes="Read it slowly. Let the formal definition land before moving on."
        text="Agent-to-Agent Communication is the process through which autonomous intelligent agents exchange structured information to coordinate actions, solve problems, and accomplish shared goals."
        name="Working definition"
        role="Agent-to-Agent Communication"
      />

      {/* Need for A2A — hospital flow */}
      <Slide
        nav="Need"
        notes="Walk the hospital flow top to bottom. Each node is a separate specialized agent — that's the whole point."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Why we need it
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px,3vh,30px)',
            }}
          >
            Hospital management, <span className="accent-text">choreographed.</span>
          </h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 420, marginInline: 'auto' }}>
            <Timeline
              items={[
                { time: 'Arrive', title: 'Reception Agent', body: 'Patient arrives and is registered.' },
                { time: 'Schedule', title: 'Doctor Scheduling Agent', body: 'Assigns the right specialist.' },
                { time: 'Diagnose', title: 'Diagnosis Agent', body: 'Analyzes symptoms and history.' },
                { time: 'Test', title: 'Laboratory Agent', body: 'Orders and processes lab work.' },
                { time: 'Prescribe', title: 'Pharmacy Agent', body: 'Fills the prescribed medication.' },
                { time: 'Bill', title: 'Billing Agent', body: 'Processes insurance and payment.' },
                { time: 'Done', title: 'Patient receives treatment', body: 'All agents coordinated seamlessly.' },
              ]}
            />
          </div>
        </Reveal>
      </Slide>

      {/* Architecture */}
      <Bento
        nav="Architecture"
        notes="Don't read every tile — let them scan. Land on the Coordinator and Communication Layer."
        kicker="Architecture"
        title="The layers of an A2A system."
        tiles={[
          {
            k: 'User Layer',
            title: 'Entry point',
            body: 'Receives requests from users and external systems.',
            c: 6,
            r: 1,
            variant: 'accent',
          },
          {
            k: 'Coordinator Agent',
            title: 'The orchestrator',
            body: 'Analyzes requests and distributes subtasks to specialists.',
            c: 6,
            r: 2,
            variant: 'glow',
          },
          {
            k: 'Specialized Agents',
            title: 'Search · Database · Planning',
            body: 'Payment · Recommendation · Monitoring — each handles one domain.',
            c: 4,
            r: 1,
          },
          {
            k: 'Communication Layer',
            title: 'Routing & security',
            body: 'Message routing, authentication, protocol management.',
            c: 4,
            r: 1,
          },
          {
            k: 'Knowledge Base',
            title: 'Shared memory',
            body: 'Rules, historical data, and context accessible to all agents.',
            c: 4,
            r: 1,
          },
        ]}
      />

      {/* Working process — Steps */}
      <Steps
        nav="Working process"
        notes="Walk left to right. The key insight: the coordinator combines responses at step six."
        kicker="How it works"
        title="Seven steps from request to answer."
        items={[
          { title: 'Request', body: 'User sends a request to the system.' },
          { title: 'Analyze', body: 'Coordinator agent parses the request.' },
          { title: 'Divide', body: 'Tasks are split among specialized agents.' },
          { title: 'Communicate', body: 'Agents exchange information with each other.' },
          { title: 'Collect', body: 'Information is gathered from all agents.' },
          { title: 'Combine', body: 'Coordinator merges all responses together.' },
          { title: 'Deliver', body: 'The final answer is sent to the user.' },
        ]}
      />

      {/* Section 4 — Models, Protocols, Messages */}
      <Section
        n={4}
        nav="Communication"
        notes="New chapter — the mechanics of how agents talk."
        kicker="Part four"
        title={
          <>
            How agents <span className="accent-text">talk.</span>
          </>
        }
      />

      {/* Communication models */}
      <Slide
        nav="Models"
        notes="Four models, four trade-offs. Spend the most time on Peer-to-Peer and Hierarchical — they're the most common in practice."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Communication models
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(22px,4vh,38px)',
            }}
          >
            Four ways to coordinate.
          </h2>
        </Reveal>
        <Reveal>
          <div className="cols">
            {[
              {
                k: '01',
                t: 'Direct',
                d: 'One agent exchanges messages directly with another.',
                pros: 'Fast, simple, low overhead',
                cons: 'Less scalable',
              },
              {
                k: '02',
                t: 'Broadcast',
                d: 'One message is delivered to multiple agents at once.',
                pros: 'Efficient for notifications',
                cons: 'Network congestion risk',
              },
              {
                k: '03',
                t: 'Peer-to-Peer',
                d: 'Every agent communicates equally with no central authority.',
                pros: 'Highly distributed, no central failure',
                cons: 'Complex coordination',
              },
              {
                k: '04',
                t: 'Hierarchical',
                d: 'A manager agent supervises and delegates to worker agents.',
                pros: 'Better organization',
                cons: 'Single point of failure',
              },
            ].map((m) => (
              <SpotlightCard key={m.k}>
                <div
                  className="kicker accent-text"
                  style={{ marginBottom: 10 }}
                >
                  {m.k}
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(20px,2.2vw,26px)',
                    fontWeight: 600,
                    margin: '0 0 8px',
                  }}
                >
                  {m.t}
                </h3>
                <p
                  style={{
                    color: 'var(--fg-muted)',
                    fontSize: 14,
                    margin: '0 0 12px',
                    lineHeight: 1.5,
                  }}
                >
                  {m.d}
                </p>
                <div style={{ fontSize: 13, marginBottom: 4 }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>+ </span>
                  {m.pros}
                </div>
                <div style={{ fontSize: 13 }}>
                  <span style={{ color: 'var(--fg-faint)', fontWeight: 600 }}>- </span>
                  {m.cons}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* Communication protocols — Bento */}
      <Bento
        nav="Protocols"
        notes="Highlight gRPC for performance and MQTT for IoT — those are the differentiators."
        kicker="Protocols"
        title="Standard networking technologies."
        tiles={[
          {
            k: 'REST API',
            title: 'Simple & widely used',
            body: 'HTTP methods: GET, POST, PUT, DELETE. The lingua franca of the web.',
            c: 4,
            r: 1,
          },
          {
            k: 'WebSockets',
            title: 'Realtime & continuous',
            body: 'Multiplayer games, live dashboards, chat systems.',
            c: 4,
            r: 1,
            variant: 'accent',
          },
          {
            k: 'MQTT',
            title: 'Lightweight messaging',
            body: 'IoT devices, smart homes, industrial automation.',
            c: 4,
            r: 1,
          },
          {
            k: 'gRPC',
            title: 'High-performance binary',
            body: 'Faster than REST — built by Google for efficient communication.',
            c: 6,
            r: 1,
            variant: 'glow',
          },
          {
            k: 'Message Queues',
            title: 'Reliable & asynchronous',
            body: 'RabbitMQ, Apache Kafka — for large-scale distributed systems.',
            c: 6,
            r: 1,
          },
        ]}
      />

      {/* Message structure — Code window */}
      <Split
        nav="Message structure"
        notes="The structure is simple but deliberate — priority and status let agents triage. Point at the highlighted line."
        kicker="Message structure"
        title={
          <>
            Structured <span className="accent-text">messages.</span>
          </>
        }
        body="Agents exchange JSON messages with a sender, receiver, task, priority, status, and timestamp — enough context for any agent to act."
        media={
          <>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(120% 100% at 30% 20%, color-mix(in srgb, var(--primary) 16%, transparent), transparent 60%), var(--surface-2)',
              }}
            />
            <div style={{ position: 'relative', padding: 36, width: '100%' }}>
              <CodeWindow
                title="message.json"
                highlight={[3, 4]}
                code={`{
  "message_id": "1001",
  "sender": "SearchAgent",
  "receiver": "BookingAgent",
  "task": "Search Flights",
  "priority": "High",
  "status": "Pending",
  "timestamp": "2026-08-07T10:30:00Z"
}`}
              />
            </div>
          </>
        }
      />

      {/* Coordination strategies — Accordion */}
      <Slide
        nav="Coordination"
        notes="Open Cooperative first — it's the most intuitive. Only open others if the audience asks."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Coordination strategies
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px,3vh,30px)',
            }}
          >
            How agents work together.
          </h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 720, marginInline: 'auto' }}>
            <Accordion
              items={[
                {
                  title: 'Cooperative Coordination',
                  body: (
                    <p className="lead" style={{ fontSize: 16 }}>
                      Agents work together toward a common objective, sharing
                      information and dividing labor.{' '}
                      <span className="accent-text">Example:</span> disaster
                      rescue robots coordinating search patterns.
                    </p>
                  ),
                },
                {
                  title: 'Competitive Coordination',
                  body: (
                    <p className="lead" style={{ fontSize: 16 }}>
                      Agents compete for limited resources, each optimizing its
                      own outcome.{' '}
                      <span className="accent-text">Example:</span> stock trading
                      bots bidding against each other.
                    </p>
                  ),
                },
                {
                  title: 'Negotiation',
                  body: (
                    <p className="lead" style={{ fontSize: 16 }}>
                      Agents bargain before making decisions, reaching mutually
                      acceptable agreements.{' '}
                      <span className="accent-text">Example:</span> cloud
                      resource allocation across services.
                    </p>
                  ),
                },
                {
                  title: 'Auction-Based Coordination',
                  body: (
                    <p className="lead" style={{ fontSize: 16 }}>
                      Tasks are assigned through bidding — agents offer to handle
                      work at a proposed cost.{' '}
                      <span className="accent-text">Example:</span> delivery
                      robots bidding on packages by proximity.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </Reveal>
      </Slide>

      {/* Section 5 — Applications */}
      <Section
        n={5}
        nav="Applications"
        notes="The proof section — where A2A meets the real world."
        kicker="Part five"
        title={
          <>
            Real-world <span className="accent-text">applications.</span>
          </>
        }
      />

      {/* Applications — Tabs */}
      <Slide
        nav="Use cases"
        notes="Click through the tabs. Spend the most time on the domain most relevant to this audience."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Across industries
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px,3vh,30px)',
            }}
          >
            A2A in the wild.
          </h2>
        </Reveal>
        <Reveal style={{ textAlign: 'center', maxWidth: 820, marginInline: 'auto' }}>
          <Tabs
            tabs={[
              {
                label: 'Healthcare',
                content: (
                  <div style={{ textAlign: 'left', padding: '8px 0' }}>
                    <p className="lead" style={{ marginBottom: 14 }}>
                      Agents handle medical diagnosis, appointment scheduling,
                      lab report analysis, pharmacy management, and insurance
                      verification.
                    </p>
                  </div>
                ),
              },
              {
                label: 'Autonomous Vehicles',
                content: (
                  <div style={{ textAlign: 'left', padding: '8px 0' }}>
                    <p className="lead" style={{ marginBottom: 14 }}>
                      Navigation, obstacle detection, traffic, weather, and
                      vehicle control agents collaborate in real time.
                    </p>
                  </div>
                ),
              },
              {
                label: 'Smart Homes',
                content: (
                  <div style={{ textAlign: 'left', padding: '8px 0' }}>
                    <p className="lead" style={{ marginBottom: 14 }}>
                      Smart lights, thermostats, air conditioners, door locks,
                      and security cameras communicate autonomously.
                    </p>
                  </div>
                ),
              },
              {
                label: 'Finance',
                content: (
                  <div style={{ textAlign: 'left', padding: '8px 0' }}>
                    <p className="lead" style={{ marginBottom: 14 }}>
                      Fraud detection, credit scoring, trading systems, customer
                      support, and loan approval — each a specialized agent.
                    </p>
                  </div>
                ),
              },
              {
                label: 'E-Commerce',
                content: (
                  <div style={{ textAlign: 'left', padding: '8px 0' }}>
                    <p className="lead" style={{ marginBottom: 14 }}>
                      Search, recommendation, inventory, pricing, payment, and
                      delivery agents form a full commerce pipeline.
                    </p>
                  </div>
                ),
              },
              {
                label: 'Software Dev',
                content: (
                  <div style={{ textAlign: 'left', padding: '8px 0' }}>
                    <p className="lead" style={{ marginBottom: 14 }}>
                      Modern AI coding platforms use agents for planning, writing,
                      reviewing, testing, debugging, and documenting code.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </Reveal>
      </Slide>

      {/* Advantages — StatGrid */}
      <StatGrid
        nav="Advantages"
        notes="Land on fault tolerance and parallel execution — those are the headline benefits."
        kicker="Advantages"
        title="Why multi-agent wins."
        stats={[
          {
            value: <CountUp to={9} />,
            label: 'Core advantages',
            caption: 'from parallel execution to resource sharing',
          },
          {
            value: 'Parallel',
            label: 'Execution',
            caption: 'agents work simultaneously, not sequentially',
          },
          {
            value: 'High',
            label: 'Scalability',
            caption: 'add agents without rewriting the system',
          },
          {
            value: 'Modular',
            label: 'Design',
            caption: 'each agent is independent and replaceable',
          },
          {
            value: 'Fault-tolerant',
            label: 'Reliability',
            caption: 'one agent failing does not break the system',
          },
          {
            value: 'Shared',
            label: 'Resources',
            caption: 'knowledge, data, and services pooled',
          },
        ]}
      />

      {/* Challenges */}
      <Slide
        nav="Challenges"
        notes="Be honest about the challenges — it builds credibility. Security and trust are the hardest open problems."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Open problems
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(22px,4vh,38px)',
            }}
          >
            It's not all solved.
          </h2>
        </Reveal>
        <Reveal>
          <div className="cols">
            {[
              {
                k: '01',
                t: 'Security',
                d: 'Messages may be intercepted or modified. Mitigated with encryption, authentication, and secure APIs.',
              },
              {
                k: '02',
                t: 'Privacy',
                d: 'Sensitive information must remain protected as it flows between agents.',
              },
              {
                k: '03',
                t: 'Synchronization',
                d: 'Agents must remain consistent while sharing rapidly changing information.',
              },
              {
                k: '04',
                t: 'Trust',
                d: 'Agents must determine whether information from another agent is reliable.',
              },
              {
                k: '05',
                t: 'Scalability',
                d: 'Communication becomes more difficult as the number of agents grows.',
              },
              {
                k: '06',
                t: 'Overhead',
                d: 'Too many messages can reduce overall system performance.',
              },
            ].map((c) => (
              <SpotlightCard key={c.k}>
                <div
                  className="kicker accent-text"
                  style={{ marginBottom: 10 }}
                >
                  {c.k}
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(18px,2vw,22px)',
                    fontWeight: 600,
                    margin: '0 0 8px',
                  }}
                >
                  {c.t}
                </h3>
                <p
                  style={{
                    color: 'var(--fg-muted)',
                    fontSize: 14,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {c.d}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* Future trends — Marquee */}
      <Slide
        center
        nav="Future"
        notes="Let the marquee scroll while you talk. Emphasize AI swarms and agentic ecosystems — those are the buzziest."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 16 }}>
            What's coming
          </div>
          <h2
            className="headline"
            style={{ marginInline: 'auto', marginBottom: 36 }}
          >
            The next <span className="accent-text">frontier.</span>
          </h2>
        </Reveal>
        <Reveal>
          <Marquee
            items={[
              'AI Swarms',
              'Multi-Agent Robotics',
              'Autonomous Enterprises',
              'Smart Factories',
              'Digital Twins',
              'Scientific Research Assistants',
              'Autonomous Space Exploration',
              'Collaborative Healthcare AI',
              'AI-Powered Governments',
              'Agentic AI Ecosystems',
            ]}
            duration={32}
          />
        </Reveal>
      </Slide>

      {/* Section 6 — Case study & conclusion */}
      <Section
        n={6}
        nav="Case study"
        notes="Final stretch. Bring it home with a concrete example."
        kicker="Part six"
        title={
          <>
            Case study & <span className="accent-text">conclusion.</span>
          </>
        }
      />

      {/* Case study — Travel booking */}
      <Slide
        nav="Travel booking"
        notes="Walk the flow top to bottom. The punchline: the coordinator combines everything into one travel plan."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Case study
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(18px,3vh,28px)',
            }}
          >
            "I want to travel from Hyderabad to Delhi next Friday."
          </h2>
        </Reveal>
        <Reveal>
          <p
            className="lead"
            style={{ textAlign: 'center', maxWidth: 580, marginInline: 'auto', marginBottom: 28 }}
          >
            The coordinator creates tasks and dispatches specialized agents.
          </p>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 480, marginInline: 'auto' }}>
            <Timeline
              items={[
                { time: 'Search', title: 'Find flights', body: 'Search Agent queries airlines.' },
                { time: 'Stay', title: 'Find hotels', body: 'Hotel Agent compares rates.' },
                { time: 'Weather', title: 'Get forecast', body: 'Weather Agent checks Delhi conditions.' },
                { time: 'Budget', title: 'Estimate expenses', body: 'Budget Agent totals the trip cost.' },
                { time: 'Pay', title: 'Complete booking', body: 'Payment Agent finalizes the transaction.' },
                { time: 'Confirm', title: 'Send confirmation', body: 'Notification Agent alerts the user.' },
              ]}
            />
          </div>
        </Reveal>
      </Slide>

      {/* Comparison table */}
      <Slide
        nav="Comparison"
        notes="Walk the rows top to bottom. The story: multi-agent trades complexity for everything else."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            Single-agent vs. multi-agent
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(22px,4vh,38px)',
            }}
          >
            The honest comparison.
          </h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 820, marginInline: 'auto' }}>
            <Comparison
              cols={['Feature', 'Single Agent', 'Multi-Agent (A2A)']}
              highlight={1}
              rows={[
                { label: 'Decision Making', values: ['One AI', 'Multiple agents'] },
                { label: 'Scalability', values: ['Limited', 'High'] },
                { label: 'Speed', values: ['Moderate', 'High (parallel)'] },
                { label: 'Fault Tolerance', values: ['Low', 'Higher'] },
                { label: 'Complexity', values: ['Lower', 'Higher'] },
                { label: 'Flexibility', values: ['Limited', 'High'] },
                { label: 'Collaboration', values: [false, true] },
              ]}
            />
          </div>
        </Reveal>
      </Slide>

      {/* Conclusion */}
      <Slide
        center
        nav="Conclusion"
        notes="Slow down. This is the takeaway — let it breathe before opening questions."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 20 }}>
            Conclusion
          </div>
          <h2
            className="display"
            style={{ fontSize: 'clamp(32px,5vw,60px)', marginInline: 'auto', maxWidth: '20ch' }}
          >
            The future of AI is <span className="accent-text">collaborative.</span>
          </h2>
        </Reveal>
        <Build at={1}>
          <p
            className="lead"
            style={{
              marginTop: 24,
              maxWidth: '46ch',
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            Rather than one powerful model, modern systems divide work among
            specialized agents that communicate, cooperate, and coordinate —
            improving efficiency, scalability, reliability, and adaptability
            across autonomous vehicles, healthcare, enterprise automation,
            robotics, and intelligent assistants.
          </p>
        </Build>
        <Build at={2}>
          <p
            className="subhead"
            style={{ marginTop: 20, color: 'var(--primary)' }}
          >
            A2A communication is foundational to the next generation of AI.
          </p>
        </Build>
      </Slide>

      {/* References */}
      <Slide
        nav="References"
        notes="Leave this on screen while taking questions. Don't read them aloud."
      >
        <Reveal>
          <div className="kicker" style={{ marginBottom: 12, textAlign: 'center' }}>
            References
          </div>
          <h2
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(24px,4vh,40px)',
            }}
          >
            Further reading.
          </h2>
        </Reveal>
        <Reveal>
          <div style={{ maxWidth: 680, marginInline: 'auto' }}>
            {[
              'Russell, S., & Norvig, P. Artificial Intelligence: A Modern Approach.',
              'Wooldridge, M. An Introduction to MultiAgent Systems.',
              'Jennings, N. R. Foundations of Multi-Agent Systems.',
              'FIPA (Foundation for Intelligent Physical Agents) standards.',
              'Research articles on Multi-Agent Systems, distributed AI, and Agentic AI.',
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 16,
                  padding: '14px 0',
                  borderBottom: '1px solid var(--hair-2)',
                  alignItems: 'baseline',
                }}
              >
                <span
                  className="kicker accent-text"
                  style={{ minWidth: 28, flexShrink: 0 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                  {r}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* Closing */}
      <Slide
        center
        nav="Thank you"
        notes="Make eye contact. Thank the audience and open the floor for questions."
      >
        <Reveal>
          <h2 className="display" style={{ fontSize: 'clamp(40px,7vw,96px)' }}>
            <span className="accent-text">Thank you.</span>
          </h2>
          <p className="subhead" style={{ marginTop: 16 }}>
            Questions &amp; discussion
          </p>
        </Reveal>
      </Slide>
    </Deck>
  );
}
