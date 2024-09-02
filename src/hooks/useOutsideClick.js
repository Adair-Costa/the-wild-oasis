import { useRef, useEffect } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
    const ref = useRef();

    useEffect(
        function () {
            function handleClick(e) {
                if (ref.current && !ref.current.contains(e.target)) {
                    handler();
                }
            }

            window.document.addEventListener("click", handleClick, listenCapturing);

            return () =>
                window.document.removeEventListener(
                    "click",
                    handleClick,
                    listenCapturing
                );
        },
        [handler, listenCapturing]
    );

    return ref;
}
