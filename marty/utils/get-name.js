export default function getName(from) {
  return from.name || from.constructor.name
}
