
import { ListViewOptions } from './types'

export const defaultOptions = <T>(): ListViewOptions<T> => ({
    itemName: '',
    // listview 自定义 class
    className: '',
    // 外层 card 的 extra 宽度
    extraWidth: 600,
    // 外层 card 的 extra 中的搜索框占位符
    extraSearchPlaceholder: '请输入关键字',
    // table options
    tableClassName: '',
    tableColumns: [],
    tableOperations: ['update', 'delete'],
    tableWrapper: 'card',
    filters: [],

    // apis
    createItem: () => Promise.resolve(),
    deleteItem: () => Promise.resolve(),
    updateItem: () => Promise.resolve(),
    fetchItems: () => Promise.resolve({
        items: [],
        total: 0,
        pageNum: 1,
        pageSize: 10
    }),

    // form
    createFormItems: () => [],
    updateFormItems: () => [],
    formLabelWidth: 100,

    detailTitle: '',

    creationTitle: '',

    // export options
    // exportDisabled: true,
    // exportFileNamePrefix: '',
    // exportSheetName: 'sheet1',
    // exportColumns: {}
})
