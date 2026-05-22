import React from 'react';
import type { PostMeta } from '../posts';

export const meta: PostMeta = {
  slug: 'atqi-framework-introduction',
  title: 'Introducing the AT Quality Intelligence Framework',
  description:
    'A systems-based operating model for embedding AI-driven quality into enterprise engineering — observability, adaptive execution, and delivery intelligence.',
  date: '2026-05-10',
  readingMinutes: 8,
  tags: ['ATQI Framework', 'Quality Engineering', 'AI in Testing'],
  ogImage:
    'https://storage.googleapis.com/gpt-engineer-file-uploads/Vlc2BepNpVXkZA9Ha7mAhgT3Bk03/social-images/social-1779164838192-AT_website_social_image.webp',
};

const Post = () => (
  <>
    <p>
      Over the last decade, I've led quality and delivery transformations across
      regulated payments platforms, multi-brand commerce, and enterprise SaaS.
      The same pattern repeats: testing grows linearly with engineering, signal
      grows logarithmically, and trust in the pipeline erodes. The{' '}
      <strong>AT Quality Intelligence Framework (ATQI)</strong> is the operating
      model I've built to reverse that curve.
    </p>

    <h2>Why a framework, not another tool</h2>
    <p>
      Most "AI for QA" pitches optimize a single step — generation, triage, or
      flake detection — and leave the rest of the value chain untouched. That
      produces local wins and global regressions. ATQI treats quality as a{' '}
      <em>system</em> with four interlocking pillars and one shared telemetry
      spine.
    </p>

    <h2>The four pillars</h2>
    <ol>
      <li>
        <strong>Adaptive Test Generation.</strong> AI synthesizes tests from PR
        diffs and incident history. Coverage scales with change, not headcount.
      </li>
      <li>
        <strong>Risk-Based Execution.</strong> Every commit is scored by
        blast-radius and historical failure rate. CI runs only what matters.
      </li>
      <li>
        <strong>Quality Observability.</strong> Pipeline, test, and release
        telemetry unified into one signal layer with clear ownership.
      </li>
      <li>
        <strong>AI-Assisted Failure Analysis.</strong> Failures clustered,
        ranked by probable root cause, and auto-routed to the owning service
        team.
      </li>
    </ol>

    <h2>What it changes in practice</h2>
    <p>
      On a 9,000-test enterprise SaaS suite, PR feedback dropped from 48 minutes
      to under 9 with escape rate held flat. On a regulated payments platform,
      mean-time-to-diagnose collapsed from ~4 hours to under 20 minutes. These
      are not isolated tool wins — they are downstream effects of treating
      validation as an intelligence problem rather than a coverage problem.
    </p>

    <h2>Where to start</h2>
    <p>
      Adopt ATQI in this order: <strong>observability first</strong> (you can't
      improve what you can't see), then <strong>risk-based execution</strong>{' '}
      (immediate cycle-time win), then <strong>AI failure analysis</strong>{' '}
      (compounding triage savings), then <strong>adaptive generation</strong>{' '}
      (the hardest, but the unlock for true elastic coverage).
    </p>

    <p>
      I'll be expanding on each pillar in subsequent posts, with concrete
      patterns, instrumentation choices, and the failure modes I've watched
      teams fall into.
    </p>
  </>
);

export default Post;
