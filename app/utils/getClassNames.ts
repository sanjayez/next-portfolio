export function getClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
