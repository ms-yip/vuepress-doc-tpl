# basic-tree.vue

## 界面逻辑

1. prepareToLoadTree 控制显示整个树

2. treeName 控制显示树名字，点击文字触发on-tree-name-click 参数 { pId: rootId}
3. 点击handleTreeRefresh 触发刷新方法
4. 监听输入框filterText筛选过滤树节点数据
5. el-tree组件

## props

| 参数名            | 描述 | 备注 |
| ----------------- | ---- | ---- |
| funId             |      |      |
| expandOnClickNode |      |      |
| fun               |      |      |

![image-20220106200522706](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220106200522706.png)





## setup

| 类型    | 名称               | 描述                                                      |
| ------- | ------------------ | --------------------------------------------------------- |
| data    | treeRef            |                                                           |
|         | treeData           |                                                           |
|         | filterText         |                                                           |
|         | prepareToLoadTree  | 默认false                                                 |
|         | treeUrl            |                                                           |
|         | treeName           |                                                           |
|         | rootId             |                                                           |
|         | lazy               | 树加载默认是懒加载， treeUrl有loadnormal为非懒加载        |
| watch   | fun                | 初始化：从prop参数中获取treeUrl、treeName、rootId，刷新树 |
|         | filterText         | 调起过滤节点                                              |
| methods | setup              | prepareToLoadTree = true 渲染树                           |
|         | loadNode           | 懒加载数据处理                                            |
|         | refreshCurrentNode |                                                           |
|         | filterNode         | 过滤节点                                                  |
|         | onTreeNameClick    | 点击树名触发                                              |
|         | handleTreeRefresh  | 刷新树                                                    |
|         |                    |                                                           |
|         |                    |                                                           |
|         |                    |                                                           |

![image-20220107093348925](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220107093348925.png)

![image-20220107093450190](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220107093450190.png)





## Events

| 方法名             | 描述 | 备注 |
| ------------------ | ---- | ---- |
| refresh            |      |      |
| on-tree-name-click |      |      |
|                    |      |      |
|                    |      |      |
|                    |      |      |
|                    |      |      |

