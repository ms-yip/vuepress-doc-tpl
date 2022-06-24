# basic-grid.vue
## created
1. 组件this 挂在在window.grid 上 // @TODO 有什么用

2. 异步请求 initData
2.1 **fun是否存在， 不存在fetchFunInfo请求获取**
    Object.freeze 保证页面配置数据不被修改![image-20220105155708485](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220105155708485.png)

  2.2  根据fun 的 **columnList组装avue-curd 的option.column**

  2.3 this.**events 暂存 fun.events** 事件

  2.4 **rowBtnEvent  this.events过滤出gridbtn** （表格按钮事件）判断事件数量设置avue-curd参数显示操作列

  2.5 queryTool = funInfo?.**querys 查询表单**,  queryTool[0].columns  用于渲染查询表单

  2.6 // @TODO 下面两句不知道是用来干什么的![image-20220105163515580](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220105163515580.png)

  2.7  $nextTick 更新表格高度

  ​	下面这句执行结果一直是undefined // @TODO  为啥在initdata中调用后还在mounted调用一次 还有一个resize时间监听， 会在哪里出发resize事件

  ![image-20220106092010430](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220106092010430.png)




3. 异步请求 getList
    3.1. 打开loading 

  3.2 组装请求参数

  

| 参数名     | 描述                    | 备注 |
| ---------- | ----------------------- | ---- |
| baseSQL    | 高级查询自定义的SQL语句 |      |
| orgSQL     | //@TODO                 |      |
| tree_topid | //@TODO                 |      |

  3.3 请求表格数据   advanceWhereSQL // @TODO 什么用途   安全问题

  3.4 取消表格选中数据，默认选中第一行







## mounted

![image-20220105200729522](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220105200729522.png)

## 界面

1. 查询动态表单

   ![image-20220106112939056](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220106112939056.png)

   ![image-20220105195853675](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220105195853675.png)

<img src="https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220105200506674.png" alt="image-20220105200506674" style="zoom:80%;" />

2. avue-crud 按钮插槽

   ![image-20220106113040030](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220106113040030.png)

   ![image-20220105202905591](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220105202905591.png)

   eval() 函数会将传入的字符串当做 JavaScript 代码进行执行。// @TODO 注意是否有前端安全问题



## props

| 参数名   | 描述                                                         | 备注 |
| -------- | ------------------------------------------------------------ | ---- |
| pageType | 可选参数：grid select subgrid import （按钮只在导入窗口内显示） |      |
|          |                                                              |      |
|          |                                                              |      |

## methods

| 方法名              | 描述                            | 备注                       |
| ------------------- | ------------------------------- | -------------------------- |
| searchComponent     | 表单查询的类型转换              | 内置数据处理方法           |
| dicAvueData         | 获取表单dicData值               | 内置数据处理方法           |
| updateGridHeight    | 计算grid表格的适应高度          |                            |
| initData            | avue-curd参数等初始化数据处理   |                            |
| beforeOpen          |                                 | 未实现 avue-curd相关       |
| selectArInfo        |                                 | 未实现                     |
| dialogSelectWindow  | 选择弹窗@TODO                   |                            |
| selectionChange     | 行选中                          |                            |
| dataAVailableRule   |                                 |                            |
| handleRowClick      | 行选中                          | avue-curd相关              |
| handleRowDBLClick   | 双击行选中，打开avue-curd编辑行 |                            |
| gridcopy            |                                 |                            |
| gridadd             |                                 |                            |
| gridsave            |                                 |                            |
| batchupdate         | 批量修改内容确认事件            |                            |
| batchupdateWindow   | 批量修改内容事件                |                            |
| openChangePWDWindow | 修改密码                        |                            |
| commonQueryWindow   |                                 | 打开弹窗                   |
| opensubwindow       | 设置角色                        |                            |
| deleteRoleEvent     | 删除角色                        |                            |
| importWindow        | 导入窗口                        |                            |
| loadModalComponents |                                 |                            |
| formWindow          | Form窗口 表单设置               |                            |
| openFormWindow      |                                 |                            |
| dataimport          | 导入数据                        |                            |
| openResetPWDWindow  | 重置密码                        |                            |
| openMailDialog      | 发送邮件弹框                    |                            |
| griddelete          | 删除                            |                            |
| update              | 停用账号                        |                            |
| handleCurrentChange |                                 | avue-curd相关              |
| handleSizeChange    |                                 | avue-curd相关              |
| sortChange          |                                 | avue-curd相关              |
| refreshChange       |                                 | avue-curd相关              |
| createListParam     | 列表API的参数生成器             |                            |
| getList             | 获取列表数据                    |                            |
| resetForm           | 清空请求条件，刷新列表          |                            |
| commonQueryWindow   |                                 |                            |
| seniorQueryWindow   |                                 | 复杂查询窗口               |
| eventCommon         | 按钮的事件调用处理器            |                            |
| eventCommon         |                                 |                            |
| runURI              |                                 | 未实现                     |
| exportCommonDialog  |                                 |                            |
| exportXls           | 导出excel                       |                            |
| exportJson          | 导出json                        |                            |
| exportSQL           | 导出SQL                         |                            |
| exportScala         |                                 |                            |
| copyimportwindow    |                                 | 复制excel数据，只有log功能 |
| exec                | 仅执行工作流                    |                            |
| openUpload          | 上传文件                        |                            |
| downloadAttachment  | 下载文件window.open             |                            |
| viewAttachment      | 查看文件                        |                            |
| chengRole           | 授权功能-批量授权               |                            |
| openWindowBlank     | 独立窗口打开                    |                            |
| getSelection        | 获取avue-curd选中数据           |                            |
| addForm             |                                 |                            |
|                     |                                 |                            |
|                     |                                 |                            |
|                     |                                 |                            |
|                     |                                 |                            |

this.currentRowKey = this.funInfoParams?.keyIDColumn; // 这个参数什么用   // 数据的唯一标识？

复制功能 注释和代码歧义  编辑未保存 判断该值也是存在的

![image-20220106140530249](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220106140530249.png)

SapiDialog功能