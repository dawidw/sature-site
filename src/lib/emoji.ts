/**
 * Splits a string into text and emoji runs.
 *
 * The original HTML hand-wrapped each emoji in <span aria-hidden="true"> so
 * screen readers don't announce "waving hand" mid-sentence. Content coming
 * from a CMS is a plain string with the emoji typed inline, so we re-create
 * that wrapper at render time instead of asking an editor to write markup.
 */
export interface TextPart {
  text: string;
  isEmoji: boolean;
}

const EMOJI = /\p{Extended_Pictographic}(️)?/gu;

export function splitEmoji(input: string): TextPart[] {
  const parts: TextPart[] = [];
  let cursor = 0;

  for (const match of input.matchAll(EMOJI)) {
    const start = match.index;
    if (start > cursor) parts.push({ text: input.slice(cursor, start), isEmoji: false });
    parts.push({ text: match[0], isEmoji: true });
    cursor = start + match[0].length;
  }

  if (cursor < input.length) parts.push({ text: input.slice(cursor), isEmoji: false });
  return parts;
}
