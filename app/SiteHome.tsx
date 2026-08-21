const agendaItems = [
  {
    number: "01",
    title: "Clear, dependable communication",
    text: "Weekly major-project updates, a concise monthly Board digest, plain-language reasons for significant decisions, and prompt notice when a target slips.",
  },
  {
    number: "02",
    title: "Financial discipline and foresight",
    text: "A multi-year reserve and capital roadmap, budget-versus-actual reporting, and careful review of borrowing, assessments, major contracts, and long-term risk.",
  },
  {
    number: "03",
    title: "Finish the facade. Control every project.",
    text: "Named project ownership, milestones, scope, budget, contractor accountability, risks, and schedule reporting - beginning with facade work and scaffolding removal.",
  },
  {
    number: "04",
    title: "Responsive, accountable management",
    text: "A two-business-day acknowledgment standard for routine inquiries, a visible escalation path, service tracking, and regular managing-agent performance review.",
  },
  {
    number: "05",
    title: "Protect property value",
    text: "Prioritize preventive maintenance, disciplined operations, curb appeal, and investments that keep 505 financially strong and competitive for current and future shareholders.",
  },
  {
    number: "06",
    title: "Fair rules and fact-based amenities",
    text: "Review renovation and sublet rules for consistency. Evaluate a gym, playroom, outdoor space, and other ideas through cost, safety, operations, and shareholder input.",
  },
  {
    number: "07",
    title: "Open governance and fair elections",
    text: "Quarterly forums, Zoom access, regular surveys, useful committees, equal candidate access, independent election procedures, and discussion of staggered terms and reasonable term limits.",
  },
  {
    number: "08",
    title: "A better everyday shareholder experience",
    text: "Consistent service, respectful treatment, proactive building updates, and decisions that balance long-time residents, growing families, flexibility, safety, and community.",
  },
];

const firstHundredDays = [
  "Publish the communication and response calendar",
  "Issue a facade and major-project status baseline",
  "Begin the reserve, capital, and vendor review",
  "Schedule the first hybrid shareholder forum",
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
    bio: "A licensed CPA, MBA, practicing attorney, business operator, and construction-business owner with experience in financial statements, budgeting, contracts, risk, contractor oversight, renovations, and cost control. Jon has committed 15 to 20 hours per week to Board service.",
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
    title: "Full one-page shareholder platform",
    meta: "8 priorities / print-ready",
    href: "./downloads/505-shareholders-one-page-agenda.pdf",
    text: "The expanded survey-driven agenda, first 100 days, and coordinated-vote message.",
  },
  {
    title: "Shareholder-supported slate proxy",
    meta: "1 page / campaign proxy",
    href: "./downloads/505-shareholder-slate-proxy.pdf",
    text: "Appoints the slate proxy holder for the 2026 Annual Meeting and any adjournments. Read the date note before signing.",
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
      <a href="#proxy">Get a proxy</a>
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
              A survey-driven platform for stronger finances, better project
              control, responsive management, open governance, and a building
              that protects quality of life and long-term value.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proxy">Get the campaign proxy</a>
              <a className="button button-secondary" href="#agenda">Read the full agenda</a>
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
            <p className="confirm-note">Proxy appointments are available. Text 213-207-6661 to schedule.</p>
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
              <h2>Eight priorities. A 100-day start.</h2>
              <p className="section-deck">
                The expanded platform reflects the full survey: communication,
                finances, facade and capital projects, management responsiveness,
                property value, fair rules, useful amenities, open elections,
                and everyday quality of life.
              </p>
              <a className="text-link light-link" href="./downloads/505-shareholders-one-page-agenda.pdf">Download the full one-page platform <span aria-hidden="true">→</span></a>
            </div>
            <div className="agenda-grid">
              {agendaItems.map((item) => (
                <article className="agenda-item" key={item.number}>
                  <span>{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
            <div className="first-hundred">
              <div><span>First 100 days</span><strong>Put the new standard in writing.</strong></div>
              <ol>
                {firstHundredDays.map((item, index) => (
                  <li key={item}><span>0{index + 1}</span>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="proxy-section" id="proxy">
          <div className="proxy-shell">
            <div className="proxy-copy">
              <p className="eyebrow">A coordinated vote</p>
              <h2>Keep all nine votes aligned.</h2>
              <p className="proxy-deck">
                If your goal is a coordinated change slate, mixing candidates
                across competing slates fragments that support. Voting for the
                full shareholder-supported slate - or appointing its proxy
                holder - keeps all nine choices aligned.
              </p>
              <div className="proxy-actions">
                <a className="button button-primary" href="./downloads/505-shareholder-slate-proxy.pdf">Download the campaign proxy</a>
                <a className="button button-secondary" href="sms:+12132076661">Text for a proxy appointment</a>
              </div>
            </div>
            <aside className="proxy-note">
              <span className="proxy-stamp">Read before signing</span>
              <h3>About the date on this form</h3>
              <p>
                The campaign proxy displays the original June 18, 2026 meeting
                date. Its body appoints Jonathan Margareten for the 2026 Annual
                Meeting and &quot;any and all adjournments thereof.&quot; The organizers
                are prepared to use this form for September 23.
              </p>
              <p>
                Text us before signing so we can walk through the form, arrange
                collection, and help avoid an incomplete submission. The co-op&apos;s
                official meeting notice and election procedures control.
              </p>
            </aside>
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
              <article className={candidate.name === "Jon Margareten" ? "candidate-card candidate-featured" : "candidate-card"} key={candidate.name}>
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
          <article className="jon-spotlight">
            <div>
              <p className="eyebrow">From Jon Margareten&apos;s candidate application</p>
              <h3>Finance, law, operations, and hands-on construction.</h3>
            </div>
            <div className="credential-grid">
              <span><strong>CPA + MBA</strong>Budgets, reserves, controls, and strategic planning</span>
              <span><strong>Practicing attorney</strong>Contracts, governance, compliance, and risk</span>
              <span><strong>Business owner</strong>Teams, vendors, operations, and accountability</span>
              <span><strong>Construction experience</strong>Bids, scope, scheduling, renovations, and cost control</span>
            </div>
            <p className="application-note">Jon has committed 15 to 20 hours per week to Board service. The raw application is not posted because it contains personal information and a signature.</p>
          </article>
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
            <li><span>1</span><div><h3>Review the full platform and slate</h3><p>Read the expanded eight-priority agenda, biographies, survey, and straw poll before deciding.</p></div></li>
            <li><span>2</span><div><h3>Download the campaign proxy</h3><p>The form displays the original June 18 date and appoints the slate proxy holder for the 2026 Annual Meeting and any adjournments. Text us before signing so we can answer questions and arrange collection.</p></div></li>
            <li><span>3</span><div><h3>Keep the full slate aligned</h3><p>If coordinated change is your goal, support all nine shareholder-backed candidates rather than fragmenting the slate across competing individual choices.</p></div></li>
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
            <details><summary>Can I use the downloadable campaign proxy?</summary><p>The organizers are prepared to collect it for the September 23 Annual Meeting. The header shows the original June 18 date, while the body appoints Jonathan Margareten for the 2026 Annual Meeting and any adjournments. Text 213-207-6661 before signing so the organizers can walk through the form. Official co-op procedures control.</p></details>
            <details><summary>Why vote the full slate instead of mixing candidates?</summary><p>This is a coordinated-slate recommendation. If your objective is a change majority with continuity, supporting all nine shareholder-backed candidates keeps that coalition aligned. Mixing candidates across competing slates fragments the coordinated support; every shareholder should still make an informed choice.</p></details>
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

      <div className="sticky-proxy" aria-label="Campaign proxy actions">
        <span><strong>Ready to vote?</strong> Keep all nine aligned.</span>
        <a href="./downloads/505-shareholder-slate-proxy.pdf">Get proxy</a>
        <a href="sms:+12132076661">Text us</a>
      </div>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">505</span><span>Shareholders</span></a>
        <p>Independent shareholder information for the 2026 Board of Directors election.</p>
        <div><a href="#top">Back to top ↑</a><a href="sms:+12132076661">Text 213-207-6661</a></div>
      </footer>
    </main>
  );
}
