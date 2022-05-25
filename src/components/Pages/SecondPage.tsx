import React from 'react'
import Brief from '../Brief'
import Grid from '../Grid'
import PartItem, { PartList } from '../PartItem'
import PracticeProject from '../PracticeProject'
import PersonalProject from '../PersonalProject'

export default function SecondPage() {
  return (
    <div>
          <Grid
              left={
              <>
              <PartList noStyle>
                <PartItem>
                    <PartList>
                      <PartList>
                        <PartItem>
                            优化项目在ipad的交互，解决原生多选下拉选择在ipad下无法直接在页面查看，利用webpack插件分离媒体查询代码，动态载入css样式，file-saver在ipad下载文件不能显示问题
                        </PartItem>
                      </PartList>    
                  </PartList>
                </PartItem>
              </PartList>
              
                <PracticeProject />
                <PersonalProject></PersonalProject>
              </>
            }
          />
    </div>
  )
}
