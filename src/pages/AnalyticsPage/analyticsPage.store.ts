import {action, atom, computed, withSearchParams} from "@reatom/core";
import {injectable} from "inversify";

type Tab =
    | 'locations'
    | 'episodes'
    | 'characters'

@injectable()
class AnalyticsPageStore {
    selectedTab = atom<Tab>('characters')
        .extend(withSearchParams('tab'))

    availableTabs = computed<{id: Tab, label: string}[]>(() => [
        {id: 'locations' as const, label: 'Locations'},
        {id: 'episodes' as const, label: 'Episodes'},
        {id: 'characters' as const, label: 'Characters'},
    ])

    setTab = action((tab: Tab) => {
        this.selectedTab.set(tab)
    })
}

export {
    type Tab,
    AnalyticsPageStore
}