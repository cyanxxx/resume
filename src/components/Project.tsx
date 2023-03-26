import React from "react";
import Divider from "./Divider";
import PartItem, { PartList } from "./PartItem";

export default function Project() {
    return (
        <div>
            <Divider text="工作经验" />
            <PartList>
                <PartItem title="广东咏声动漫股份有限公司 2022.07-2022.11">
                    <PartList>
                        <PartItem
                            info="合作开发  动画制作流程管理后台"
                            title="in桌面端管理后台系统"
                            technique={["react", "electron"]}
                        >
                            <PartList>
                                <PartItem>
                                    高度定制化组件，深入antd的底层rc库，实现符合设计图的下拉菜单组件和树形组件，并利用虚拟滚动列表技术缓解大量数据在页面渲染的压力，实现多列的数据的虚拟滚动，
                                    能根据视窗大小调整显示数量
                                </PartItem>
                                <PartItem>
                                    通过electron的browserView实现多页签功能，利用原生的多进程功能，其中一个页面崩溃不会影响另一个窗口，并通过webpack实现分页打包，渲染进程间通过分别与主进程通信，进行跨进程通信，利用electron-store保存用户登录信息，
                                    使窗口之间能读到同一份数据
                                </PartItem>
                                <PartItem>
                                    引入react-query库,优化对异步数据的管理，对异步数据进行缓存，对不经常变动的数据设置新鲜值进行缓存和一个页面内多个组件请求同一份数据也不会进行多次请求，不需要将数据提升到顶层组件进行传递
                                </PartItem>
                            </PartList>
                        </PartItem>
                    </PartList>
                </PartItem>
            </PartList>
            <PartList>
                <PartItem title="广州市艾森斯软件研发有限公司 2019.09-2022.01"></PartItem>
                <PartList>
                    <PartItem
                        info="合作开发  为管理小程序富文本和用户信息的管理后台，主要负责项目前期基础搭建工作"
                        title="上港联 管理小程序的富文本后台"
                        technique={["vue3"]}
                    >
                        <PartList>
                            <PartItem>
                                利用vite在开发阶段快速打包，配置svg plugin
                            </PartItem>
                            <PartItem>
                                完成一些定制化富文本的需求，通过Quill.js，使用JSX来定制化toolbar，改造上传视频和图片模块，支持拖拽上传，调整图片大小，配合ali-oss完成上传
                            </PartItem>
                        </PartList>
                    </PartItem>
                    <PartItem
                        info={`负责独立前端开发和生成PDF的Node后端开发 管理用户从其他终端上传的图片和视频，支持不同角色群组对资源进行不同操作，视频发生点和拍摄行径能在地图上查看，添加，跳转等操作，视频和地图整体称为一个案件，一个案件可以由用户批注后下载为pdf`}
                        title="HKPF 图像视频后台管理系统"
                        technique={["vue2"]}
                    >
                        <PartList>
                            <PartItem>
                                通过后端提供的swagger，自动化生成调用服务端api的axios代码，能实时同步后端接口，并减少写调用api接口的时间
                            </PartItem>
                            <PartItem>
                                优化请求图片的次数，将读取后的图片存入运行时内存，使用LFU算法将长久不再访问的图片释放，解决图片在三个网格系统下不能铺满显示分页的问题，
                                优化请求api，避免在ie兼容模式下的浏览器，切换账号时访问到上一个账号的缓存图片
                            </PartItem>
                            <PartItem>
                                优化生成pdf时间长问题，利用webpack将项目分离出一个生成pdf的入口文件，减少无用代码开销，在浏览器增加错误dom节点，而不是等待超时，利用pm2监控系统运作生成日志文件
                            </PartItem>
                            <PartItem>
                                利用puppeteer生成pdf，无需后端写模板，优化使用DPlayer时，切换hls格式视频没有显性destroy导致内存溢出和切换时增加loading效果，避免下个视频的信息未切换成功时已显示下一个视频的海报，
                                通过更改m3u8文件，允许播放后端未切片完成的视频，利用nginx搭建内网的arcgis的官方文档，在官网版本升级后或网络不畅时也能方便阅读文档
                            </PartItem>
                        </PartList>
                    </PartItem>
                    {/* <PartItem
                        info={`合作开发 旧系统jsp重构成前后端分离办公系统，负责3个子系统的开发，包含出差审批系统，活动审批系统，员工管理系统，近100个表单开发，包括表单校验，计算表单，打印表单，邮件跳转到对应表单审批等功能`}
                        title="ogcio 办公系统审批相关系统"
                        technique={["react"]}
                    >
                        <PartList>
                            <PartItem>
                                封装各种底层组件，并分享给负责其他子系统的同事，为同一类型的页面写HOC减少重复代码，编写脚本，解决非兼容引入组件的方法变更，以实现在各个系统上，提高开发效率
                            </PartItem>
                            <PartItem>
                                设立service层，负责转换旧系统数据与新系统数据，以适配旧系统返回和接受的数据结构不变下，不影响新系统的基于ui设计的数据结构
                            </PartItem>
                        </PartList>
                    </PartItem> */}
                </PartList>
            </PartList>
        </div>
    );
}
