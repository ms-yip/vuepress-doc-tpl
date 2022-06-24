basic-tab-grid.vue

# 界面逻辑

1. 数据渲染el-tab-pane

2. el-tab-pane 显示内容的默认插槽按数据动态渲染

   | type    | 组件           |
   | ------- | -------------- |
   | grid    | basic-grid     |
   | tabgrid | basic-tab-grid |
   | form    | basic-form     |

# props

| 参数名   | 必须 | 描述 |      |
| -------- | ---- | ---- | ---- |
| pId      |      |      |      |
| pText    |      |      |      |
| funId    | 是   |      |      |
| pageType |      |      |      |
|          |      |      |      |



# setup

| 类型      | 名称            | 描述                                              |         |
| --------- | --------------- | ------------------------------------------------- | ------- |
| data      | inst            |                                                   |         |
|           | tabs            |                                                   |         |
|           | activeTab       | 当前激活tab name                                  |         |
|           | activeTabName   | 当前激活tab name                                  |         |
|           | noLoadForm      |                                                   | Boolean |
|           | fun             |                                                   |         |
|           | formnColumn     |                                                   |         |
|           | formOption      |                                                   |         |
|           | formMap         |                                                   |         |
|           | gridSelection   |                                                   | Array   |
| methods   | beforeSwitchTab | 切换tabs                                          |         |
|           | addGrideForm    | beforeSwitchTab；更新activeTabName                |         |
|           | selectionChange | 更新gridSelection，派发selection-change事件       |         |
|           | createTabs      | 处理数据，更新tabs、activeTabName                 |         |
| lifecycle | onMounted       | 请求获取fun，<BR/>createTabs获取首个tab的数据渲染 |         |
|           |                 |                                                   |         |
|           |                 |                                                   |         |
|           |                 |                                                   |         |
|           |                 |                                                   |         |

