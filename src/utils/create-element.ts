interface comment {
  tag: string;
  className?: string;
  innerText?: string;
}
export const createNewElement = ({ tag, className, innerText }: comment) => {
  const newElement = document.createElement(tag);
  if (className) {
    newElement.className = className;
  }
  if (innerText) {
    newElement.innerText = innerText;
  }
  return newElement;
};
