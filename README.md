##文档  
- 暂时参考vue-drag-table文档地址: http://39.97.251.151:18080/home

##  0.1.18 :2019.5.31
- new
  - 对已展开的树形容器（treeContainer）进行删除，会连同#treeParent中children里的container一同删除。
  
##  0.1.17 :2019.5.23
- new
  - BaseTable中getTheadLeavesList1方法加入第二入参 needResize,该值为false时不调用BaseThead的resize方法，即获取上一次渲染后的状态。
  
##  0.1.15 :2019.5.19
- bugFix
  - 修复当通过addReplace方法添加带有treeContainer的容器时，不能添加孩子bug
  - 去除basecell存储上一次单元格状态的功能。
  - 修改dragstartData中的withchilren不能传入dropHand中
##  0.1.14 :2019.3.20
- new
  - 增加dragOver,dragLeave事件回调处理，当返回'cancel'时，取消默认dragover,dragLeave事件；

##  0.1.13 :2019.3.18
- new
  - 增加 drop事件回调处理，当返回'cancel'时，取消用户拖拽操作（可进行自定义添加事件）；


##  0.1.12 :2019.3.14
- new
  - 增加 'dragLeave' | 'dragEnter' | 'dragEnd' |事件回调
- change
  - 简化View层逻辑
  
##  0.1.11 :2019.3.13
- new
  - BaseCell里增加 nullReplace 默认为''，用于替换当value为null、''、undefined的情况
  - 增加 dragOver 事件回调
- bugFix
  - 修改BaseTbody类中setData方法，bug导致SetTbodyData后公式计算错误;

##  0.1.10 :2019.3.12
- change
  - 修改数据存储导出结构

##  0.1.9 :2019.3.1
- bugFix
  - 修改SetContainerData时部分属性赋值失败


## 0.1.8 2019.3.1
- bugFix
  - 修改 TopLeltCell 宽高计算bug

## 0.1.5 2019.2.27
  - change
  - 修改indexContainer的id属性为renderId,原有Id改为对应的行列号
  - 修改TbodyContainer中renderByThead属性的更新机制
- bugFix
  - 按住Ctrl选择单元格 不能从下往上选
  - 多拽到单元格上方样式错位bug
# ng-drag-Table
