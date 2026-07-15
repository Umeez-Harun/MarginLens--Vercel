<script setup></script>
<template>
    <section class="ml-landing">
  <!-- HERO -->
  <div class="ml-landing-hero">
    <div class="ml-landing-hero-text">
      <span class="ml-landing-eyebrow">Margin Intelligence for Online Sellers</span>
      <h1 class="ml-landing-title">
        Your margin looks fine.<br />
        Until you subtract what it's <span class="ml-landing-highlight">actually</span> costing you.
      </h1>
      <p class="ml-landing-subtitle">
        Selling price minus purchase cost isn't your real profit. Returns, payment fees,
        packaging and shipping quietly eat into every sale. MarginLens calculates your
        real margin next to the perceived one, so nothing stays hidden.
      </p>
      <div class="ml-landing-cta-row">
        <RouterLink to="/dashboard" class="ml-landing-btn ml-landing-btn-primary">Explore the Dashboard</RouterLink>
        <RouterLink to="/product/create" class="ml-landing-btn ml-landing-btn-outline">Add Your First Product</RouterLink>
      </div>
    </div>

    <div class="ml-landing-hero-visual">
      <div class="ml-landing-report-card">
        <div class="ml-landing-report-header">
          <span>iPhone 17</span>
          <span class="ml-landing-report-badge">Report</span>
        </div>
        <div class="ml-landing-report-row">
          <span class="ml-landing-report-label">Perceived Margin</span>
          <span class="ml-landing-report-value ml-landing-value-neutral">42.1%</span>
        </div>
        <div class="ml-landing-bar">
          <div class="ml-landing-bar-fill ml-landing-bar-neutral" style="width: 78%;"></div>
        </div>

        <div class="ml-landing-report-row">
          <span class="ml-landing-report-label">Real Margin</span>
          <span class="ml-landing-report-value ml-landing-value-teal">27.4%</span>
        </div>
        <div class="ml-landing-bar">
          <div class="ml-landing-bar-fill ml-landing-bar-teal" style="width: 51%;"></div>
        </div>

        <div class="ml-landing-report-gap">
          <span>Margin Gap</span>
          <span class="ml-landing-gap-value">14.7%</span>
        </div>
      </div>
    </div>
  </div>

  <!-- FEATURES -->
  <div class="ml-landing-features">
    <div class="ml-landing-section-heading">
      <h2 class="ml-landing-section-title">Everything a real margin needs</h2>
      <p class="ml-landing-section-subtitle">
        One platform to catalog products, attach hidden costs and see exactly which
        ones are worth selling.
      </p>
    </div>

    <div class="ml-landing-feature-grid">
      <div class="ml-landing-feature-card">
        <div class="ml-landing-feature-icon ml-landing-icon-pink">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 8l-9-5-9 5 9 5 9-5z"></path>
            <path d="M3 8v8l9 5 9-5V8"></path>
            <path d="M12 13v8"></path>
          </svg>
        </div>
        <h3 class="ml-landing-feature-title">Product & Category Management</h3>
        <p class="ml-landing-feature-text">
          Organize your catalog into clean categories, with full create, edit and
          delete control over every product record.
        </p>
      </div>

      <div class="ml-landing-feature-card">
        <div class="ml-landing-feature-icon ml-landing-icon-orange">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12l8.5-8.5a2 2 0 0 1 2.8 0l6.2 6.2a2 2 0 0 1 0 2.8L12 21l-9-9z"></path>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
          </svg>
        </div>
        <h3 class="ml-landing-feature-title">Hidden Cost Profiles</h3>
        <p class="ml-landing-feature-text">
          Attach a return rate, payment fee, packaging, shipping and misc cost to
          every product — the costs your spreadsheet forgets.
        </p>
      </div>

      <div class="ml-landing-feature-card">
        <div class="ml-landing-feature-icon ml-landing-icon-teal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2"></rect>
            <line x1="8" y1="7" x2="16" y2="7"></line>
            <line x1="8" y1="11" x2="16" y2="11"></line>
            <line x1="8" y1="15" x2="12" y2="15"></line>
          </svg>
        </div>
        <h3 class="ml-landing-feature-title">Real Margin Engine</h3>
        <p class="ml-landing-feature-text">
          Every report runs the same four formulas — perceived margin, hidden cost,
          real margin and margin gap — with live USD → PKR conversion built in.
        </p>
      </div>

      <div class="ml-landing-feature-card">
        <div class="ml-landing-feature-icon ml-landing-icon-pink">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="4" y1="20" x2="4" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="20" y1="20" x2="20" y2="14"></line>
          </svg>
        </div>
        <h3 class="ml-landing-feature-title">Ranked Insights Dashboard</h3>
        <p class="ml-landing-feature-text">
          Every product with a report is ranked by margin gap, worst first, so you
          know exactly where money is quietly leaking.
        </p>
      </div>
    </div>
  </div>

  <!-- HOW IT WORKS -->
  <div class="ml-landing-steps">
    <div class="ml-landing-section-heading">
      <h2 class="ml-landing-section-title">How it works</h2>
      <p class="ml-landing-section-subtitle">From product to real margin in four steps.</p>
    </div>

    <div class="ml-landing-steps-row">
      <div class="ml-landing-step">
        <div class="ml-landing-step-number">01</div>
        <h4 class="ml-landing-step-title">Add a product</h4>
        <p class="ml-landing-step-text">Set its selling price, purchase cost, category and currency.</p>
      </div>
      <div class="ml-landing-step-connector"></div>
      <div class="ml-landing-step">
        <div class="ml-landing-step-number">02</div>
        <h4 class="ml-landing-step-title">Define hidden costs</h4>
        <p class="ml-landing-step-text">Set the return rate, payment fee, packaging, shipping and misc costs.</p>
      </div>
      <div class="ml-landing-step-connector"></div>
      <div class="ml-landing-step">
        <div class="ml-landing-step-number">03</div>
        <h4 class="ml-landing-step-title">Generate a report</h4>
        <p class="ml-landing-step-text">The engine instantly calculates perceived vs. real margin.</p>
      </div>
      <div class="ml-landing-step-connector"></div>
      <div class="ml-landing-step">
        <div class="ml-landing-step-number">04</div>
        <h4 class="ml-landing-step-title">Track the ranking</h4>
        <p class="ml-landing-step-text">See every product ranked by margin gap on the dashboard.</p>
      </div>
    </div>
  </div>

  <!-- CTA BANNER -->
  <div class="ml-landing-banner">
    <h2 class="ml-landing-banner-title">Stop guessing your margins.</h2>
    <p class="ml-landing-banner-text">See the real number behind every product you sell.</p>
    <RouterLink to="/dashboard" class="ml-landing-btn ml-landing-btn-primary ml-landing-btn-lg">Open the Dashboard</RouterLink>
  </div>
</section>
</template>

<style scoped>
/* ============ MARGINLENS LANDING SECTION ============ */
/* Namespaced under .ml-landing so nothing here touches existing classes */

.ml-landing {
  display: block;
  overflow: hidden;
}

/* ---- HERO ---- */
.ml-landing-hero {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  padding: 5rem 1.5rem 4rem;
}

.ml-landing-eyebrow {
  display: inline-block;
  background: rgba(233, 69, 96, 0.1);
  color: #e94560;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  margin-bottom: 1.25rem;
}

.ml-landing-title {
  font-size: 2.75rem;
  line-height: 1.15;
  font-weight: 600;
  color: #0f0f23;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;
}

.ml-landing-highlight {
  color: #e94560;
  font-style: italic;
}

.ml-landing-subtitle {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #55556b;
  max-width: 480px;
  margin-bottom: 2rem;
}

.ml-landing-cta-row {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.ml-landing-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  font-size: 0.925rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  border: 1px solid transparent;
}

.ml-landing-btn-primary {
  background: linear-gradient(135deg, #e94560, #c0392b);
  color: #fff;
  box-shadow: 0 8px 20px rgba(233, 69, 96, 0.28);
}

.ml-landing-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(233, 69, 96, 0.35);
}

.ml-landing-btn-outline {
  background: transparent;
  border-color: #d8d8e6;
  color: #0f0f23;
}

.ml-landing-btn-outline:hover {
  border-color: #0f0f23;
  transform: translateY(-2px);
}

.ml-landing-btn-lg {
  padding: 1rem 2.1rem;
  font-size: 1rem;
}

/* ---- HERO VISUAL: mock report card ---- */
.ml-landing-hero-visual {
  display: flex;
  justify-content: center;
}

.ml-landing-report-card {
  width: 100%;
  max-width: 340px;
  background: #0f0f23;
  border-radius: 18px;
  padding: 1.75rem;
  box-shadow: 0 24px 48px rgba(15, 15, 35, 0.25);
  position: relative;
}

.ml-landing-report-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 18px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(233, 69, 96, 0.5), rgba(26, 188, 156, 0.4));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.ml-landing-report-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.ml-landing-report-badge {
  background: rgba(233, 69, 96, 0.18);
  color: #e94560;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
}

.ml-landing-report-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.4rem;
}

.ml-landing-report-label {
  color: #8888aa;
  font-size: 0.8rem;
}

.ml-landing-report-value {
  font-size: 1.15rem;
  font-weight: 600;
}

.ml-landing-value-neutral { color: #cfcfe0; }
.ml-landing-value-teal { color: #1abc9c; }

.ml-landing-bar {
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  margin-bottom: 1.25rem;
  overflow: hidden;
}

.ml-landing-bar-fill {
  height: 100%;
  border-radius: 999px;
}

.ml-landing-bar-neutral { background: #6f6f95; }
.ml-landing-bar-teal { background: #1abc9c; }

.ml-landing-report-gap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1rem;
  margin-top: 0.5rem;
  color: #fff;
  font-size: 0.875rem;
}

.ml-landing-gap-value {
  color: #e94560;
  font-weight: 700;
  font-size: 1.1rem;
}

/* ---- SHARED SECTION HEADINGS ---- */
.ml-landing-section-heading {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 2.75rem;
}

.ml-landing-section-title {
  font-size: 1.85rem;
  font-weight: 600;
  color: #0f0f23;
  margin-bottom: 0.6rem;
}

.ml-landing-section-subtitle {
  color: #777791;
  font-size: 0.975rem;
  line-height: 1.6;
}

/* ---- FEATURES ---- */
.ml-landing-features {
  max-width: 1180px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.ml-landing-feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.ml-landing-feature-card {
  background: #fff;
  border: 1px solid #e8e8f0;
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.ml-landing-feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(15, 15, 35, 0.08);
}

.ml-landing-feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.1rem;
}

.ml-landing-feature-icon svg {
  width: 22px;
  height: 22px;
}

.ml-landing-icon-pink { background: rgba(233, 69, 96, 0.1); color: #e94560; }
.ml-landing-icon-orange { background: rgba(230, 126, 34, 0.12); color: #e67e22; }
.ml-landing-icon-teal { background: rgba(26, 188, 156, 0.12); color: #1abc9c; }

.ml-landing-feature-title {
  font-size: 1rem;
  font-weight: 600;
  color: #0f0f23;
  margin-bottom: 0.5rem;
}

.ml-landing-feature-text {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #777791;
}

/* ---- HOW IT WORKS ---- */
.ml-landing-steps {
  max-width: 1180px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4.5rem;
}

.ml-landing-steps-row {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
}

.ml-landing-step {
  flex: 1;
  max-width: 230px;
  text-align: center;
  padding: 0 0.5rem;
}

.ml-landing-step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0f0f23;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.ml-landing-step-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #0f0f23;
  margin-bottom: 0.4rem;
}

.ml-landing-step-text {
  font-size: 0.825rem;
  line-height: 1.55;
  color: #777791;
}

.ml-landing-step-connector {
  flex: 0 0 auto;
  width: 60px;
  height: 1px;
  background: repeating-linear-gradient(90deg, #d8d8e6 0 6px, transparent 6px 12px);
  margin-top: 20px;
}

/* ---- CTA BANNER ---- */
.ml-landing-banner {
  background: linear-gradient(135deg, #0f0f23, #1e1e3a);
  border-radius: 24px;
  max-width: 1180px;
  margin: 0 auto 5rem;
  padding: 3.5rem 2rem;
  text-align: center;
}

.ml-landing-banner-title {
  color: #fff;
  font-size: 1.9rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
}

.ml-landing-banner-text {
  color: #9a9ac0;
  font-size: 1rem;
  margin-bottom: 1.75rem;
}

/* ---- RESPONSIVE ---- */
@media (max-width: 900px) {
  .ml-landing-hero {
    grid-template-columns: 1fr;
    padding-top: 3rem;
  }
  .ml-landing-title { font-size: 2.1rem; }
  .ml-landing-feature-grid { grid-template-columns: repeat(2, 1fr); }
  .ml-landing-steps-row { flex-wrap: wrap; }
  .ml-landing-step-connector { display: none; }
  .ml-landing-step { max-width: 45%; margin-bottom: 1.5rem; }
}

@media (max-width: 560px) {
  .ml-landing-feature-grid { grid-template-columns: 1fr; }
  .ml-landing-step { max-width: 100%; }
}
</style>