# layout-common-onlyform.vue

## 参数

| 类型      | 名称             | 描述                                                         | 备注                 |
| --------- | ---------------- | ------------------------------------------------------------ | -------------------- |
| props     | page_type        |                                                              |                      |
|           | funIdTabsubProps |                                                              |                      |
|           | selectRow        |                                                              |                      |
| data      | inst             |                                                              |                      |
|           | fun_id           | inst.proxy.$route.query                                      |                      |
|           | **pageType**     | inst.proxy.$route.query                                      |                      |
|           | fun              |                                                              |                      |
|           | **formOption**   |                                                              | basic-form初始化参数 |
|           | **eventsForm**   |                                                              | basic-form初始化参数 |
|           | **formnColumn**  |                                                              | basic-form初始化参数 |
|           | **formMap**      |                                                              | basic-form初始化参数 |
|           | **funId**        | fun_id \|\| props.funIdTabsubProps                           | basic-form初始化参数 |
|           | selectRow        | props.selectRow                                              |                      |
| methods   | createListParam  | 返回请求formOption的请求参数                                 |                      |
|           | getFormOptions   | 获取formOption                                               |                      |
| watch     | fun              | 监听提取funInfo.eventsForm/formnColumn/<br/>formMap/formOption |                      |
| lifecycle | useFunInfo       | 获取fun                                                      |                      |
|           |                  |                                                              |                      |
|           |                  |                                                              |                      |








## 疑问


![image-20220111165136468](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220111165136468.png)