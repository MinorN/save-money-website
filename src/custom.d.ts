type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAT?: string;
}
type Tag = {
    id: string
    name: string
}

type RootType = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    save: () => void
    update: (id: string, name: string) => 'success' | 'not-found' | 'duplicated'
    remove: (id: string) => boolean
}

interface Window {
    store: {
        tagList: Tag[];
        findTag: (id: string) => Tag
        createTag: (name: string) => void;
        removeTag: (id: string) => boolean;
        updateTag: TagListModel['update']
        recordList: RecordItem[]
        createRecord: (record: RecordItem) => void
    };
}