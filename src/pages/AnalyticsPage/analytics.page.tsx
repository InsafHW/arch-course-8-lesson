import {Tabs, TabsList, TabsTrigger} from "@/shared/ui/tabs";
import {useMemo, useState} from "react";

type Tab =
    | 'locations'
    | 'episodes'
    | 'characters'

function useTabs() {
    const [tab, setTab] = useState<Tab>('locations');

    const availableTabs = useMemo<{id: Tab, label: string}[]>(() => [
        {id: 'locations', label: 'Locations'},
        {id: 'episodes', label: 'Episodes'},
        {id: 'characters', label: 'Characters'},
    ], [])

    return {
        tab,
        setTab,
        availableTabs,
    }
}

export const AnalyticsPage = () => {
    const {tab, setTab, availableTabs} = useTabs()

    return (
        <div className="flex w-full flex-col gap-6 mt-5">
            <Tabs value={tab}>
                <TabsList>
                    {availableTabs.map((tab) => (
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
            <div>
                Content of: {tab}
            </div>
        </div>
    );
};