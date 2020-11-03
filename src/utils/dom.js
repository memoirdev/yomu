export function getOrCreate(id = "yomu-root") {
  let element = document.getElementById(id);
  if (element === null) {
    element = document.createElement("div");
    element.setAttribute("id", id);
    document.body.appendChild(element);
  }
  return element;
}
