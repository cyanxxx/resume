import React from "react";
import Brief from "../Brief";
import Grid from "../Grid";
import PartItem, { PartList } from "../PartItem";
import PracticeProject from "../PracticeProject";
import PersonalProject from "../PersonalProject";

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
                                            后或网络不畅时也能方便阅读文档
                                        </PartItem>
                                    </PartList>
                                </PartList>
                            </PartItem>
                        </PartList>
                        <PartList>
                            <PartList>
                                <PartItem
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
                                        <PartItem>
                                            优化项目在ipad的交互，解决原生多选下拉选择在ipad下无法直接在页面查看，利用webpack插件分离媒体查询代码，动态载入css样式，file-saver在ipad下载文件不能显示问题
                                        </PartItem>
                                    </PartList>
                                </PartItem>
                            </PartList>
                        </PartList>

                        {/* <PracticeProject /> */}
                        <PersonalProject></PersonalProject>
                    </>
                }
            />
        </div>
    );
}
