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
        <el-tag class="tag" v-for="tag in tags" :key="tag.name" closable :type="tag.type">
          {{tag.name}}
        </el-tag>
      </el-form-item>

      <el-form-item label="正文">
<!--        <el-input type="textarea" v-model="textArea" :rows="15" placeholder="请输入内容"/>-->

        <tinymce :height="300" v-model="content" ></tinymce>
      </el-form-item>

      <el-form-item label="文章首图">
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>

      <el-form-item label="文章访问路径">
        <el-input v-model="form.articleAbstract" placeholder="请输入内容"/>
      </el-form-item>

      <el-form-item label="创建时间">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="文章状态">
        <el-radio-group v-model="radio">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
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
  export default {
    components:{
      Tinymce
    },

    data() {
      return {
        content:" `<h1 style=\"text-align: center;\">Welcome to the TinyMCE demo!</h1><p style=\"text-align: center; font-size: 15px;\"><img title=\"TinyMCE Logo\" src=\"//www.tinymce.com/images/glyph-tinymce@2x.png\" alt=\"TinyMCE Logo\" width=\"110\" height=\"97\" /><ul>\n" +
          "        <li>Our <a href=\"//www.tinymce.com/docs/\">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href=\"https://community.tinymce.com/forum/\">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href=\"https://tinymce.com/pricing\">TinyMCE premium subscriptions</a>.</li>\n" +
          "      </ul>`",
        form: {
          articleTitle: "",
          articleAbstract: "",
          articleTags: []
        },
        tags: [
          {
            name: '标签一',
            type: ''
          },
          {
            name: '标签二',
            type: 'success'
          },
          {
            name: '标签三',
            type: 'info'
          },
          {
            name: '标签四',
            type: 'warning'
          },
          {
            name: '标签五',
            type: 'danger'
          }
        ],
        value1:"",
        radio:0,
        msg: 'Welcome to Use Tinymce Editor',
        disabled: false,
        textArea:""
      }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
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
