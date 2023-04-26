# Maven
## 为什么使用maven?(原因、优势)
传统项目管理状况分析:     
&nbsp;&nbsp;&nbsp;&nbsp;<font size=2>当项目中运用到多种技术时,每个技术之间相互联系运作,
例如5版本的mybaties与4版本的junit等等技术结合;但是当项目需要更新换代时,
一个技术的提升其他相应的也都要跟着提升,要不然可能会出现jar包不统一或兼容的问题;
测试环境的不同,运行出来的结果也不同,在Linux下与在window下运行的结果是不同的,
这就需要在Linux在重新编译,但是Linux是不支持类似idea的图形界面的,以及一系列其他问题......</font>      
而Maven作为一种项目管理工具,可以很好的管理上述出现的问题以及未提到的问题
## Maven
>特点:由JAVA编写;将一个项目看作是一个对象,需要XML文件对项目信息进行描述
> ,由maven加载配置文件获取项目信息

作用:
<img src="E:\Github\pcj.github.io\Java\Maven_function.png"/>
## 基本概念
## 仓库
  - **仓库**:用于存储资源,管理各种jar包,而存放jar包的地方就叫仓库
  - 仓库的分类:
    - **本地仓库**:自己电脑上存储的仓库,用于连接远程仓库获取资源
    - 远程仓库
      - 中央仓库:Maven团队维护,存储所有资源的仓库
      - **私服**:部门/公司范围内存储资源的仓库,从中央获取资源,避免都去中央,造成拥堵
        <img height="200" src="E:\Github\pcj.github.io\Java\warehouse.png" width="400"/>
        - **私服的作用**:保护具有版权的资源,包含购买或自主研发的jar包,但不包含中央仓库的jar包;
        一定范围内共享资源,仅对内部开放,不对外共享
## 坐标
>(了解即可)

    用来描述仓库中资源位置的信息,https://repo1.maven.org/maven2/或https://mvnrepository.com/
<img src="E:\Github\pcj.github.io\Java\coordinate.png">

**机器会通过(xml中)标识符识别资源与下载资源**

## 仓库配置
### 本地仓库的配置
    在我们C:\Users\lenovo下的命令行下输入mvn后生成的.m2就是本地仓库
    但是一直放在C盘会爆满,所以通过在maven的安装目录下的conf的settings的localRepository设置自己创建的文件地址
    通过查看配置文档可以知道maven默认下载资源的方法是从中央仓库中下载的,但是中央仓库在国外,下载速度慢
    所以需要在settings里添加镜像仓库(阿里搞的)
<img src="E:\Github\pcj.github.io\Java\mirror.png">




