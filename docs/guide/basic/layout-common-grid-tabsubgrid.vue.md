layout-common-grid-tabsubgrid.vue

界面组成：basic-grid  +  basic-tab-grid



| 类型      | 名称                     | 描述                                                         | 备注 |
| --------- | ------------------------ | ------------------------------------------------------------ | ---- |
| props     | funId                    |                                                              |      |
|           | pageType                 |                                                              |      |
| data      | **fun**                  |                                                              |      |
|           | pId                      |                                                              |      |
|           | containerHeight          |                                                              |      |
|           | formOption               |                                                              |      |
|           | gridSelection            |                                                              |      |
|           | **foreignKeyId**         | 默认grid的第一条数据                                         |      |
|           | **foreignColumn**        | 默认grid的第一条数据                                         |      |
| computed  | hasSelection             | gridSelection<br/>长度>0                                     |      |
| lifecycle | onMounted                | 获取fun；foreignColumn；foreignKeyId；                       |      |
| methods   | onGridSelectionChange    | gridSelection;foreignKeyId置为第一条数据；emit("selection-change") |      |
|           | onTabGridSelectionChange | emit("selection-change”），formOption置为选中的第一条数据    |      |
|           |                          |                                                              |      |
|           |                          |                                                              |      |
|           |                          |                                                              |      |
|           |                          |                                                              |      |
|           |                          |                                                              |      |
|           |                          |                                                              |      |

