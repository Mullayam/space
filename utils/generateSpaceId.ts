export function generateSpaceId(): string {
  const part1 = Math.random().toString(36).substr(2, 4);
  const part2 = Math.random().toString(36).substr(2, 5);
  const part3 = Math.random().toString(36).substr(2, 3);
  const timestampPart = new Date().getTime().toString(36).substr(2, 5);
  const SpaceId = `${part1}-${part2}-${part3}`;
  return SpaceId;
}
