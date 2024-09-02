import { useCallback, useEffect } from "react";

export const useClickAway = <TElement extends Element>(
  element: TElement | null,
  callback: () => void,
) => {
  const handleClickOutside = useCallback(
    (event: Event) => {
      if (
        element != null &&
        event.target instanceof Element &&
        !element.contains(event.target)
      ) {
        callback();
      }
    },
    [element, callback],
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [handleClickOutside]);
};
