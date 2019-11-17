<template>
	<div class="box">
		<div class="hender">创建简历-联系方式与作品</div>
		<div class="content">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="真实姓名 " prop="name">
					<el-input placeholder="填写真实姓名" v-model="ruleForm.name" clearable></el-input>
				</el-form-item>
				<el-form-item label="手机号 " prop="mobile">
					<el-input placeholder="填写常用手机号" v-model.number="ruleForm.mobile" clearable></el-input>
				</el-form-item>
				<el-form-item prop="email" label="邮箱">
					<el-input v-model="ruleForm.email"></el-input>
				</el-form-item>
				<el-form-item prop="QQ" label="QQ">
					<el-input v-model="ruleForm.QQ" placeholder="还在职,QQ联系更方便"></el-input>
				</el-form-item>
				<el-form-item prop="opus" label="作品">
					<el-input v-model="ruleForm.opus" placeholder="使用站酷作品集" :disabled='true' class='opus-input'></el-input>
					<el-input v-model="ruleForm.opus" placeholder="使用本地上传" :disabled='true' class='opus-input'></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					name: '',
					mobile: '',
					email: '',
					QQ:'',
					opus:'',
				},
				rules: {
					name: [{
							required: true,
							message: '请输入真实姓名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 5,
							message: '长度在 2 到 5 个字符',
							trigger: 'blur'
						}
					],
					mobile: [{
							type: 'number',
							required: true,
							message: '请输入手机号',
							trigger: 'blur',
							validator: "checkPhone",
						},
						{
							pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, 
							message: '手机号格式不对',
							trigger: 'blur'
						}
					],
					email: [{
							required: true,
							message: '请输入邮箱地址',
							trigger: 'blur',
						},
						{
							type: 'email',
							message: '请输入正确的邮箱地址',
							trigger: ['blur', 'change'],
						}
					],
					QQ:[{
						
					}],
					opus:[{
						required: true,
						
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style scoped>
	.hender {
		height: 50px;
		line-height: 50px;
		background-color: #fff;
		border-bottom: solid 1px #E2E2E2;
		padding-left: 132px;
		text-align: left;


	}

	.content {
		width: 1080px;
		height: 391px;
		margin-top: 104px;
		margin-left: 132px;
		background-color: #fff;
	}

	.el-form {
		width: 500px;
		left: 600px;
		position: relative;
		left: 287px;
		top: 30px;
	}
	.opus-input{
		width: 180px;
		text-align: center;
	}
</style>
