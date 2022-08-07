import type { Direction } from '../App'

export const Arrow = (props: { class?: string; direction: Direction }) => {
  const rotation =
    props.direction === 'left'
      ? '-rotate-90'
      : props.direction === 'bottom'
      ? 'rotate-180'
      : props.direction === 'right'
      ? 'rotate-90'
      : ''

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 492.002 492.002"
      aria-hidden="true"
      class={`h-5 w-5  fill-gray-200 ${props.class} ${rotation}`}
    >
      <path d="M484.136 328.473 264.988 109.329c-5.064-5.064-11.816-7.844-19.172-7.844-7.208 0-13.964 2.78-19.02 7.844L7.852 328.265C2.788 333.333 0 340.089 0 347.297s2.784 13.968 7.852 19.032l16.124 16.124c5.064 5.064 11.824 7.86 19.032 7.86s13.964-2.796 19.032-7.86l183.852-183.852 184.056 184.064c5.064 5.06 11.82 7.852 19.032 7.852 7.208 0 13.96-2.792 19.028-7.852l16.128-16.132c10.488-10.492 10.488-27.568 0-38.06z" />
    </svg>
  )
}
