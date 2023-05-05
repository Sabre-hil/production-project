type Mods = Record<string, boolean | string>;

export function classnames(
  cls: string,
  mods: Mods,
  additiona: string[]
): string {
  return [
    cls,
    ...additiona,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}

classnames("remove-button", { hovered: true, selectable: true, red: false }, [
  "pdg",
]);
