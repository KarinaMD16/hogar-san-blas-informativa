type IdleCallback = () => void;

type IdleOptions = {
    timeout?: number;
    fallbackDelay?: number;
};

type IdleWindow = Window & {
    requestIdleCallback?: (callback: IdleCallback, options?: { timeout: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
};

const defaultOptions: Required<IdleOptions> = {
    timeout: 1500,
    fallbackDelay: 300,
};

export const scheduleIdleTask = (
    task: IdleCallback,
    options: IdleOptions = defaultOptions
) => {
    const { timeout, fallbackDelay } = { ...defaultOptions, ...options };
    const idleWindow = window as IdleWindow;

    if (idleWindow.requestIdleCallback) {
        const idleHandle = idleWindow.requestIdleCallback(task, { timeout });
        return () => {
            idleWindow.cancelIdleCallback?.(idleHandle);
        };
    }

    const timeoutId = window.setTimeout(task, fallbackDelay);
    return () => {
        window.clearTimeout(timeoutId);
    };
};
