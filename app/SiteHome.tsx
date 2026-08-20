const agendaItems = [
  {
    number: "01",
    title: "Communicate on a dependable cadence",
    text: "Weekly updates on major capital projects and a concise monthly shareholder summary of non-confidential priorities, decisions, timelines, and next steps.",
  },
  {
    number: "02",
    title: "Put an owner behind every major project",
    text: "A named board liaison or project lead, with scope, milestones, budget versus actual, schedule changes, risks, and accountability clearly reported.",
  },
  {
    number: "03",
    title: "Plan beyond next year's budget",
    text: "A multi-year capital plan and reserve roadmap that explains the effect of major work, assessments, borrowing, and significant asset decisions.",
  },
  {
    number: "04",
    title: "Set clear service standards",
    text: "Published response targets for the managing agent, including a two-business-day acknowledgment for routine inquiries and a clear escalation path.",
  },
  {
    number: "05",
    title: "Open the doors to participation",
    text: "Quarterly shareholder forums with in-person and Zoom access, regular surveys, useful committees, and an understandable, open candidate process.",
  },
  {
    number: "06",
    title: "Decide with facts and shareholder input",
    text: "Evaluate rules, amenities, and shared-space proposals through cost, safety, operations, property value, and building-wide input - without predetermined outcomes.",
  },
];

const candidates = [
  {
    name: "Jonathan Berns",
    type: "New voice",
    role: "Finance, fiduciary oversight, governance",
    bio: "An investment banker and CFA with more than ten years of experience advising companies and investors on strategic and financing matters. Jonathan has also served for five years on a nonprofit board.",
  },
  {
    name: "Philip Braverman",
    type: "Continuity",
    role: "Tax, finance, institutional knowledge",
    bio: "A shareholder since 1995, tax attorney, and longtime finance professional. Philip has served on the co-op board for fifteen years across two periods of service.",
  },
  {
    name: "Robert Brinberg",
    type: "New voice",
    role: "Operations, capital markets, communications",
    bio: "A nine-year resident with nearly thirty years of experience building and operating financial-services firms, overseeing finance, compliance, people, technology, and corporate communications.",
  },
  {
    name: "Damian Britt",
    type: "New voice",
    role: "Risk, forecasting, stakeholder alignment",
    bio: "A shareholder since 2016 and investment-banking managing director with more than twenty years of experience in credit risk, financing options, forecasting, and stakeholder negotiations.",
  },
  {
    name: "Mark Hasson",
    type: "Continuity",
    role: "Treasury, financial stewardship, continuity",
    bio: "A resident for more than thirty-nine years and board treasurer for twenty-three years, with a career in senior financial roles at major media companies.",
  },
  {
    name: "Jon Margareten",
    type: "New voice",
    role: "Finance, law, construction, governance",
    bio: "A CPA, MBA, practicing attorney, business operator, and construction-business owner whose work spans financial strategy, compliance, project management, contractor oversight, and cost control.",
  },
  {
    name: "Alison Schlesinger",
    type: "Continuity",
    role: "Strategy, education, board experience",
    bio: "A resident for more than twenty years with experience at McKinsey, Avon, and Sarah Lawrence College. Alison has served on the co-op board for more than twelve years.",
  },
  {
    name: "Brett Silverstein",
    type: "New voice",
    role: "Technology, process, practical execution",
    bio: "A resident since 2023 with fifteen years in financial services, including more than a decade at Bloomberg, where he helps investors deliver time-sensitive system and process changes.",
  },
  {
    name: "Charles Spielholz, PhD",
    type: "Continuity",
    role: "Science, diligence, institutional knowledge",
    bio: "A resident since 1996 and biomedical research scientist focused on cancer. Charles has served as secretary of the co-op since 1999.",
  },
];

const documents = [
  {
    title: "One-page shareholder agenda",
    meta: "1 page / print-ready",
    href: "./downloads/505-shareholders-one-page-agenda.pdf",
    text: "The six commitments in one concise handout.",
  },
  {
    title: "Shareholder survey results",
    meta: "April 2026 / 55 responses",
    href: "./downloads/505-shareholder-survey-results.pdf",
    text: "The full methodology, charts, priorities, and open-ended themes.",
  },
  {
    title: "Straw poll results",
    meta: "May 2026 / 39 valid apartments",
    href: "./downloads/505-straw-poll-results.pdf",
    text: "How the shareholder-supported mix of new voices and continuity was selected.",
  },
  {
    title: "Candidate biographies",
    meta: "9 candidates / 2 pages",
    href: "./downloads/505-shareholder-supported-slate-bios.pdf",
    text: "The complete biographies supplied for the shareholder-supported slate.",
  },
  {
    title: "A shareholder's account",
    meta: "Nominating process / 2 pages",
    href: "./downloads/shareholder-letter-on-the-nominating-process.pdf",
    text: "One shareholder's documented experience with the 2026 nominating process.",
  },
];

function NavigationLinks() {
  return (
    <>
      <a href="#why">Why change</a>
      <a href="#agenda">Our agenda</a>
      <a href="#slate">The slate</a>
      <a href="#materials">Materials</a>
      <a href="#election">How to vote</a>
    </>
  );
}

export function SiteHome() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="505 Shareholders home">
          <span className="brand-mark">505</span>
          <span>Shareholders</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <NavigationLinks />
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <div><NavigationLinks /></div>
        </details>
      </header>

      <div id="content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Independent shareholder information</p>
            <h1>A clear plan for a stronger 505.</h1>
            <p className="hero-deck">
              Understand the shareholder-supported board slate, the priorities
              behind it, and what to do before the September 23 election at
              East River House.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#agenda">Read the agenda</a>
              <a className="button button-secondary" href="#slate">Meet the slate</a>
            </div>
            <p className="independent-note">
              Prepared by shareholders of 79th Street East Owners, Inc. This is
              not the co-op&apos;s official website and is independent of the current
              Board and managing agent.
            </p>
          </div>

          <aside className="election-card" aria-label="Annual meeting details">
            <p className="card-label">2026 Annual Meeting</p>
            <p className="election-date"><span>SEP</span>23</p>
            <p className="election-year">Wednesday, September 23, 2026</p>
            <div className="rule" />
            <p>East River House</p>
            <p>505 East 79th Street<br />New York, NY 10075</p>
            <p className="confirm-note">Confirm the meeting time and voting instructions in the co-op&apos;s official notice.</p>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Survey highlights">
          <div><strong>55</strong><span>anonymous survey responses</span></div>
          <div><strong>74%</strong><span>rated board communication 1 or 2 out of 5</span></div>
          <div><strong>89%</strong><span>want greater visibility into board decisions</span></div>
          <p>April 2026 anonymous Google Form shared in the shareholder WhatsApp group. Respondents were self-selected; results are directional, not randomized.</p>
        </section>

        <section className="section why-section" id="why">
          <div className="section-intro">
            <p className="eyebrow">Why shareholders organized</p>
            <h2>The building has strengths. Shareholders want a better operating rhythm.</h2>
            <p className="section-deck">
              The case for change is not that everything is broken. It is that
              communication, long-term planning, project accountability, and
              meaningful participation should match the value of our homes and
              the scale of our shared responsibilities.
            </p>
          </div>
          <div className="signal-grid" aria-label="Additional survey findings">
            <article><strong>70%</strong><h3>Board communication</h3><p>Selected it as the leading opportunity for improvement.</p></article>
            <article><strong>55%</strong><h3>Managing-agent communication</h3><p>Selected it as an area with significant room to improve.</p></article>
            <article><strong>51%</strong><h3>Financial management</h3><p>Named it among the most important issues facing the co-op.</p></article>
            <article><strong>49%</strong><h3>Capital planning</h3><p>Prioritized capital projects, planning, and board transparency.</p></article>
          </div>
          <div className="theme-row">
            <div>
              <span className="theme-kicker">25+ survey mentions</span>
              <h3>Finish the facade work and remove the scaffolding</h3>
            </div>
            <div>
              <span className="theme-kicker">30+ survey mentions</span>
              <h3>Respond to emails, calls, and shareholder inquiries</h3>
            </div>
            <div>
              <span className="theme-kicker">Recurring discussion theme</span>
              <h3>Give major projects regular, useful progress updates</h3>
            </div>
          </div>
          <p className="context-note">
            Survey counts come from the published April 2026 results. Months of
            private shareholder discussion reinforced the same themes; no names,
            apartment numbers, private messages, or informal-chat percentages are
            published here.
          </p>
        </section>

        <section className="agenda-section" id="agenda">
          <div className="section section-dark">
            <div className="section-intro agenda-intro">
              <p className="eyebrow">The shareholder agenda</p>
              <h2>Six commitments that can be measured.</h2>
              <p className="section-deck">
                This agenda is deliberately practical. It improves how the co-op
                listens, plans, communicates, and follows through without
                discarding the experience or stability that already serve 505.
              </p>
              <a className="text-link light-link" href="./downloads/505-shareholders-one-page-agenda.pdf">Download the one-page agenda <span aria-hidden="true">→</span></a>
            </div>
            <div className="agenda-grid">
              {agendaItems.map((item) => (
                <article className="agenda-item" key={item.number}>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section slate-section" id="slate">
          <div className="section-intro slate-intro">
            <p className="eyebrow">The shareholder-supported slate</p>
            <h2>Five new voices. Four experienced directors. One shared standard.</h2>
            <p className="section-deck">
              The May straw poll counted one vote per apartment and produced 39
              valid apartment votes. The resulting slate pairs new financial,
              operating, legal, technology, and construction experience with
              continuity from four current directors.
            </p>
          </div>
          <div className="candidate-grid">
            {candidates.map((candidate) => (
              <article className="candidate-card" key={candidate.name}>
                <div className="candidate-topline">
                  <span className={candidate.type === "New voice" ? "pill pill-new" : "pill"}>{candidate.type}</span>
                  <span className="candidate-initials" aria-hidden="true">{candidate.name.split(" ").slice(0,2).map((part) => part[0]).join("")}</span>
                </div>
                <h3>{candidate.name}</h3>
                <p className="candidate-role">{candidate.role}</p>
                <p>{candidate.bio}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="./downloads/505-shareholder-supported-slate-bios.pdf">Read the supplied candidate biographies <span aria-hidden="true">→</span></a>
        </section>

        <section className="materials-section" id="materials">
          <div className="section">
            <div className="section-intro materials-intro">
              <p className="eyebrow">Source materials</p>
              <h2>Read the evidence. Make your own judgment.</h2>
              <p className="section-deck">
                These are the campaign materials behind the agenda and slate.
                The private WhatsApp export, resident contact details, bylaws,
                and proprietary lease are intentionally not published here.
              </p>
            </div>
            <div className="document-list">
              {documents.map((doc, index) => (
                <a className="document-card" href={doc.href} key={doc.title}>
                  <span className="document-number">0{index + 1}</span>
                  <span className="document-copy"><strong>{doc.title}</strong><small>{doc.meta}</small><span>{doc.text}</span></span>
                  <span className="document-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section election-section" id="election">
          <div className="election-heading">
            <p className="eyebrow">How to participate</p>
            <h2>Be ready for September 23.</h2>
          </div>
          <ol className="steps">
            <li><span>1</span><div><h3>Review the slate and agenda</h3><p>Read the biographies, survey, straw poll, and six commitments before voting.</p></div></li>
            <li><span>2</span><div><h3>Watch for current election materials</h3><p>The June proxy in the source folder predates the postponed meeting, so it is not posted here. Use only the current September materials and instructions when they are distributed.</p></div></li>
            <li><span>3</span><div><h3>Attend or submit the current proxy</h3><p>Follow the official meeting notice and the instructions on the proxy you choose. If you have questions about the shareholder-supported slate, contact the organizers.</p></div></li>
          </ol>
          <div className="election-cta">
            <div><span>Annual Meeting</span><strong>September 23, 2026</strong><p>Official time and meeting instructions to be confirmed in the co-op notice.</p></div>
            <a className="button button-coral" href="sms:+12132076661">Text 213-207-6661</a>
          </div>
        </section>

        <section className="section faq-section" id="questions">
          <div className="section-intro faq-intro">
            <p className="eyebrow">Common questions</p>
            <h2>Know exactly what this site is - and is not.</h2>
          </div>
          <div className="faq-list">
            <details open><summary>Is this the official website of East River House?</summary><p>No. This is independent material prepared by shareholders to explain the shareholder-supported slate and agenda. Official meeting and voting instructions come from the co-op.</p></details>
            <details><summary>Is the slate proposing a complete board replacement?</summary><p>No. The nine-person slate includes five new candidates and four current directors selected for continuity through the May shareholder straw poll.</p></details>
            <details><summary>Where do the percentages come from?</summary><p>They come from an anonymous April 2026 Google Form with 55 self-selected responses from members of the shareholder WhatsApp group. The results are directional, not a randomized survey of every shareholder.</p></details>
            <details><summary>Why is there no proxy download?</summary><p>The available proxy was created for the earlier June meeting. Because the annual meeting moved to September 23, posting that form could create confusion. This site will not present a stale proxy as current.</p></details>
            <details><summary>Does the agenda commit to a gym, playroom, or changed sublet rules?</summary><p>No. It commits to a transparent process: define the proposal, show the cost and operational effect, collect building-wide input, and decide without a predetermined outcome.</p></details>
          </div>
        </section>

        <section className="building-note" aria-label="About the building">
          <div>
            <p className="eyebrow">Our shared home</p>
            <h2>East River House</h2>
            <p>
              505 East 79th Street is a 209-residence Yorkville co-op built in
              1963 and designed by architect Philip Birnbaum. Its scale,
              history, staff, and long-term value deserve thoughtful,
              accountable stewardship.
            </p>
            <a className="text-link" href="https://streeteasy.com/building/east-river-house" target="_blank" rel="noreferrer">View the public building profile <span aria-hidden="true">↗</span></a>
          </div>
          <div className="building-facts" aria-label="Building facts"><span><strong>1963</strong>built</span><span><strong>209</strong>residences</span><span><strong>19</strong>stories</span></div>
        </section>
      </div>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">505</span><span>Shareholders</span></a>
        <p>Independent shareholder information for the 2026 Board of Directors election.</p>
        <div><a href="#top">Back to top ↑</a><a href="sms:+12132076661">Text 213-207-6661</a></div>
      </footer>
    </main>
  );
}
