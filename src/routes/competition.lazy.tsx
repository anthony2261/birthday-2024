import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/competition')({
  component: About,
})

function About() {
  return <div className="p-2">🚧Under Construction!🚧</div>
}
