import React from 'react'
import Brief from '../Brief'
import Grid from '../Grid'
import Header from '../Header'
import PartItem, { PartList } from '../PartItem'
import PersonalProject from '../PersonalProject'
import PracticeProject from '../PracticeProject'
import Project from '../Project'

export default function FirstPage() {
  return (
    <>
      <Header />
      <Grid
        left={(
          <>
            <Project />
            
          </>
        )}
        right={
          <>
          <PartList>
                <PartList>
                  <PartItem
                    info="合作开发  为管理小程序富文本和用户信息的管理后台，主要负责项目前期基础搭建工作"
                    title="上港联 管理小程序的富文本后台"
                    technique={['vue3']}
                  >
                    <PartList>
                      <PartItem>
                        为团队踩坑vite和vue3，分享一些与以往webpack不同的注意点，和vue3项目代码组织问题
                      </PartItem>
                      <PartItem>
                        改造quill.js封装成vue3组件，定制toolbar，改造上传视频和图片模块，支持按钮和拖拽上传，并避免文件名重复，使其与ali-oss结合，上传结束后回填存储后的url到富文本
                      </PartItem>
                    </PartList>
                  </PartItem>
                </PartList>
          </PartList>
            <Brief />
            <PersonalProject></PersonalProject>
          </>
        }
      />
    </>
  )
}
