// Platform-free logic, tested next to this file. The desktop page imports it, so what the
// tests check is what ships. Anything that needs host.runCommand or browser.View is
// desktop-only: keep it out of here (see docs/authoring.md).
export function summary(id: string): string {
  return `${id} is running.`;
}
