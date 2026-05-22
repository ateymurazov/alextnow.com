import React from 'react';
import type { PostMeta } from '../posts';

export const meta: PostMeta = {
  slug: 'risk-based-test-execution',
  title: 'Risk-Based Test Execution: Cutting CI Time Without Losing Coverage',
  description:
    'How to score every commit by blast-radius and historical failure rate so CI runs only what matters — with a real 48→9 minute case study.',
  date: '2026-04-22',
  readingMinutes: 7,
  tags: ['CI/CD', 'Test Selection', 'ATQI Framework'],
};

const Post = () => (
  <>
    <p>
      The fastest way to lose engineering trust is to make every PR wait 45
      minutes for a green check. The second-fastest is to skip tests and ship a
      P1. Risk-based execution — pillar two of the{' '}
      <a href="/blog/atqi-framework-introduction">ATQI framework</a> — resolves
      both by scoring change, not by trimming suites.
    </p>

    <h2>The model</h2>
    <p>
      Each commit produces a <strong>risk vector</strong> over the test graph:
    </p>
    <ul>
      <li>
        <strong>Blast radius:</strong> static + dynamic call graph from changed
        symbols to test entry points.
      </li>
      <li>
        <strong>Historical failure rate:</strong> per-test prior, decayed over
        time, conditioned on the changed module.
      </li>
      <li>
        <strong>Ownership distance:</strong> tests owned by the changing team
        weighted higher; cross-org tests gated separately.
      </li>
      <li>
        <strong>Regulatory tag:</strong> compliance-critical paths always run,
        regardless of score.
      </li>
    </ul>

    <h2>Selection, not exclusion</h2>
    <p>
      A common mistake is framing this as "skipping tests." It isn't. Every test
      still runs — on a schedule appropriate to its risk. PR-blocking selection
      is the top-N percentile by risk; the remainder runs on merge, nightly, or
      pre-release. Coverage is preserved; <em>latency</em> is reallocated.
    </p>

    <h2>Case study: 9,000-test enterprise SaaS</h2>
    <p>
      Baseline: 48-minute PR feedback, 9.1% flake rate, escape rate 0.7 per
      release. After 11 weeks of rollout: 8.4-minute PR feedback, 2.3% flake
      rate (flakes auto-quarantined and routed for owner triage), escape rate
      0.6 per release. The cycle-time win paid for itself in reclaimed engineer
      hours within the first month.
    </p>

    <h2>What breaks if you skip the prerequisites</h2>
    <p>
      Risk-based execution depends on <strong>trustworthy telemetry</strong>.
      Without unified test, pipeline, and release signals — pillar three —
      historical priors are noisy, ownership is wrong, and the selector
      under-runs the wrong tests. Build observability first.
    </p>

    <h2>Rollout pattern</h2>
    <ol>
      <li>Run the selector in <em>shadow mode</em> for 4–6 weeks. Compare predicted vs. actual failures.</li>
      <li>Enable advisory mode: selector reports, but doesn't gate.</li>
      <li>Enable blocking mode for non-regulated paths.</li>
      <li>Tune the percentile until escape rate is statistically flat.</li>
    </ol>

    <p>
      Done well, this is the single highest-ROI change a quality org can ship.
      Done early — before observability — it erodes the trust you were trying
      to build.
    </p>
  </>
);

export default Post;
