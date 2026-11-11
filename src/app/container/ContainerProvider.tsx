import type { Container, ServiceIdentifier } from "inversify";
import {createDi} from "../../shared/lib/react";
import {type ReactNode, useState} from "react";

const { Injector: DiProvider, useDi: useDiContext } = createDi<Container>();

export function useContainerInjection<T>(token: ServiceIdentifier<T>) {
    const container = useDiContext();

    const [service] = useState(() => container.get(token));

    return service;
}

export const ContainerProvider = ({
    children,
    container,
}: {
    children: ReactNode;
    container: Container;
}) => {
    return <DiProvider value={container}>{children}</DiProvider>;
};

