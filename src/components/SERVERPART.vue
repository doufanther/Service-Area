<template>
	<div class="serverpart">
		<div class="main" v-show="partshow">
			<h1>服务区</h1>
			<ul>
				<li v-for="(item,index) in serverpart" @click="goDetail(index)">
						<p>内码{{item.SERVERPART_ID}}</p>
						<p>服务区名称{{item.SERVERPART_NAME}}</p>
						<p>服务区编码{{item.SERVERPART_CODE}}</p>
						<p>地址{{item.SERVERPART_ADDRESS}}</p>
				</li>
			</ul>
		</div>
		<serverpart-shop :shop="selectedShop" v-if="selectedShop"></serverpart-shop>	
	</div>
</template>

<script>
	import serverpartshop from './serverpartshop.vue'
	
	import axios from 'axios'
	const status=200;
	export default{
		props:{
			
		},
		data(){
			return {
				url:'http://test.eshangtech.com:6060/HighWay/Handler/handler_ajax.ashx?action_type=getTotalServerPart',
				serverpart:'',
				selectedShop: '',//内码
				partshow:true
			}
		},
		created(){
			axios.get(this.url).then((res)=>{
				console.log(res);
				if(res.status===status){
					this.serverpart=res.data.SERVERPARTObject;
				}
			})
		},
		computed:{
			
		},
		methods:{
			goDetail(index) {
				this.selectedShop=this.serverpart[index].SERVERPART_ID;
				this.partshow=false
			}
		},
		components: {
		   'serverpart-shop':serverpartshop
		}
	}
</script>

<style lang="scss" scoped type="text/css">
	.serverpart{
		width:100%;
		text-align: center;
		ul{
			
			li{
				margin-bottom: 20px;
				background:#000;
				color: #fff;
			}
		}
	}
</style>