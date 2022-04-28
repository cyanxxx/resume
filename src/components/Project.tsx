import React from 'react'
import Divider from './Divider'
import PartItem, { PartList } from './PartItem'

export default function Project() {
  return (
    <div>
        <Divider text="工作经验" />
            <PartList>
                <PartItem title="广州市艾森斯软件研发有限公司 2019.09-2022.01"></PartItem>
                <PartList>
                    <PartItem 
                        info={`负责独立前端开发和生成PDF的Node后端开发 管理用户从其他终端上传的图片和视频，支持不同角色群组对资源进行不同操作，视频发生点和拍摄行径能在地图上查看，添加，跳转等操作，视频和地图整体称为一个案件，一个案件可以由用户批注后下载为pdf`}
                        title="HKPF 图像视频后台管理系统"
                        technique={['vue2']}
                        >
                        <PartList>
                            <PartItem>
                                通过后端提供的swagger，自动化生成调用服务端api的axios代码，再通过全局配置axios自定义一些方法，为相应操作记录用户操作和接口重试等
                            </PartItem>
                            <PartItem>
                                优化请求图片的次数，将读取后的图片存入运行时内存，使用LFU算法将长久不再访问的图片释放，解决图片在三个网格系统下不能铺满显示分页的问题，
                                优化请求api，避免在ie兼容模式下的浏览器，切换账号时访问到上一个账号的缓存图片
                            </PartItem>
                            <PartItem>
                                优化生成pdf时间长问题，利用webpack将项目分离出一个生成pdf的入口文件，减少无用代码开销，在浏览器增加错误dom节点，而不是等待超时，利用pm2监控系统运作生成日志文件
                            </PartItem>
                            <PartItem>
                                为团队输出一些解决方案，利用puppeteer生成pdf方案，将arcgis地图和视频转成图片的方法，
                                解决视频海报与视频比列不一致导致，刚开始播放使页面跳动问题，抽离多输入下拉远程输入框组件,配置webpack解决本地调试输入框组件时无法链接到sourcemap调试，
                                DPlayer的vue封装组件并增强优化切换视频时hls格式视频没有显性destroy导致内存溢出和切换时增加loading效果，避免下个视频的信息未切换成功时已显示下一个视频的海报，
                                允许播放后端未切片完成的视频，利用nginx搭建内网的arcgis的官方文档，在官网版本升级后或网络不畅时也能方便阅读文档
                            </PartItem>
                        </PartList>
                    </PartItem>
                    <PartItem
                        info={`合作开发 旧系统jsp重构成前后端分离办公系统，负责3个子系统的开发，包含出差审批系统，活动审批系统，员工管理系统，近100个表单开发，包括表单校验，计算表单，打印表单，邮件跳转到对应表单审批等功能`}
                        title="ogcio 办公系统审批相关系统"
                        technique={['react']}
                    >
                        <PartList>
                            <PartItem>
                                封装各种底层组件，并分享给负责其他子系统的同事，为同一类型的页面写HOC减少重复代码，编写脚本，解决非兼容引入组件的方法变更，以实现在各个系统上，提高开发效率
                            </PartItem>
                            <PartItem>
                                设立service层，负责转换旧系统数据与新系统数据，以适配旧系统返回和接受的数据结构不变下，不影响新系统的基于ui设计的数据结构
                            </PartItem>
                            <PartItem>
                                优化项目在ipad的交互，解决原生多选下拉选择在ipad下无法直接在页面查看，利用webpack插件分离媒体查询代码，动态载入css样式，file-saver在ipad下载文件不能显示问题
                            </PartItem>
                        </PartList>  
                    </PartItem>
                    <PartItem  
                        info="合作开发  为管理小程序富文本和用户信息的管理后台，主要负责项目前期基础搭建工作"
                        title="上港联 管理小程序的富文本后台"
                        technique={['vue3']}
                    >
                        <PartList>
                            <PartItem>
                                搭建vite，迁移一些webpack的loader不再生效的配置
                            </PartItem>
                            <PartItem>
                                改造quill.js封装成vue3组件，定制toolbar，改造上传视频和图片模块，支持按钮和拖拽上传，并避免文件名重复，使其与ali-oss结合，上传结束后回填存储后的url到富文本
                            </PartItem>
                        </PartList>
                    </PartItem>
                </PartList>
            </PartList>
    </div>
  )
}
