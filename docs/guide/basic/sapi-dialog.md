# 组件

| 类型     | 名称                      | 描述                                                         | 备注                       |
| -------- | ------------------------- | ------------------------------------------------------------ | -------------------------- |
| props    | value                     |                                                              |                            |
|          | title                     |                                                              |                            |
|          | titleAlign                | [left\|center(默认)\|right]                                  |                            |
|          | loading                   | 显示加载动画 默认： false；显示加载动画                      |                            |
|          | loadingText               | 默认空字符串                                                 |                            |
|          | width                     | [Number, String]默认600px                                    |                            |
|          | minWidth                  | [Number, String]默认300px                                    |                            |
|          | height                    | [Number, String]                                             |                            |
|          | minHeight                 | [Number, String]默认200px                                    |                            |
|          | maxHeight                 | [Number, String]默认100%                                     |                            |
|          | left                      | [Number, String]                                             |                            |
|          | top                       | [Number, String]                                             |                            |
|          | zIndex                    | [Number]                                                     |                            |
|          | html                      | html字符串或dom元素                                          |                            |
|          | components                | [Array]传入vue组件                                           |                            |
|          | moveable                  | [Boolean] 默认true；是否允许拖动                             | 计算属性computedMoveable   |
|          | overEdge                  | [Boolean]默认false；是否允许弹窗超出屏幕                     |                            |
|          | showMax                   | [Boolean]默认true；是否显示最大化按钮                        |                            |
|          | showClose                 | [Boolean]默认true；是否显示关闭按钮                          |                            |
|          | showCancelBtn             | [Boolean]默认true；显示取消按钮；                            |                            |
|          | showOkBtn                 | [Boolean]默认true；显示确认按钮；                            |                            |
|          | showFooter                | [Boolean]默认true；显示底部footer；                          |                            |
|          | cancelBtnText             | [String]默认：取消；                                         |                            |
|          | okBtnText                 | [String]默认：确定；                                         |                            |
|          | isMax                     | [Boolean]默认false；初始显示为最大化窗口                     |                            |
|          | beforeClose               | [Function]<br/>关闭前执行的函数，如果返回false则不执行关闭操作 |                            |
|          | beforeCancel              | [Function]<br/>取消前执行的函数，如果返回false则不执行取消操作 |                            |
|          | okHandler                 | [Function]<br/>点击确认按钮执行的操作,如果使用promise记得调用resolve |                            |
|          | cancelHandler             | [Function]<br/>点击取消按钮执行的操作                        |                            |
|          | scrollHandler             | [Function]<br/>content区域的滚动事件                         |                            |
|          | openInNewTag              | [Boolean]<br/>是否打开为新的浏览器标签页                     |                            |
|          | closeDelay                | [Number]<br/>延时关闭窗口                                    |                            |
|          | shadowMove                | [Boolean]<br/>鼠标移动时只移动一个空的容器，最后再将空容器的位置赋给主窗口，这样性能更好 |                            |
|          | pId                       | [String, Number]                                             |                            |
|          | cache                     | Boolean                                                      |                            |
|          | context                   | Object                                                       |                            |
|          | resize                    | [Boolean, String];默认true；是否可拖曳改变大小               | 计算属性computedResizeable |
| data     | uid                       |                                                              |                            |
|          | ZIndex                    |                                                              |                            |
|          | visible                   |                                                              |                            |
|          | dialogWidth               | 弹窗位置参数                                                 |                            |
|          | dialogMinWidth            | 弹窗位置参数                                                 |                            |
|          | dialogMaxWidth            | 弹窗位置参数                                                 |                            |
|          | dialogHeight              | 弹窗位置参数                                                 |                            |
|          | dialogMinHeight           | 弹窗位置参数                                                 |                            |
|          | dialogMaxHeight           | 弹窗位置参数                                                 |                            |
|          | dialogLeft                | 弹窗位置参数                                                 |                            |
|          | dialogTop                 | 弹窗位置参数                                                 |                            |
|          | dialogBCRCopy             | 备份dialogBCR(宽高左上定位)                                  |                            |
|          | dialogIsMax               |                                                              |                            |
|          | dialogBCR                 |                                                              |                            |
|          | renderedDialogBCR         |                                                              |                            |
|          | renderedDialogBCR         |                                                              |                            |
|          | dialogIsMoving            |                                                              |                            |
|          | dialogMovingBCR           |                                                              |                            |
|          | dialogMovingPos           |                                                              |                            |
|          | boxMoved                  |                                                              |                            |
|          | dialogIsResizing          |                                                              |                            |
|          | dialogResizeBCR           |                                                              |                            |
|          | dialogResizePos           |                                                              |                            |
|          | currentResizeMoveSide     |                                                              |                            |
|          | boxResized                |                                                              |                            |
|          | vueComponentIns           |                                                              |                            |
|          | headerHeight              |                                                              |                            |
|          | footerHeight              |                                                              |                            |
|          | enableListenMainBoxResize |                                                              |                            |
|          | firstResetMaxTriggered    |                                                              |                            |
|          | closeTid                  |                                                              |                            |
|          | resolve                   |                                                              |                            |
|          | reject                    |                                                              |                            |
| computed | computedShadowStyles      | 返回对话框的BCR位置 的style样式                              |                            |
|          | computedTitleStyle        | 返回对话框title的BCR位置 的style样式                         |                            |
|          | computedContentStyles     | 返回对话框content的BCR位置 的style样式                       |                            |
|          | computedMainStyles        | 返回对话框mian的BCR位置 的style样式                          |                            |
|          |                           |                                                              |                            |
|          |                           |                                                              |                            |
|          |                           |                                                              |                            |
|          |                           |                                                              |                            |
|          |                           |                                                              |                            |

![image-20220112144017955](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220112144017955.png)

思路：

visible = value

监听visible true：setBCR；如果isMax，setDialogMax；计算ZIndex$emit("on-open")

​	false：cache 为false时，resetData；$emit("on-close")

监听isMax true：setDialogMax

​	false：resetDialogMax

监听html setHtmlContent

深监听  dialogMovingBCR，执行limitEdgeBCRValue

深监听  dialogBCR，debounce执行mainBoxResizeHandler



| 类型    | 名称                                  | 描述                                             | 备注     |
| ------- | ------------------------------------- | ------------------------------------------------ | -------- |
| methods | init                                  |                                                  |          |
|         | onTransitionend                       | resetData                                        |          |
|         | resetData                             | 重设数据                                         |          |
|         | mainBoxResizeHandler                  |                                                  |          |
|         | mainBoxResizeListenerEnableHanlder    |                                                  |          |
|         | disableMainBoxResizeListenerMomentary | // @TODO                                         |          |
|         | getComponents                         | 获取components参数注册的组件实例                 |          |
|         | setHtmlContent                        | 插入html内容                                     |          |
|         | mountComponents                       | 挂载子组件                                       |          |
|         | setBCR                                | 计算dialogBCR                                    |          |
|         | computePrimitiveValue                 | 计算原始值；支持弹窗宽度是百分数，其他则原样返回 |          |
|         | limitEdgeBCRValue                     | 设置不能超出屏幕时，BCR正确的宽高计算            |          |
|         | limitRectValue                        | 调整BCR的宽高值                                  |          |
|         | setDialogMax                          | 设置窗口最大的时的BCR，缓存原本的dialogBCR       |          |
|         | resetDialogMax                        | 还原弹窗最大化                                   |          |
|         | close                                 | reject("close")                                  |          |
|         | closeLoading                          | 关闭loading                                      |          |
|         | cancel                                | reject("cancel")                                 |          |
|         | ok                                    | 执行okHandler                                    |          |
|         | promise                               | 设置promise                                      |          |
|         | moveMouseDownHandler                  | 设置dialogMovingPos/dialogMovingBCR              |          |
|         | moveMouseUpHandler                    | 设置boxMoved，计算dialogBCR                      |          |
|         | moveMouseMoveHandler                  | 计算对话框位置信息                               |          |
|         | resizeMouseDownHandler                | dialogResizeBCR/dialogBCR/dialogResizePos        |          |
|         | resizeMouseUpHandler                  | 计算dialogBCR                                    | 还需细读 |
|         | resizeMouseMoveHandler                | resizeBCRSetHandler                              |          |
|         | resizeBCRSetHandler                   | 调整大小，计算宽高、dialogResizeBCR /dialogBCR   | 还需细读 |
|         | directlySetStyles                     |                                                  | setStyle |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |
|         |                                       |                                                  |          |

![image-20220113191432266](https://gitee.com/yeminshan/photos/raw/master/typro_img_upload/image-20220113191432266.png)





# Element.getBoundingClientRect()

`Element.getBoundingClientRect()` 方法返回元素的大小及其相对于视口的位置。