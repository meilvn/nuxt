export const useFoo = () => {
  const foo = useState('foo', () => 'foo')
  const bar = useState('bar', () => 'bar')
  return { foo, bar }
}