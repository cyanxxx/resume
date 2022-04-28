import React from 'react'
import Divider from './Divider'
import PartItem, { PartList } from './PartItem'

export default function Brief() {
  return (
    <div>
         <Divider text="个人简介" />
         <PartList>
             <PartItem>
                熟悉Flex布局，响应式布局，熟悉使用scss
             </PartItem>
             <PartItem>
                熟悉使用ES6, Vue并了解底层原理，同时也了解主流的React React Native GraphQL
             </PartItem>
             <PartItem>
                熟悉使用Typescript，负责的项目多以TypeScript为主
             </PartItem>
             <PartItem>
                了解Node.js express jest, 有搭建轻量服务端经验，了解基本的CI/CD, 有配置Jenkins和Github Action 项目部署经验
             </PartItem>
             <PartItem>
               向file-saver提pull/request解决safair 6.0+不能在新窗口打开并下载，向vue-html-to-paper提pull/reuqeset,解决生成pdf时form表单控件丢失输入输出
              </PartItem>
         </PartList>
    </div>
  )
}
