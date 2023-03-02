import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function getErrorMessage(error: unknown) {
    if (isRouteErrorResponse(error)) {
        return `${error.status} ${error.statusText}`;
    }

    return error instanceof Error
        ? error.message
        : JSON.stringify(error);
}

export function RootErrorBoundary() {
    const error = useRouteError();

    return (
        <p style={{ color: "red" }}>
            An unmanaged error occured insisde a module. Still, other parts of the application are fully functional!
            <br />
            <span role="img" aria-label="pointer">👉</span> {getErrorMessage(error)}
        </p>
    );
}
