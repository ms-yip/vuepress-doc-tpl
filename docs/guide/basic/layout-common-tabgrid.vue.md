layout-common-tabgrid.vue.md



props

| 参数             | 描述 | 备注 |
| ---------------- | ---- | ---- |
| funId            |      |      |
| pageType         |      |      |
| funIdTabsubProps |      |      |
| formnColumn      |      |      |

setup

| 类型      | 名称            | 描述                      | 备注 |
| --------- | --------------- | ------------------------- | ---- |
| data      | fun             |                           |      |
|           | pId             |                           |      |
|           | containerHeight |                           |      |
| computed  | hasFunId        |                           |      |
| lifecycle | onMounted       |                           |      |
| methods   | selectionChange | emit("selection-change"） |      |
|           |                 |                           |      |
|           |                 |                           |      |
|           |                 |                           |      |

form数据处理

 eventsForm <= funInfo.eventsForm

 formnColumn <= funInfo.columns

formMap  <= funInfo.funInfoParams.formMap