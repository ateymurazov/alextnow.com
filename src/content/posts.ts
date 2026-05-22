import type { ComponentType } from 'react';
import Atqi, { meta as atqiMeta } from './posts/atqi-framework-introduction';
import Risk, { meta as riskMeta } from './posts/risk-based-test-execution';
import Failure, { meta as failureMeta } from './posts/ai-failure-analysis';

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readingMinutes: number;
  tags: string[];
  ogImage?: string;
}

export interface Post extends PostMeta {
  Component: ComponentType;
}

export const posts: Post[] = [
  { ...atqiMeta, Component: Atqi },
  { ...riskMeta, Component: Risk },
  { ...failureMeta, Component: Failure },
].sort((a, b) => (a.date < b.date ? 1 : -1));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
