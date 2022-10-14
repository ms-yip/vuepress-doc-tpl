# basic-form.vue

## 界面

1. eventsForm 渲染按钮
2. formMapData渲染分块表单或者是没有filedset的表单





## props

| 名称        | 描述 | 备注 |
| ----------- | ---- | ---- |
| funId       |      |      |
| formnColumn |      |      |
| formOption  |      |      |
| eventsForm  |      |      |
| formMap     |      |      |
|             |      |      |
|             |      |      |
|             |      |      |
|             |      |      |



## setup

| 类型      | 名称         | 描述                                                | 备注 |
| --------- | ------------ | --------------------------------------------------- | ---- |
| data      | inst         | 实例                                                |      |
|           | obj          | 表单数据对象                                        |      |
|           | column       | 渲染数据源                                          |      |
|           | eventId      |                                                     |      |
|           | activeNames  |                                                     |      |
|           | formMapData  | 渲染分块数据源                                      |      |
|           | isCloumData  |                                                     |      |
| methods   | typeChange   | 处理form的type属性，<br/>其他readonly，disabled属性 |      |
|           | sortfieldset | 元素框排序:totalHeight/top排序                      |      |
|           | eventCommon  |                                                     |      |
|           | save         | 数据处理（组装请求参数），保存                      |      |
| lifeCycle | onMounted    | formMap、formnColumn数据处理                        |      |
|           |              |                                                     |      |
|           |              |                                                     |      |

