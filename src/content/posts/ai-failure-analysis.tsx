import React from 'react';
import type { PostMeta } from '../posts';

export const meta: PostMeta = {
  slug: 'ai-failure-analysis',
  title: 'AI-Assisted Failure Analysis: From Hours to Minutes',
  description:
    'A pattern for clustering, ranking, and auto-routing test and pipeline failures so on-call engineers spend minutes on diagnosis instead of hours.',
  date: '2026-03-30',
  readingMinutes: 6,
  tags: ['AI in Testing', 'Observability', 'Incident Response'],
};

const Post = () => (
  <>
    <p>
      The expensive part of a failing pipeline isn't the failing test. It's the
      twenty minutes an on-call engineer spends paging through logs to decide{' '}
      <em>whose problem it is</em>. AI-assisted failure analysis — pillar four
      of the <a href="/blog/atqi-framework-introduction">ATQI framework</a> —
      compresses that triage step into a routed, ranked, ownership-tagged ticket
      in under a minute.
    </p>

    <h2>The pipeline</h2>
    <ol>
      <li>
        <strong>Normalize.</strong> Collect raw test output, stack traces, CI
        artifacts, and recent deploy metadata into a structured failure event.
      </li>
      <li>
        <strong>Cluster.</strong> Embed failure signatures; group new failures
        against the running cluster catalog. Most outages are duplicates of
        something you've already seen.
      </li>
      <li>
        <strong>Rank probable cause.</strong> An LLM scores candidates: code
        change in blast radius, infra drift, flake history, upstream dependency
        deploy. Top-3 with confidence and evidence.
      </li>
      <li>
        <strong>Route.</strong> Resolve the owning service from the failing
        symbol; open the ticket against that team with the diagnosis attached.
      </li>
    </ol>

    <h2>Real numbers</h2>
    <p>
      On a regulated payments platform, mean-time-to-diagnose moved from{' '}
      <strong>~4 hours to under 20 minutes</strong>. The bigger second-order win
      was social: engineers stopped getting paged for failures they didn't own.
      Cross-team friction during incidents dropped sharply.
    </p>

    <h2>What to watch out for</h2>
    <ul>
      <li>
        <strong>Hallucinated root causes.</strong> Require the model to cite
        evidence (log lines, diff hunks, dashboard panels). No citation, no
        ranking.
      </li>
      <li>
        <strong>Confidence inflation.</strong> Calibrate against a held-out set
        of resolved incidents quarterly. Bad calibration teaches teams to
        ignore the system.
      </li>
      <li>
        <strong>Ownership drift.</strong> Service ownership data rots fast.
        Treat the ownership graph as a first-class production system, not a
        wiki page.
      </li>
    </ul>

    <h2>Start small</h2>
    <p>
      You don't need a custom model. Start with deterministic clustering and
      ownership routing — that alone recovers most of the time savings. Add LLM
      ranking once the cluster catalog is stable and your evidence pipeline is
      reliable.
    </p>

    <p>
      Failure analysis is where on-call quality of life lives or dies. Invest
      here and the rest of the framework gets easier to roll out.
    </p>
  </>
);

export default Post;
