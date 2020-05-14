<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="form.articleTitle" placeholder="请输入标题"/>
      </el-form-item>
      <el-form-item label="文章摘要">
        <el-input v-model="form.articleAbstract" placeholder="请输入文章摘要"/>
      </el-form-item>
      <el-form-item label="文章标签">



        <el-select
          v-model="form.articleTags"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签">
          <el-option
            v-for="item in articleTags"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>


      </el-form-item>
      <el-form-item label="正文">
        <tinymce :height="300" v-model="form.content" ></tinymce>
      </el-form-item>
      <el-form-item label="文章首图">
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章访问路径">
        <el-input v-model="form.articleLink" placeholder="请输入内容"/>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker v-model="form.createTime" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="文章状态">
        <el-radio-group v-model="form.radio">
          <el-radio :label="0">已发布</el-radio>
          <el-radio :label="1">草稿</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="个人简介">
        <markdown-editor v-model="form.contentMark" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即添加文章</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>

  import Tinymce from '@/components/Tinymce'
  import MarkdownEditor from '@/components/MarkdownEditor'
  import { addArticle } from "@/api/article";

  export default {
    name:"Add",
    components:{
      Tinymce,
      MarkdownEditor
    },

    data() {
      return {
        form: {
          articleTitle: "",
          articleAbstract: "",
          articleTags:[],
          content:"",
          contentMark:"",
          radio:0,
          disabled: false,
          articleLink:"",
          createTime:""
        },
        articleTags: [
          {
            value: 'HTML',
            label: 'HTML'
          }, {
            value: 'CSS',
            label: 'CSS'
          }, {
            value: 'JavaScript',
            label: 'JavaScript'
          }
        ],
      }
    },
    methods: {
      onSubmit() {
        //this.$message('submit!')
        console.log(this.form)
        addArticle().then((res)=>{
          console.log(res)
        })
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      },
      //鼠标单击的事件
      onClick(e, editor) {
        console.log('Element clicked')
        console.log(e)
        console.log(editor)
      },
      //清空内容
      clear() {
        this.$refs.editor.clear()
      }
    },
    mounted() {

    }
  }

</script>

<style scoped>
  .line {
    text-align: center;
  }

  .tag {
    margin-right: 20px;
  }

</style>
