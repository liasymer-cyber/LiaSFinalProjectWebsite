import './App.css'

function Nav() {
  return (
    <nav className="nav">
      <span className="nav-logo">Lia Symer · QSS 20</span>
      <div className="nav-links">
        <a href="#question">Question</a>
        <a href="#data">Data</a>
        <a href="#methods">Methods</a>
        <a href="#results">Results</a>
        <a href="#takeaway">Takeaway</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-tag">QSS 20 · Dartmouth College · 2026</div>
      <h1>#MeToo, Reporting,<br /><span>and Media Sentiment</span></h1>
      <p className="hero-sub">
        Did the #MeToo movement change how sexual violence is reported to police,
        and how the news covers it? A quantitative analysis of FBI crime data
        and 68,000 news headlines across 2014–2019.
      </p>
      <div className="hero-meta">
        <div className="hero-meta-item">
          <span className="hero-meta-num">+16.4%</span>
          <span className="hero-meta-label">rise in rape reporting</span>
        </div>
        <div className="hero-meta-divider" />
        <div className="hero-meta-item">
          <span className="hero-meta-num">68k</span>
          <span className="hero-meta-label">headlines analyzed</span>
        </div>
        <div className="hero-meta-divider" />
        <div className="hero-meta-item">
          <span className="hero-meta-num">+5.7</span>
          <span className="hero-meta-label">DiD estimate (per 100k)</span>
        </div>
      </div>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#question">Explore the Research</a>
        <a className="btn btn-outline" href="https://github.com/liasymer-cyber" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </header>
  )
}

function Question() {
  return (
    <section id="question">
      <div className="section-label">The Question</div>
      <h2 className="section-title">Did this movement actually change how the media frames sexual violence, and did it correspond to changes in official rape reporting crime statistics?</h2>
      <p className="section-desc">
        Sexual violence is one of the most under-reported crimes in the U.S. Reporting rates
        are shaped not just by the occurrence of assaults, but by social attitudes toward
        survivors. Media framing can affect whether survivors feel believed, supported, and
        willing to come forward.
      </p>
      <p className="section-desc" style={{ marginTop: '1rem' }}>
        The #MeToo movement went viral in October 2017, following coverage of Harvey
        Weinstein's misconduct. Within weeks, millions had used the hashtag, survivors came
        forward in unprecedented numbers, and news outlets dramatically increased their
        coverage. <strong style={{ color: 'var(--text-heading)' }}>But did any of it leave a measurable statistical trace?</strong>
      </p>
      <div className="q-grid">
        <div className="q-card">
          <div className="q-num">Q1</div>
          <div>
            <p>Did <strong>reported rape rates</strong> across U.S. states change between 2014 and 2019, spanning the #MeToo inflection point?</p>
          </div>
        </div>
        <div className="q-card">
          <div className="q-num">Q2</div>
          <div>
            <p>Did the <strong>sentiment of news headlines</strong> about sexual assault shift after October 2017, toward less negative or more survivor-centered framing?</p>
          </div>
        </div>
        <div className="q-card">
          <div className="q-num">Q3</div>
          <div>
            <p>Did rape reporting rise <strong>more than other violent crimes</strong> after October 2017 , isolating a MeToo-specific effect from general trends?</p>
          </div>
        </div>
      </div>
      <div className="context-box">
        <div className="context-box-title">Prior Research Context</div>
        <p>
          One past study found #MeToo had a causal influence on sex-crime reporting in
          the first three months after October 2017. A thematic review of 41 articles
          found that rape myths and victim-blaming language remained widespread even
          after the movement. Systematic, quantitative analysis of sentiment across the
          #MeToo inflection point remained limited , this project extends that work.
        </p>
      </div>
    </section>
  )
}

function Data() {
  return (
    <section id="data">
      <div className="section-label">The Data</div>
      <h2 className="section-title">Two sources, two lenses</h2>
      <p className="section-desc">
        This project combines official crime statistics with large-scale text data to
        study both behavioral and discursive effects of the movement.
      </p>
      <div className="two-col" style={{ marginTop: '2.5rem' }}>
        <div className="data-card">
          <div className="data-card-icon">📊</div>
          <h3>FBI Uniform Crime Reports</h3>
          <p>
            Annual .xls files for all 50 states, 2014–2019. Uses rape rate per
            100,000 residents. Analysis stays within the post-2013 revised
            definition window (the FBI expanded its rape definition in 2013,
            making pre-2014 comparisons unreliable).
          </p>
          <div className="tag-list">
            <span className="tag">500 state-years</span>
            <span className="tag">50 states</span>
            <span className="tag">2014–2019</span>
          </div>
          <div className="data-limit">
            <span className="data-limit-label">Key limitation:</span>
            UCR captures reported crimes only. Estimates suggest only 20–30% of rapes are reported to police.
          </div>
        </div>
        <div className="data-card">
          <div className="data-card-icon">📰</div>
          <h3>MediaCloud Headlines</h3>
          <p>
            Indexed news article headlines from thousands of U.S. outlets,
            filtered to Oct 2016–Oct 2018 using 14 keyword patterns (rape,
            #MeToo, harassment, etc.), yielding 67,997 matching headlines out
            of 470,225 total. For LLM processing, a random sample of
            2,500 pre- and 2,500 post-MeToo headlines was drawn.
          </p>
          <div className="tag-list">
            <span className="tag">~68k headlines</span>
            <span className="tag">Oct 2016–Oct 2018</span>
            <span className="tag">National outlets</span>
          </div>
          <div className="data-limit">
            <span className="data-limit-label">Key limitation:</span>
            Headline sentiment alone does not capture full article tone; important context may not be detectable from a headline.
          </div>
        </div>
      </div>

      <div className="var-table-wrap">
        <div className="var-table-title">Key Variable Definitions</div>
        <table className="var-table">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Rape Rate per 100k', 'FBI-reported rape rate per 100,000 residents'],
              ['Area', 'State where incident was reported'],
              ['Year', '2014–2019'],
              ['compound', 'VADER compound sentiment score (−1 to +1) for each headline'],
              ['llmscore', 'LLM (llama3.2) sentiment score (−1 to +1); −1 = very negative/victim-blaming, +1 = empowering/survivor-centered'],
              ['before', 'Oct 17, 2016 – Oct 16, 2017 (pre-#MeToo period)'],
              ['after', 'Oct 17, 2017 – Oct 16, 2018 (post-#MeToo period)'],
              ['crime_type', 'One of: rape, murder, robbery, aggravated_assault (DiD)'],
              ['is_rape', '1 if crime_type == rape, 0 otherwise , DiD treatment indicator'],
              ['post', '1 if year ≥ 2018 , DiD post-treatment indicator'],
            ].map(([v, d]) => (
              <tr key={v}>
                <td><code>{v}</code></td>
                <td>{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function Methods() {
  return (
    <section id="methods">
      <div className="section-label">The Methods</div>
      <h2 className="section-title">How the analysis was done</h2>
      <p className="section-desc">
        Data cleaning, two sentiment approaches, and two statistical tests , applied to
        crime data and headline data independently.
      </p>
      <div className="method-list">
        <div className="method-step">
          <div className="step-num">01</div>
          <div>
            <h3>FBI Data Cleaning</h3>
            <p>Each annual .xls file was loaded with <code>pd.read_excel()</code>, extracting state, year, population, and rape rate columns. Numeric footnote suffixes were stripped with regex; rows were filtered to exactly 50 states. Annual frames were stacked vertically with <code>pd.concat</code>.</p>
          </div>
        </div>
        <div className="method-step">
          <div className="step-num">02</div>
          <div>
            <h3>Headline Filtering</h3>
            <p>Four annual MediaCloud CSVs were concatenated and filtered by 14 keyword regex patterns across both title and URL fields, case-insensitively (<code>\brape\b</code>, <code>\bmetoo\b</code>, <code>\bharassment\b</code>, etc.). 115,525 matches from 470,225 total; further filtered to Oct 2016–Oct 2018 for analysis.</p>
          </div>
        </div>
        <div className="method-step">
          <div className="step-num">03</div>
          <div>
            <h3>VADER Sentiment</h3>
            <p>The default VADER lexicon was extended with 14 domain-specific terms to better capture sexual-assault reporting conventions , for example: <em>survivor: +1.0</em>, <em>brave: +2.0</em>, <em>alleged: −1.0</em>, <em>reckoning: +1.0</em>. Applied to all ~68k headlines; compound scores range from −1 to +1.</p>
          </div>
        </div>
        <div className="method-step">
          <div className="step-num">04</div>
          <div>
            <h3>LLM Sentiment (llama3.2 via Ollama)</h3>
            <p>A random sample of 2,500 pre- and 2,500 post-MeToo headlines were scored via the local Ollama API. Each headline was passed with a structured prompt asking the model to return a single float from −1 (victim-blaming/negative) to +1 (survivor-centered/empowering). Refusals were assigned −1.0 , the model rejected scoring headlines it deemed extremely negative.</p>
          </div>
        </div>
        <div className="method-step">
          <div className="step-num">05</div>
          <div>
            <h3>Statistical Tests</h3>
            <p>
              <strong style={{ color: 'var(--text-heading)' }}>Rape rate trend:</strong> Two-sample t-test comparing mean annual national rape rates for 2014–2016 vs. 2018–2019.
              <br /><br />
              <strong style={{ color: 'var(--text-heading)' }}>Sentiment shift:</strong> One-sided Mann-Whitney U test (non-parametric, appropriate for the skewed headline distributions) comparing scores before and after October 17, 2017. Effect size computed as rank-biserial correlation: r = 1 − 2U / (n₁n₂).
            </p>
          </div>
        </div>
        <div className="method-step">
          <div className="step-num">06</div>
          <div>
            <h3>Difference-in-Differences (DiD)</h3>
            <p>
              A long panel of four violent crime types (rape, murder, robbery, aggravated assault) across all 50 states was constructed. The FBI's removal of the legacy rape definition column starting in 2017 shifts robbery and aggravated assault left by two column positions; column indices are determined dynamically per file to recover consistent series across all years.
              <br /><br />
              The estimating equation is: <code>rate ~ post × is_rape + C(state_crime) + C(year)</code>, where <code>state_crime</code> is a state×crime-type fixed effect absorbing all time-invariant differences between states and crime types. The coefficient on <code>post × is_rape</code> captures the differential post-2017 change in rape reporting relative to the simultaneous change in other violent crimes. A murder-only robustness check and an event study (year × is_rape interactions, 2017 omitted as baseline) were also estimated. HC3 robust standard errors throughout.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const sentimentRows = [
  { method: 'VADER', before: '−0.69', after: '−0.59', shift: '+0.10', n: '20,249 / 47,748', p: '< 0.0001', r: '0.24' },
  { method: 'LLM (llama3.2)', before: '−0.80', after: '−0.30', shift: '+0.50', n: '2,500 / 2,500', p: '< 0.0001', r: '0.14' },
]

function Results() {
  return (
    <section id="results">
      <div className="section-label">The Results</div>
      <h2 className="section-title">Three significant findings</h2>

      {/* Finding 1 */}
      <div className="finding-card">
        <div className="finding-num">Finding 01: Crime Data</div>
        <h3>Reported rape rates rose 16.4% from 2014 to 2019</h3>
        <p>
          The mean national rape rate increased from 36.6 to 42.6 per 100,000 residents ,
          a 16.4% rise over five years. A two-sample t-test comparing 2014–2016
          against 2018–2019 yielded <strong>p = 0.018</strong>. The rise was broadly distributed
          across states rather than driven by a single outlier: Alaska consistently
          recorded the highest rates, while New Jersey remained among the lowest.
        </p>
        <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Rather than reflecting an increase in actual assaults, this rise likely reflects
          increased reporting , consistent with the hypothesis that #MeToo reduced stigma
          and encouraged survivors to come forward.
        </p>
        <div className="stat-row">
          <span className="stat-pill up">+16.4% (36.6 → 42.6 per 100k)</span>
          <span className="stat-pill sig">p = 0.018</span>
          <span className="stat-pill neutral">500 state-years</span>
        </div>
        <div className="figure-row">
          <div className="figure-item">
            <img src="/2014_rape_rate_by_state.png" alt="Reported rape rate by state in 2014" />
            <div className="figure-caption">2014 , Three years before #MeToo</div>
          </div>
          <div className="figure-item">
            <img src="/2019_rape_rate_by_state.png" alt="Reported rape rate by state in 2019" />
            <div className="figure-caption">2019 , Two years after #MeToo</div>
          </div>
        </div>
      </div>

      {/* Finding 2 , DiD */}
      <div className="finding-card" style={{ marginTop: '1.5rem' }}>
        <div className="finding-num">Finding 02: Difference-in-Differences</div>
        <h3>Rape reporting rose significantly more than other violent crimes after MeToo</h3>
        <p>
          Using murder, robbery, and aggravated assault as control outcomes , all facing
          the same macro reporting environment , the DiD estimate is <strong>+5.71 rapes per 100,000</strong> (p &lt; 0.001).
          A murder-only robustness check yields a consistent <strong>+4.15</strong> (p &lt; 0.001).
          Because other violent crimes serve as the counterfactual, this design controls for anything
          that affected crime reporting broadly (policing policy, economic shocks) and isolates
          the anomalous increase specific to rape.
        </p>
        <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          The parallel trends assumption was tested on 2014–2017 pre-treatment data and held:
          rape and other crime rates tracked together before MeToo (p = 0.29), supporting
          the validity of the design. Pre-treatment event study coefficients cluster near zero;
          the differential increase is concentrated in 2018–2019.
        </p>
        <div className="stat-row">
          <span className="stat-pill up">+5.71 per 100k (all crimes)</span>
          <span className="stat-pill up">+4.15 per 100k (murder only)</span>
          <span className="stat-pill sig">p &lt; 0.001 both specs</span>
          <span className="stat-pill neutral">1,200 state-crime-years</span>
        </div>

        <div className="table-wrap" style={{ marginTop: '1.5rem' }}>
          <div className="table-wrap-title">DiD estimates , rape vs. other violent crimes</div>
          <table>
            <thead>
              <tr>
                <th>Specification</th>
                <th>DiD coef. (per 100k)</th>
                <th>95% CI</th>
                <th>p-value</th>
                <th>R²</th>
                <th>N</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['All crimes (murder + robbery + agg. assault)', '+5.71', '[+4.30, +7.11]', '< 0.001 ***', '0.985', '1,200'],
                ['Murder only', '+4.15', '[+2.66, +5.64]', '< 0.001 ***', '0.980', '600'],
              ].map(([spec, coef, ci, p, r2, n]) => (
                <tr key={spec}>
                  <td style={{ color: 'var(--text-heading)', fontWeight: 500 }}>{spec}</td>
                  <td className="positive">{coef}</td>
                  <td>{ci}</td>
                  <td className="positive">{p}</td>
                  <td>{r2}</td>
                  <td>{n}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-note">
            Two-way FE DiD: rate ~ post × is_rape + state×crime FE + year FE. HC3 robust SEs.
            Pre-period parallel trends test: p = 0.29 (no divergence detected).
          </div>
        </div>

        <div className="figure-col" style={{ marginTop: '1.5rem' }}>
          <div className="figure-item">
            <img src="/did_metoo_rape_rates.png" alt="DiD analysis: crime rate trends and event study" style={{ maxWidth: '100%' }} />
            <div className="figure-caption">
              Left: All four violent crime rates indexed to 2014 = 100 , rape diverges upward after 2017.
              Right: Event study coefficients for rape relative to other violent crimes (baseline = 2017); pre-treatment estimates cluster near zero.
            </div>
          </div>
        </div>

        <div className="method-divergence" style={{ marginTop: '1.5rem' }}>
          <div className="method-divergence-title">Validity and caveats</div>
          <p>
            Aggravated assault is an imperfect control because some domestic violence cases
            overlap with sexual assault categorization , if MeToo also elevated assault
            reporting, the DiD understates the true rape effect, making the estimate
            conservative. Murder is the cleanest control (detected independent of victim
            reporting), and its consistent result (+4.15) provides reassurance. The design
            cannot fully rule out confounders coincident with October 2017 (e.g., Title IX
            policy changes, state-level legal reforms), but the combination of parallel
            pre-trends, consistent cross-specification results, and a theoretically motivated
            mechanism supports a cautiously causal interpretation.
          </p>
        </div>
      </div>

      {/* Finding 3 , Media Sentiment */}
      <div className="finding-card" style={{ marginTop: '1.5rem' }}>
        <div className="finding-num">Finding 03: Media Sentiment</div>
        <h3>#MeToo correlated with a shift toward less negative headlines</h3>
        <p>
          Both methods detected a statistically significant positive shift in headline tone
          after October 2017. VADER found a +0.10 improvement (≈ 14% from baseline);
          the LLM detected a larger +0.50 shift. Both time series show a clear inflection
          around October 5, 2017 (Weinstein reporting), with a secondary inflection at
          the Taylor Swift groping trial verdict (August 14, 2017).
        </p>
        <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Absolute scores remained substantially negative throughout , no cultural moment
          makes coverage of trauma "positive." The upward shift likely reflects more headlines
          emphasizing accountability or survivor testimony, rather than a change in the
          underlying subject matter.
        </p>
        <div className="stat-row">
          <span className="stat-pill up">VADER +0.10</span>
          <span className="stat-pill up">LLM +0.50</span>
          <span className="stat-pill sig">p &lt; 0.0001 both</span>
          <span className="stat-pill neutral">r = 0.24 (VADER) / 0.14 (LLM)</span>
        </div>

        <div className="table-wrap" style={{ marginTop: '1.5rem' }}>
          <div className="table-wrap-title">Mean sentiment before and after #MeToo, by method</div>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Before</th>
                <th>After</th>
                <th>Shift</th>
                <th>N (before / after)</th>
                <th>p-value</th>
                <th>r</th>
              </tr>
            </thead>
            <tbody>
              {sentimentRows.map(row => (
                <tr key={row.method}>
                  <td style={{ color: 'var(--text-heading)', fontWeight: 500 }}>{row.method}</td>
                  <td className="negative">{row.before}</td>
                  <td className="negative">{row.after}</td>
                  <td className="positive">{row.shift}</td>
                  <td>{row.n}</td>
                  <td className="positive">{row.p}</td>
                  <td>{row.r}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="table-note">
            Positive values indicate more empowering/survivor-centered framing; negative values indicate more victim-blaming framing.
            Mann-Whitney U test, one-sided. All coverage remained net-negative throughout the period.
          </div>
        </div>

        <div className="figure-col">
          <div className="figure-item">
            <img src="/meanheadlinesentimentvader.png" alt="Mean headline sentiment over time using VADER" />
            <div className="figure-caption">Mean headline sentiment over time , VADER analysis (n ≈ 68k)</div>
          </div>
          <div className="figure-item">
            <img src="/meanheadlinesentimentllm.png" alt="Mean headline sentiment over time using LLM" />
            <div className="figure-caption">Mean headline sentiment over time , LLM analysis (llama3.2, n = 5,000 sample)</div>
          </div>
        </div>

        <div className="method-divergence">
          <div className="method-divergence-title">Why the two methods disagree on magnitude</div>
          <p>
            VADER, even with domain lexicon customization, tends to score headlines as negative
            because sexual-assault reporting contains inherently negative words. The LLM can
            distinguish framing , a headline like "Survivor speaks out against abuser" would
            receive a more positive score from the LLM than from VADER. However, the LLM's
            refusal to score the most graphically negative content (coded as −1.0) likely inflates
            apparent negativity in the LLM baseline, making the post-MeToo shift look larger.
          </p>
        </div>
      </div>
    </section>
  )
}

function Takeaway() {
  return (
    <section id="takeaway">
      <div className="section-label">The Takeaway</div>
      <h2 className="section-title">What this means,and what's still unknown</h2>
      <p className="section-desc">
        Taken together, the results paint a consistent picture: #MeToo was associated
        with a measurable increase in reported rape rates <em>and</em> a statistically
        significant, if modest, shift toward less-negative headline sentiment.
      </p>
      <div className="takeaway-grid">
        <div className="takeaway-card green">
          <h3>What the data supports</h3>
          <ul className="data-list">
            <li>A sustained, multi-year rise in reported rape rates suggests a possible durable cultural shift in survivors' willingness to come forward.</li>
            <li>A DiD using other violent crimes as the control finds rape reporting rose +5.7 per 100k more than contemporaneous trends in murder, robbery, and aggravated assault would predict (p &lt; 0.001) , the strongest causal evidence in this analysis.</li>
            <li>Both VADER and LLM methods independently agree: headline framing became measurably less negative after October 2017.</li>
            <li>The shift plausibly reflects more headlines emphasizing accountability and survivor testimony rather than a change in subject matter.</li>
            <li>Effect sizes are small to moderate (r = 0.24 VADER, r = 0.14 LLM) , statistically significant, but modest in absolute terms.</li>
          </ul>
        </div>
        <div className="takeaway-card amber">
          <h3>What remains uncertain</h3>
          <ul className="data-list">
            <li>All findings are <strong>correlational</strong> , the data cannot establish that #MeToo caused these changes.</li>
            <li>Absolute sentiment remained substantially negative throughout , coverage of trauma cannot be made "positive" by a cultural moment.</li>
            <li>The DiD design cannot fully rule out confounders coincident with October 2017 (e.g., Title IX policy changes); the estimate is consistent but not definitively causal.</li>
            <li>UCR captures reported crimes only; 70–80% of rapes are estimated to go unreported entirely.</li>
          </ul>
        </div>
        <div className="takeaway-card purple">
          <h3>Future directions</h3>
          <ul className="data-list">
            <li>Incorporate full article text, not just headlines, for richer framing analysis.</li>
            <li>Attempt LLM scoring with more willing models to reduce refusal bias.</li>
            <li>Extend the time window to 2020–2023 to assess whether gains persisted post-pandemic.</li>
            <li>Apply a regression discontinuity design using October 2017 as the cutoff for stronger causal inference.</li>
            <li>Expand geographic scope to compare U.S. state-level variation in #MeToo media coverage against local rape reporting trends.</li>
            <li>Conduct survivor surveys or interviews to directly test whether perceived media sentiment affects willingness to report.</li>
          </ul>
        </div>
      </div>
      <div className="citation-box">
        <div className="citation-box-title">References</div>
        <ol className="citation-list">
          <li>R. Levy, M. Mattsson, "The effects of social movements: Evidence from #MeToo." (2023) SSRN Working Paper, last revised May 25, 2025.</li>
          <li>K. Andrews, S. Jaffer, S. Shariff, "Powerful yet disempowered: A thematic literature review exploring the challenges of media reporting on sexual violence." <em>Trauma, Violence, & Abuse</em> (2025).</li>
          <li>R. E. Morgan, G. Kena, "Criminal victimization, 2016: Revised." Bureau of Justice Statistics, U.S. Department of Justice, Bulletin NCJ252121 (2018).</li>
        </ol>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="https://github.com/liasymer-cyber" target="_blank" rel="noreferrer">GitHub</a>
        <a href="mailto:lia.symer@dartmouth.edu">Email</a>
        <a href="https://github.com/liasymer-cyber/LiaSFinalProject" target="_blank" rel="noreferrer">Project Repo</a>
      </div>
      <p>Lia Symer · QSS 20 Final Project · Dartmouth College · 2026</p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Question />
      <Data />
      <Methods />
      <Results />
      <Takeaway />
      <Footer />
    </div>
  )
}
