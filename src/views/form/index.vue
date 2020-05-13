<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="文章标题">
        <el-input v-model="form.articleTitle" />
      </el-form-item>
      <el-form-item label="文章摘要">
        <el-input v-model="form.articleAbstract" />
      </el-form-item>
      <el-form-item label="文章标签">
        <el-tag class="tag" v-for="tag in tags" :key="tag.name" closable :type="tag.type">
          {{tag.name}}
        </el-tag>
      </el-form-item>

      <el-form-item label="正文">
        <el-input type="textarea" :rows="15" placeholder="请输入内容" v-model="textarea">
        </el-input>
      </el-form-item>

      <el-form-item label="文章首图">
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
      </el-form-item>

      <el-form-item label="文章访问路径">
        <el-input v-model="form.articleAbstract" />
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
  export default {
    data() {
      return {
        form: {
          articleTitle: "",
          articleAbstract: "",
          articleTags: []
        },
        tags: [{
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
        ]
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
      }
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
