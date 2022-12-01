import { ElementType, Suspense } from 'react';
import { SuspenseFallback } from './SuspenseFallback';
export const SuspenseComponent = (Component: ElementType) => (
  <Suspense fallback={<SuspenseFallback />}>
    <Component />
  </Suspense>
);
