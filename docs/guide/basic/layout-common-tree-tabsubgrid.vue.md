layout-common-tree-tabsubgrid.vue

界面组成：  basic-tree + basic-tab-grid

| 类型      | 名称                | 描述                                           | 备注                                |
| --------- | ------------------- | ---------------------------------------------- | ----------------------------------- |
| props     | funId               |                                                | basic-tree/basic-tab-grid初始化参数 |
|           | pageType            |                                                | basic-tab-grid初始化参数            |
|           | funIdTabsubProps    |                                                |                                     |
|           | orgSQL              |                                                |                                     |
| data      | inst                | 组件实例                                       |                                     |
|           | **basicTreeRef**    | refs                                           |                                     |
|           | **basicTabGridRef** | refs                                           |                                     |
|           | **fun**             |                                                | basic-tree初始化参数                |
|           | **pId**             |                                                | basic-tab-grid初始化参数            |
|           | **pText**           |                                                | basic-tab-grid初始化参数            |
|           | **containerHeight** |                                                |                                     |
| lifecycle | onMounted-获取      | 获取fun，并且渲染树                            |                                     |
| methods   | onNodeClick         | tree的node-click事件，带参数刷新（节点下）数据 | basic-tree方法                      |
|           | onTreeRefresh       | 刷新树                                         | basic-tree方法                      |
|           | onGridSave          | 保存提示；刷新列表                             |                                     |
|           | onGridDelete        | 删除提示；刷新列表                             |                                     |
|           | getSelection        | 获取grid表格选中数据                           |                                     |
|           | selectionChange     | emit("selection-change"）                      |                                     |
|           |                     |                                                |                                     |

![image-20220112095229197](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220112095229197.png)