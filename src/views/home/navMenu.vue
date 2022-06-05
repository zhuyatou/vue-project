<template>
  <el-aside width="200px">
    <el-menu default-active="1" class="el-menu-vertical-demo"
     router>
      <!-- 无子级 -->
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 无子级 -->
      <el-menu-item index="/stats">
        <i class="el-icon-setting"></i>
        <span slot="title">数据管理</span>
      </el-menu-item>
      <!-- 有子级 -->
      <el-submenu index="/wms">
        <template slot="title">
          <i class="el-icon-setting"></i>
          信息管理</template
        >
        <el-menu-item index="/wms/list">列表管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {};
</script>

<style></style>
