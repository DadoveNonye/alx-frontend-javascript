export default function guardrail(mathFuncion) {
  const queue = [];
  try {
    const result = mathFuncion();
    queue.push(result);
  } catch (error) {
    queue.push(error);
  } finally {
    queue.push("Guardrail was processed");
  }
}
