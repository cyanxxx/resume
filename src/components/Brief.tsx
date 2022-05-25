import React from 'react'
import Divider from './Divider'
import PartItem, { PartList } from './PartItem'

export default function Brief() {
  return (
    <div>
         <Divider text="个人简介" />
         <PartList>
             <PartItem>
                熟悉Flex布局，响应式布局，有兼容IPad和PC端UI经验
             </PartItem>
             <PartItem>
                熟悉使用 ES6, Typescript, 熟悉 React，Vue并了解底层原理，有使用 Vue2 ts-component, Vue 3 composition-api经验
             </PartItem>
             <PartItem>
                了解 Node.js Express pm2, 有搭建轻量服务端经验，了解基本的CI/CD, 有配置Jenkins和Github Action 项目部署经验
             </PartItem>
             <PartItem>
                熟悉 Quill, ckeditor5, 理解Blot和Delta之间的关系，有拓展Blot和module的经验，对富文本编辑器有一定了解，熟悉arcgis,
                有绘制路线图，不同参考系的坐标系转化经验
              </PartItem>
             <PartItem>
                熟悉 webpack,了解 vite, 对优化打包速度的插件和自定义loader有一定了解
              </PartItem>
         </PartList>
    </div>
  )
}
