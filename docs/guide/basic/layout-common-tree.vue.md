layout-common-tree.vue

界面

1. 左树右表

props

| 参数名        | 描述                            | 备注 |
| ------------- | ------------------------------- | ---- |
| funId         | basic-tree/basic-grid初始化参数 |      |
| pageType      | basic-grid初始化参数            |      |
| orgSQL        | basic-grid初始化参数            |      |
| funInfoParams | basic-grid初始化参数            |      |



setup

| 类型      | 名称                 | 描述                                           | 备注 |
| --------- | -------------------- | ---------------------------------------------- | ---- |
| data      | asideTree            |                                                |      |
|           | grid                 |                                                |      |
|           | fun                  |                                                |      |
|           | pId                  |                                                |      |
|           | containerHeight      |                                                |      |
| computed  | hasFunId             | funId !== null                                 |      |
| methods   | onNodeClick          | tree的node-click事件，带参数刷新（节点下）数据 |      |
|           | onTreeRefresh        | 整树刷新                                       |      |
|           | onGridSave           | 刷新树当前节点数据，刷新表格                   |      |
|           | onGridDelete         | 刷新树当前节点数据，刷新表格                   |      |
|           | getSelection         | 获取grid 选中数据                              |      |
|           | selectionChange      | emit["selection-change"]                       |      |
| lifecycle | onMounted-useFunInfo | 获取funInfo，标置 显示树                       |      |
|           |                      |                                                |      |









![image-20220110110934937](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220110110934937.png)

![image-20220110111011121](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220110111011121.png)

1.为啥子组件都没有触发node-click 父组件能够接收到事件

