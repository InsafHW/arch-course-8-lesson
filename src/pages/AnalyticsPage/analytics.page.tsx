import {Tabs, TabsList, TabsTrigger} from "@/shared/ui/tabs";
import {AnalyticsPageStore} from "./analyticsPage.store";
import {useContainerInjection} from "../../app/container/ContainerProvider";
import {reatomComponent} from "@reatom/react";
import {AnalyticsContent} from "./analytics.content";

export const AnalyticsPage = reatomComponent(() => {
    const {
        setTab, selectedTab, availableTabs,
    } = useContainerInjection(AnalyticsPageStore)

    return (
        <div className="flex w-full flex-col gap-6 mt-5">
            <Tabs value={selectedTab()}>
                <TabsList>
                    {availableTabs().map((tab) => (
                        <TabsTrigger
                            key={tab.id}
                            value={tab.id}
                            onClick={() => setTab(tab.id)}
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
            <AnalyticsContent tab={selectedTab()} />
        </div>
    );
});